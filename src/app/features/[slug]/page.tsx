import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "features").map((feat) => ({
    slug: feat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feat = seoRegistry.find((f) => f.category === "features" && f.slug === slug);
  
  if (!feat) {
    return {
      title: "Feature Not Found",
    };
  }

  const displayTitle = feat.title.length > 55 ? `${feat.title.slice(0, 52)}...` : feat.title;
  const displayDesc = feat.description.length > 150 ? `${feat.description.slice(0, 147)}...` : feat.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Features`,
    description: displayDesc,
    alternates: {
      canonical: `/features/${slug}`,
    },
    openGraph: {
      title: feat.title,
      description: feat.description,
      url: `https://www.whofollowsback.com/features/${slug}`,
      type: "website",
    }
  };
}

export default async function FeatureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const feat = seoRegistry.find((f) => f.category === "features" && f.slug === slug);

  if (!feat) {
    notFound();
  }

  return <PSEOLayout page={feat} />;
}
