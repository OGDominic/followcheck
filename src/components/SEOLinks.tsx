import Link from "next/link";
import { toolPages } from "@/data/tools";
import { blogPosts } from "@/data/blog";

export default function SEOLinks() {
  return (
    <div className="border-t border-navy/5 bg-navy/5/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-navy/40 mb-6">Explore Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Landing Tools */}
          <div>
            <h4 className="text-xs font-bold text-navy/70 uppercase mb-3">Auditing Tools</h4>
            <ul className="space-y-2 text-sm text-navy/60">
              {toolPages.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="hover:text-electric transition-colors">
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Articles */}
          <div>
            <h4 className="text-xs font-bold text-navy/70 uppercase mb-3">Popular Articles</h4>
            <ul className="space-y-2 text-sm text-navy/60">
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="hover:text-electric transition-colors">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Resources */}
          <div>
            <h4 className="text-xs font-bold text-navy/70 uppercase mb-3">Guides & Support</h4>
            <ul className="space-y-2 text-sm text-navy/60">
              <li>
                <Link href="/guides" className="hover:text-electric transition-colors">
                  All User Guides
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-electric transition-colors">
                  Help & Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-electric transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-electric transition-colors">
                  About WhoFollowsBack
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
