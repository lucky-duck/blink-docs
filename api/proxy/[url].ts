import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async (req: VercelRequest, res: VercelResponse) => {
  const proxyTarget = req.query.proxy as string[];

  if (!proxyTarget || proxyTarget.length === 0) {
    return res.status(400).json({ error: "No valid URL provided in the path." });
  }

  // Construct the target URL
  const targetURL = `https://${proxyTarget.join("/")}`;

  try {
    const response = await axios.get(targetURL);

    // Set the CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching the target URL:", error.message);
    return res.status(500).json({ error: "Failed to fetch the target URL." });
  }
};
