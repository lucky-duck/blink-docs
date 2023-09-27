import { VercelRequest, VercelResponse } from "@vercel/node";
import axios, { AxiosRequestHeaders } from "axios";

export default async (req: VercelRequest, res: VercelResponse) => {
  // Extract the target URL from the request path
  let targetURL = req.query["...url"] as string;

  // Convert hyphens back to slashes after .co.uk
  targetURL = targetURL.replace(/\.co\.uk-/, ".co.uk/").replace(/-/g, "/");

  // Check if the URL doesn't start with 'http' (assuming it could be http or https) and prepend it
  if (!targetURL.startsWith("http")) {
    targetURL = "https://" + targetURL;
  }

  // Prepare headers, removing problematic ones
  const { host, referer, origin, ...cleanedHeaders } = req.headers;

  // Convert headers to Axios-compatible format
  const axiosHeaders: AxiosRequestHeaders = {};
  for (const key in cleanedHeaders) {
    const value = cleanedHeaders[key];
    if (Array.isArray(value)) {
      axiosHeaders[key] = value.join("; ");
    } else if (typeof value === "string") {
      axiosHeaders[key] = value;
    }
  }

  console.log({ headers: axiosHeaders });

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
