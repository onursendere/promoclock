import type { APIRoute, GetStaticPaths } from "astro";
import { getPosts } from "@/lib/content";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { absoluteUrl, blogPath } from "@/lib/seo";
import { BUILD_TIME, SITE_NAME } from "@/lib/site";

/** One RSS 2.0 feed per language, listing only posts that exist in that language. */
export const getStaticPaths: GetStaticPaths = () => i18n.locales.map((lang) => ({ params: { lang } }));

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Locale;
  const { hub } = getDictionary(lang);
  const posts = (await getPosts(lang)).filter((post) => post.textLang === lang);
  const home = absoluteUrl(blogPath(lang));
  const self = `${home}rss.xml`;
  const lastBuild = posts.length ? Math.max(...posts.map((p) => p.updatedAt)) : BUILD_TIME;

  const items = posts
    .map((post) => {
      const link = absoluteUrl(blogPath(lang, post.slug));
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <dc:creator>${SITE_NAME}</dc:creator>
      <category>${escape(hub.blog.categories[post.category])}</category>
      <description>${escape(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(hub.blog.title)}</title>
    <link>${home}</link>
    <description>${escape(hub.blog.subtitle)}</description>
    <language>${lang}</language>
    <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
