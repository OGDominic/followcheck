import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy | FollowCheck",
  description: "Read the FollowCheck Privacy Policy and learn how information is handled when you use our website and browser extension.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | FollowCheck",
    description: "Read the FollowCheck Privacy Policy and learn how information is handled when you use our website and browser extension.",
    url: "https://followcheck.com/privacy",
    siteName: "FollowCheck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FollowCheck",
    description: "Read the FollowCheck Privacy Policy and learn how information is handled when you use our website and browser extension.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
