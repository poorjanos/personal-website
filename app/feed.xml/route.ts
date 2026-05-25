import { getAllPosts, getPost } from "@/lib/posts";

const SITE_URL = "https://www.janospoor.com";
const SITE_TITLE = "János Poór";
const SITE_DESCRIPTION =
  "Writing on data leadership, stakeholder management, and AI-driven workflow automation.";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const lastBuildDate = (posts[0] ? new Date(posts[0].date) : new Date()).toUTCString();

  const items = posts
    .map((p) => {
      const post = getPost(p.slug);
      return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt ?? ""}]]></description>
      <content:encoded><![CDATA[${post.contentHtml}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
