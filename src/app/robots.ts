import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/results", "/api/"],
    },
    sitemap: "https://www.whofollowsback.com/sitemap.xml",
  };
}
