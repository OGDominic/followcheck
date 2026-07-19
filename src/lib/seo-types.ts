export type SEOCategory = 'tools' | 'features' | 'comparisons' | 'resources' | 'blog' | 'guides' | 'help';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  name: string;
  text: string;
}

export interface BenefitItem {
  title: string;
  text: string;
}

export interface SEOPage {
  slug: string;
  title: string;
  description: string;
  category: SEOCategory;
  keywords: string[];
  faqs: FAQItem[];
  contentToken: string; // The primary subject/keyword phrase this page builds copy around
  customContent?: string; // Optional direct HTML overrides
  steps?: StepItem[]; // Used for how-to instructions
  publishDate?: string; // Used for blog/guides
  readTime?: string; // Used for blog/guides
  comparisonTarget?: string; // Used for comparison pages
  benefits?: BenefitItem[]; // Custom benefits list override
}
