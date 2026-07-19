import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "help").map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = seoRegistry.find((a) => a.category === "help" && a.slug === slug);
  
  if (!article) {
    return {
      title: "Help Article Not Found",
    };
  }

  const displayTitle = article.title.length > 55 ? `${article.title.slice(0, 52)}...` : article.title;
  const displayDesc = article.description.length > 150 ? `${article.description.slice(0, 147)}...` : article.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Support`,
    description: displayDesc,
    alternates: {
      canonical: `/help/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.whofollowsback.com/help/${slug}`,
      type: "article",
    }
  };
}

export default async function HelpDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = seoRegistry.find((a) => a.category === "help" && a.slug === slug);

  if (!article) {
    notFound();
  }

  return <PSEOLayout page={article} />;
}
