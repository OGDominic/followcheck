import type { Metadata } from "next";
import ResultsPageClient from "./ResultsPageClient";

export const metadata: Metadata = {
  title: "Connection Analysis Results | FollowCheck",
  description: "View and search your Instagram follower and following connection analysis results securely.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResultsPage() {
  return <ResultsPageClient />;
}
