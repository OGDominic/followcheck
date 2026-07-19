import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "resources").map((res) => ({
    slug: res.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const res = seoRegistry.find((r) => r.category === "resources" && r.slug === slug);
  
  if (!res) {
    return {
      title: "Resource Not Found",
    };
  }

  const displayTitle = res.title.length > 55 ? `${res.title.slice(0, 52)}...` : res.title;
  const displayDesc = res.description.length > 150 ? `${res.description.slice(0, 147)}...` : res.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Resources`,
    description: displayDesc,
    alternates: {
      canonical: `/resources/${slug}`,
    },
    openGraph: {
      title: res.title,
      description: res.description,
      url: `https://www.whofollowsback.com/resources/${slug}`,
      type: "website",
    }
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const res = seoRegistry.find((r) => r.category === "resources" && r.slug === slug);

  if (!res) {
    notFound();
  }

  return <PSEOLayout page={res} />;
}
