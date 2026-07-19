import { seoRegistry } from "@/data/seo-registry";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Connection Auditing Resources Directory | WhoFollowsBack",
  description: "Browse our checklists, sheets, and marketing guides to optimize your social graph and audit connection health.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  const resourcesList = seoRegistry.filter((p) => p.category === "resources");

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4">
              Social Media Resources
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl leading-relaxed">
              Explore downloadable sheets, growth check-ups, and connection checklists to safely manage your network growth.
            </p>
          </div>

          {/* Resources Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourcesList.map((res) => (
              <div 
                key={res.slug}
                className="p-6 rounded-2xl border border-navy/5 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <h2 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                    <Link href={`/resources/${res.slug}`}>
                      {res.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-navy/60 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>
                <div>
                  <Link 
                    href={`/resources/${res.slug}`}
                    className="text-xs font-bold text-electric hover:underline flex items-center gap-1"
                  >
                    View Resource &rarr;
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
