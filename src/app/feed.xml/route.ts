import { blogPosts } from "@/data/blog";

export async function GET() {
  const baseUrl = "https://www.whofollowsback.com";
  
  const rssItems = blogPosts
    .map((post) => {
      const pubDate = new Date(post.publishDate).toUTCString();
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${post.description}]]></description>
        </item>
      `;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>WhoFollowsBack Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Stay updated with our latest Instagram follower insights, growth tutorials, and technical safety guides.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${rssItems}
      </channel>
    </rss>
  `.trim();

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
