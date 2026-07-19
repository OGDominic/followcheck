import { seoRegistry } from "@/data/seo-registry";
import { notFound } from "next/navigation";
import PSEOLayout from "@/components/PSEOLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoRegistry.filter((p) => p.category === "blog").map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = seoRegistry.find((p) => p.category === "blog" && p.slug === slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const displayTitle = post.title.length > 55 ? `${post.title.slice(0, 52)}...` : post.title;
  const displayDesc = post.description.length > 150 ? `${post.description.slice(0, 147)}...` : post.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Blog`,
    description: displayDesc,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.whofollowsback.com/blog/${slug}`,
      type: "article",
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = seoRegistry.find((p) => p.category === "blog" && p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PSEOLayout page={post} />;
}
