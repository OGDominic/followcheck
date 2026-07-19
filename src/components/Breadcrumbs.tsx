import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.whofollowsback.com${item.href}` : `https://www.whofollowsback.com`
    }))
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Visual Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center text-xs font-medium text-navy/50">
        <Link href="/" className="hover:text-electric transition-colors">
          Home
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-2 text-navy/30">/</span>
            {item.href && idx < items.length - 1 ? (
              <Link href={item.href} className="hover:text-electric transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy/80 truncate max-w-[200px]" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
