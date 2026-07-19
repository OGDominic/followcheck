import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "guides").map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = seoRegistry.find((g) => g.category === "guides" && g.slug === slug);
  
  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  const displayTitle = guide.title.length > 55 ? `${guide.title.slice(0, 52)}...` : guide.title;
  const displayDesc = guide.description.length > 150 ? `${guide.description.slice(0, 147)}...` : guide.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Guides`,
    description: displayDesc,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://www.whofollowsback.com/guides/${slug}`,
      type: "article",
    }
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = seoRegistry.find((g) => g.category === "guides" && g.slug === slug);

  if (!guide) {
    notFound();
  }

  return <PSEOLayout page={guide} />;
}
