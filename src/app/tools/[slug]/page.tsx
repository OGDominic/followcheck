import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "tools").map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = seoRegistry.find((t) => t.category === "tools" && t.slug === slug);
  
  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  const displayTitle = tool.title.length > 55 ? `${tool.title.slice(0, 52)}...` : tool.title;
  const displayDesc = tool.description.length > 150 ? `${tool.description.slice(0, 147)}...` : tool.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Tools`,
    description: displayDesc,
    alternates: {
      canonical: `/tools/${slug}`,
    },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: `https://www.whofollowsback.com/tools/${slug}`,
      type: "website",
    }
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = seoRegistry.find((t) => t.category === "tools" && t.slug === slug);

  if (!tool) {
    notFound();
  }

  return <PSEOLayout page={tool} />;
}
