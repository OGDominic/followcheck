import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "comparisons").map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = seoRegistry.find((c) => c.category === "comparisons" && c.slug === slug);
  
  if (!comp) {
    return {
      title: "Comparison Not Found",
    };
  }

  const displayTitle = comp.title.length > 55 ? `${comp.title.slice(0, 52)}...` : comp.title;
  const displayDesc = comp.description.length > 150 ? `${comp.description.slice(0, 147)}...` : comp.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Comparisons`,
    description: displayDesc,
    alternates: {
      canonical: `/comparisons/${slug}`,
    },
    openGraph: {
      title: comp.title,
      description: comp.description,
      url: `https://www.whofollowsback.com/comparisons/${slug}`,
      type: "website",
    }
  };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = seoRegistry.find((c) => c.category === "comparisons" && c.slug === slug);

  if (!comp) {
    notFound();
  }

  return <PSEOLayout page={comp} />;
}
