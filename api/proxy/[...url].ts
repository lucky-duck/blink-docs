import { VercelRequest, VercelResponse } from "@vercel/node";
import axios, { AxiosRequestHeaders } from "axios";

export default async (req: VercelRequest, res: VercelResponse) => {
  // Extract the target URL from the request path
  let targetURL = req.query["...url"] as string;

  console.log(req.headers["content-type"]);
  console.log(req.headers["authorization"]);

  // Convert hyphens back to slashes after .co.uk
  targetURL = targetURL.replace(/\.co\.uk-/, ".co.uk/").replace(/-/g, "/");

  // Check if the URL doesn't start with 'http' (assuming it could be http or https) and prepend it
  if (!targetURL.startsWith("http")) {
    targetURL = "https://" + targetURL;
  }

  // Define headers we want to forward explicitly
  const headersToForward = ["Authorization", "Content-Type", "user-agent"]; // Add any other headers you want to forward here

  const axiosHeaders: AxiosRequestHeaders = {};

  headersToForward.forEach((headerKey) => {
    if (req.headers[headerKey]) {
      const value = req.headers[headerKey];
      if (Array.isArray(value)) {
        axiosHeaders[headerKey] = value.join("; ");
      } else if (typeof value === "string") {
        axiosHeaders[headerKey] = value;
      }
    }
  });

  try {
    const response = await axios({
      method: req.method as any,
      url: targetURL,
      headers: axiosHeaders,
      data: req.body,
    });

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log("Error in proxying request:", error.message);
    return res.status(error.response?.status || 500).json({ error: error.message });
  }
};
