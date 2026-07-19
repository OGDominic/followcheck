import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { toolPages } from "@/data/tools";
import { guides } from "@/data/guides";
import { helpArticles } from "@/data/help";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.whofollowsback.com";

  // 1. Static Core Pages
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
  ];

  const coreNodes = corePages.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamic Tool Pages
  const toolNodes = toolPages.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 3. Dynamic Blog Pages
  const blogNodes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Dynamic Guide Pages
  const guideNodes = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 5. Dynamic Help Pages
  const helpNodes = helpArticles.map((help) => ({
    url: `${baseUrl}/help/${help.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...coreNodes, ...toolNodes, ...blogNodes, ...guideNodes, ...helpNodes];
}
