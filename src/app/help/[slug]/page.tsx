import { helpArticles } from "@/data/help";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return helpArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = helpArticles.find((a) => a.slug === slug);
  
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
  const article = helpArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // JSON-LD Article Schema for Help Article
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "publisher": {
      "@type": "Organization",
      "name": "WhoFollowsBack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.whofollowsback.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.whofollowsback.com/help/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs 
            items={[
              { label: "Help Center", href: "/help" },
              { label: article.title }
            ]} 
          />

          <article className="bg-white p-6 sm:p-10 rounded-3xl border border-navy/5 shadow-xs">
            <header className="mb-8 border-b border-navy/5 pb-6">
              <span className="text-xs text-navy/40 font-bold uppercase tracking-wider block mb-3">
                {article.category} Support
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl leading-tight">
                {article.title}
              </h1>
            </header>

            {/* Help Content */}
            <div 
              className="prose prose-navy max-w-none text-navy/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Back Links */}
            <div className="mt-12 pt-6 border-t border-navy/5 flex items-center justify-between text-xs font-bold text-electric">
              <Link href="/help" className="hover:underline">
                &larr; Back to Help Center
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Support &rarr;
              </Link>
            </div>
          </article>

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
