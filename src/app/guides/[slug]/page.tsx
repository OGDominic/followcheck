import { guides } from "@/data/guides";
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
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  
  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  const displayTitle = guide.title.length > 55 ? `${guide.title.slice(0, 52)}...` : guide.title;
  const displayDesc = guide.description.length > 150 ? `${guide.description.slice(0, 147)}...` : guide.description;

  return {
    title: `${displayTitle} | WhoFollowsBack Guides`,
    description: displayDesc,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://www.whofollowsback.com/guides/${slug}`,
      type: "article",
    }
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  // JSON-LD HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": guide.title,
    "description": guide.description,
    "step": guide.steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.name,
      "text": step.text,
      "url": `https://www.whofollowsback.com/guides/${slug}#step-${idx + 1}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs 
            items={[
              { label: "Guides", href: "/guides" },
              { label: guide.title }
            ]} 
          />

          <article className="bg-white p-6 sm:p-10 rounded-3xl border border-navy/5 shadow-xs">
            <header className="mb-8 border-b border-navy/5 pb-6">
              <span className="text-xs text-navy/40 font-bold uppercase tracking-wider block mb-3">
                Onboarding Manual &bull; {guide.readTime}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl leading-tight">
                {guide.title}
              </h1>
            </header>

            {/* Quick Steps Checklist */}
            <section className="mb-10 p-6 rounded-2xl bg-soft-white border border-navy/5">
              <h2 className="text-lg font-bold text-navy mb-4">Quick Overview Steps</h2>
              <ol className="space-y-4">
                {guide.steps.map((step, idx) => (
                  <li key={idx} id={`step-${idx + 1}`} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy">{step.name}</h3>
                      <p className="text-xs text-navy/60 leading-relaxed mt-0.5">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Guide Content */}
            <div 
              className="prose prose-navy max-w-none text-navy/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />

            {/* Back Links */}
            <div className="mt-12 pt-6 border-t border-navy/5 flex items-center justify-between text-xs font-bold text-electric">
              <Link href="/guides" className="hover:underline">
                &larr; Back to Guides
              </Link>
              <Link href="/#cta" className="hover:underline">
                Install Extension &rarr;
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
