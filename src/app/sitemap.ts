import { MetadataRoute } from "next";
import { seoRegistry } from "@/data/seo-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.whofollowsback.com";

  // 1. Static Hub Pages
  const corePages = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/how-it-works", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/terms", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/tools", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/guides", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/help", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/features", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/comparisons", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const coreNodes = corePages.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Programmatic Registry Pages (Dynamic Paths)
  const registryNodes = seoRegistry.map((page) => ({
    url: `${baseUrl}/${page.category}/${page.slug}`,
    lastModified: page.publishDate ? new Date(page.publishDate) : new Date(),
    changeFrequency: "weekly" as const,
    priority: page.category === "tools" ? 0.8 : page.category === "blog" ? 0.7 : 0.6,
  }));

  return [...coreNodes, ...registryNodes];
}
