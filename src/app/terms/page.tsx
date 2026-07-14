import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Use | FollowCheck",
  description: "Read the FollowCheck Terms of Use governing access to our website and browser extension.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | FollowCheck",
    description: "Read the FollowCheck Terms of Use governing access to our website and browser extension.",
    url: "https://followcheck.com/terms",
    siteName: "FollowCheck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | FollowCheck",
    description: "Read the FollowCheck Terms of Use governing access to our website and browser extension.",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
