import { helpArticles } from "@/data/help";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhoFollowsBack Help Center & Support | Diagnostic FAQs",
  description: "Find troubleshooting articles, safety specifications, rate-limiting advice, and common questions regarding FollowCheck.",
  alternates: {
    canonical: "/help",
  },
};

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ label: "Help Center", href: "/help" }]} />

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4">
              Help Center & Diagnostics
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl leading-relaxed">
              Have technical questions, experiencing rate limits, or curious about safety policies? Find solutions in our self-service directory.
            </p>
          </div>

          {/* Help articles catalog */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpArticles.map((article) => (
              <div 
                key={article.slug}
                className="p-6 rounded-2xl border border-navy/5 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-md bg-navy/5 px-2 py-0.5 text-xs font-semibold text-navy/60">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-navy group-hover:text-electric transition-colors mb-2 leading-snug">
                    <Link href={`/help/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-navy/60 leading-relaxed mb-6">
                    {article.description}
                  </p>
                </div>
                <div>
                  <Link 
                    href={`/help/${article.slug}`}
                    className="text-xs font-bold text-electric hover:underline flex items-center gap-1"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
