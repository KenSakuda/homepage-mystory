import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.b-mystory.com/sitemap.xml",
    host: "https://www.b-mystory.com",
  };
}
