import { seoRegistry } from "@/data/seo-registry";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FollowCheck Comparisons & Platform Reviews | WhoFollowsBack",
  description: "Compare FollowCheck with other Instagram followers app trackers. Learn about security differences, local scripts, and cost metrics.",
  alternates: {
    canonical: "/comparisons",
  },
};

export default function ComparisonsPage() {
  const comparisonsList = seoRegistry.filter((p) => p.category === "comparisons");

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ label: "Comparisons", href: "/comparisons" }]} />

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4">
              Product Comparisons
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl leading-relaxed">
              Compare FollowCheck to alternative metrics trackers, apps, and manual auditing methods to make the safest and most efficient choice.
            </p>
          </div>

          {/* Comparisons Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparisonsList.map((comp) => (
              <div 
                key={comp.slug}
                className="p-6 rounded-2xl border border-navy/5 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <h2 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                    <Link href={`/comparisons/${comp.slug}`}>
                      {comp.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-navy/60 leading-relaxed mb-6">
                    {comp.description}
                  </p>
                </div>
                <div>
                  <Link 
                    href={`/comparisons/${comp.slug}`}
                    className="text-xs font-bold text-electric hover:underline flex items-center gap-1"
                  >
                    View Full Comparison &rarr;
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
