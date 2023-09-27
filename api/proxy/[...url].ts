import { VercelRequest, VercelResponse } from "@vercel/node";
// import axios, { AxiosRequestHeaders } from "axios";

export default async (req: VercelRequest, res: VercelResponse) => {
  // Extract the target URL from the request path
  console.log(req.query, "query");
  console.log(req.url, "url");
  console.log(req.cookies, "cookies");
  console.log(req.headers, "headers");
  console.log(req.body, "body");
  console.log(req.method, "method");
  console.log(req.rawHeaders, "rawHeaders");

  // // Check if the URL doesn't start with 'http' (assuming it could be http or https) and prepend it
  // if (!targetURL.startsWith("http")) {
  //   targetURL = "https://" + targetURL;
  // }

  // // Prepare headers, removing problematic ones
  // const { host, referer, origin, ...cleanedHeaders } = req.headers;

  // // Convert headers to Axios-compatible format
  // const axiosHeaders: AxiosRequestHeaders = {};
  // for (const key in cleanedHeaders) {
  //   const value = cleanedHeaders[key];
  //   if (Array.isArray(value)) {
  //     axiosHeaders[key] = value.join("; ");
  //   } else if (typeof value === "string") {
  //     axiosHeaders[key] = value;
  //   }
  // }

  // try {
  //   const response = await axios({
  //     method: req.method as any,
  //     url: targetURL,
  //     headers: axiosHeaders,
  //     data: req.body,
  //   });

  //   return res.status(response.status).json(response.data);
  // } catch (error) {
  //   console.log("Error in proxying request:", error.message);
  //   return res.status(error.response?.status || 500).json({ error: error.message });
  // }
};
