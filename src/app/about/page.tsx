import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About FollowCheck | Simple Instagram Connection Analysis",
  description: "Learn about FollowCheck, a simple privacy-focused browser utility for understanding Instagram follower and following relationships.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About FollowCheck | Simple Instagram Connection Analysis",
    description: "Learn about FollowCheck, a simple privacy-focused browser utility for understanding Instagram follower and following relationships.",
    url: "https://www.whofollowsback.com/about",
    siteName: "FollowCheck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FollowCheck | Simple Instagram Connection Analysis",
    description: "Learn about FollowCheck, a simple privacy-focused browser utility for understanding Instagram follower and following relationships.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
