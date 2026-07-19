import { guides } from "@/data/guides";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Follower Onboarding & Usage Guides | WhoFollowsBack",
  description: "Read our comprehensive step-by-step user manuals to help you setup, run, and export your follower audits securely.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4">
              FollowCheck User Guides
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl leading-relaxed">
              Step-by-step walk-throughs to set up the browser utility, analyze follower and following connections, and export reports safely.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article 
                key={guide.slug}
                className="flex flex-col justify-between p-6 rounded-2xl border border-navy/5 bg-white shadow-xs hover:shadow-md hover:border-navy/10 transition-all duration-300 group"
              >
                <div>
                  <span className="text-xs text-navy/40 font-semibold uppercase tracking-wider block mb-3">
                    {guide.readTime}
                  </span>
                  <h2 className="text-lg font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                    <Link href={`/guides/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-navy/60 leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>
                <Link 
                  href={`/guides/${guide.slug}`}
                  className="text-xs font-bold text-electric hover:underline inline-flex items-center gap-1"
                >
                  View Guide &rarr;
                </Link>
              </article>
            ))}
          </div>

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
