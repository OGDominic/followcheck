import { seoRegistry } from "@/data/seo-registry";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Follower Insights & Audit Blog | WhoFollowsBack",
  description: "Read the latest tips, guides, and tutorials on checking Instagram followers, safely tracking unfollowers, and cleaning up your feed.",
  alternates: {
    canonical: "/blog",
  },
};

const POSTS_PER_PAGE = 6;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const blogPosts = seoRegistry.filter((p) => p.category === "blog");
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt((resolvedSearchParams.page as string) || "1", 10);
  
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4">
              Follower Insights & Guides
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl leading-relaxed">
              Discover industry best practices for keeping your Instagram account secure, optimizing your audience ratios, and understanding follower metrics.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paginatedPosts.map((post) => (
              <article 
                key={post.slug}
                className="flex flex-col justify-between p-6 rounded-2xl border border-navy/5 bg-white shadow-xs hover:shadow-md hover:border-navy/10 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-md bg-electric/10 px-2.5 py-0.5 text-xs font-semibold text-electric">
                      {post.category}
                    </span>
                    <span className="text-xs text-navy/40 font-medium">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-navy/60 leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-navy/5 flex items-center justify-between">
                  <span className="text-xs text-navy/40">
                    Published: {post.publishDate}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-electric hover:underline flex items-center gap-1"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            basePath="/blog" 
          />

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
