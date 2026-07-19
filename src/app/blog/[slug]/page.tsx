import { blogPosts } from "@/data/blog";
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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  // Ensure title and description fit within SEO recommendations
  const displayTitle = post.title.length > 55 ? `${post.title.slice(0, 52)}...` : post.title;
  const displayDesc = post.description.length > 150 ? `${post.description.slice(0, 147)}...` : post.description;

  return {
    title: `${displayTitle} | WhoFollowsBack`,
    description: displayDesc,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.whofollowsback.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: ["WhoFollowsBack Editorial"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishDate,
    "author": {
      "@type": "Organization",
      "name": "WhoFollowsBack",
      "url": "https://www.whofollowsback.com"
    },
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
      "@id": `https://www.whofollowsback.com/blog/${slug}`
    }
  };

  // JSON-LD FAQ Schema
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs 
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]} 
          />

          <article className="bg-white p-6 sm:p-10 rounded-3xl border border-navy/5 shadow-xs">
            <header className="mb-8 border-b border-navy/5 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-md bg-electric/10 px-2.5 py-0.5 text-xs font-semibold text-electric">
                  {post.category}
                </span>
                <span className="text-xs text-navy/40 font-medium">
                  {post.readTime}
                </span>
                <span className="text-xs text-navy/40">
                  &bull; Published {post.publishDate}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl leading-tight">
                {post.title}
              </h1>
            </header>

            {/* Main Post Body */}
            <div 
              className="prose prose-navy max-w-none text-navy/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-12 pt-8 border-t border-navy/5">
                <h2 className="text-2xl font-extrabold text-navy mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-soft-white border border-navy/5">
                      <h3 className="text-base font-bold text-navy mb-2">{faq.question}</h3>
                      <p className="text-sm text-navy/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Footer CTA */}
            <div className="mt-12 p-6 rounded-2xl bg-navy text-white text-center">
              <h3 className="text-lg font-bold mb-2">Check Your Followers Safely</h3>
              <p className="text-xs text-soft-white/70 mb-4 max-w-md mx-auto">
                Discover mutuals, non-followers, and inactive profiles in under a minute without sharing your password.
              </p>
              <a 
                href="/#cta" 
                className="inline-flex h-10 items-center justify-center rounded-xl bg-electric px-6 text-xs font-bold text-white hover:bg-electric/90 transition-all"
              >
                Scan Now Free
              </a>
            </div>
          </article>

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
