import type { Locale } from "@/lib/i18n/config";

/**
 * Blog posts (src/content/blog/<locale>/<slug>.md). English files hold the facts (dates, category,
 * hero image, tools, sources) plus the English text; other locales hold only the localized text and
 * body. The loader (src/lib/content.ts) merges both into a BlogPost.
 * Pure module: no astro imports, so tests and llms.txt can use it.
 */

export const BLOG_CATEGORIES = ["guides", "comparisons", "deals", "news"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

/** Keys a translation may carry; everything else is inherited from English. */
export const LOCALIZED_POST_KEYS = ["title", "metaTitle", "metaDescription", "excerpt", "imageAlt", "keyTakeaways", "faq", "howTo"] as const;

export interface PostImage {
  /** Astro ImageMetadata of the original file. */
  src: { src: string; width: number; height: number; format: string };
  alt: string;
  credit: string;
  creditUrl: string;
  license: string;
}

export interface PostHowTo {
  name: string;
  steps: { name: string; text: string }[];
}

/** Localized text of a post (English or a translation). */
export interface PostText {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keyTakeaways: string[];
  faq: { q: string; a: string }[];
  howTo?: PostHowTo;
}

/** Merged record: English facts + text in `textLang`. */
export interface BlogPost extends PostText {
  slug: string;
  category: BlogCategory;
  featured: boolean;
  /** Epoch ms. */
  publishedAt: number;
  updatedAt: number;
  image?: PostImage;
  /** Tool slugs, most important first. */
  tools: string[];
  /** Deal ids the English body links to (for "related articles" on deal pages). */
  linkedDeals: string[];
  sources: string[];
  /** Locale the text actually comes from ("en" while a translation is missing). */
  textLang: Locale;
  /** Every locale that has this post, English first. */
  locales: Locale[];
  /** Collection id of the entry whose body is rendered, e.g. "tr/claude-peak-hours". */
  bodyId: string;
  /** Words in the rendered language (Intl.Segmenter, so CJK counts real words). */
  wordCount: number;
  /** From the English original, so every language shows the same estimate. */
  readingMinutes: number;
}

/** Strip markdown syntax that is not read: link targets, images, tables rules, emphasis markers. */
export function plainText(markdown: string): string {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\|?[\s:|-]+\|?$/gm, " ")
    .replace(/[#>*_`|]/g, " ");
}

const segmenters = new Map<string, Intl.Segmenter>();

/** Word count that works for spaced and unspaced (ja, zh) scripts alike. */
export function countWords(text: string, lang: Locale | string): number {
  let segmenter = segmenters.get(lang);
  if (!segmenter) {
    segmenter = new Intl.Segmenter(lang, { granularity: "word" });
    segmenters.set(lang, segmenter);
  }
  let n = 0;
  for (const part of segmenter.segment(text)) if (part.isWordLike) n++;
  return n;
}

/** Reading time at 230 words per minute, never below one minute. */
export const readingMinutes = (englishWords: number) => Math.max(1, Math.round(englishWords / 230));

/** "CC0", "CC BY 4.0"… from a Creative Commons deed URL; anything else shows as "License". */
export function licenseLabel(url: string): string {
  if (/unsplash\.com\/license/.test(url)) return "Unsplash License";
  if (/pexels\.com\/license/.test(url)) return "Pexels License";
  if (/publicdomain\/zero/.test(url)) return "CC0";
  if (/publicdomain\/mark/.test(url)) return "Public domain";
  const cc = url.match(/creativecommons\.org\/licenses\/([a-z-]+)\/([\d.]+)/);
  if (cc) return `CC ${cc[1].toUpperCase()} ${cc[2]}`;
  return "License";
}

/** Rewrites a locale-neutral internal link ("/tools/claude/") for the reader's language. */
export function localizeHref(href: string, lang: Locale | string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (/^\/(api|go|og|llms|_astro|favicon|logo)/.test(href)) return href;
  if (/^\/(en|hi|ja|fr|pt|ko|es|de|zh-CN|tr)(\/|$)/.test(href)) return href;
  return `/${lang}${href}`;
}
