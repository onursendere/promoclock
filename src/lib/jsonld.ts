import { i18n, type Locale } from "@/lib/i18n/config";
import { localize, type DealRecord, type ToolRecord } from "@/lib/deals";
import { AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";
import { SCHEMA_CATEGORY, operatingSystems, type ToolProfile } from "@/lib/profiles";

/**
 * Schema.org nodes. Pages pass their own nodes to BaseLayout, which wraps them in a
 * single @graph together with the site-wide Organization, Person and WebSite nodes.
 */
type Node = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#onur-sendere`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const iso = (ms: number) => new Date(ms).toISOString();

export function siteNodes(): Node[] {
  return [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
      founder: { "@id": PERSON_ID },
      sameAs: [AUTHOR.repo],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR.name,
      url: AUTHOR.x,
      jobTitle: "Founder",
      description:
        "Founder of PromoClock and Digiwings. Tracks AI tool pricing, Claude usage limits and AI promotions, and checks each fact against the vendor's own pages.",
      knowsAbout: ["AI tool pricing", "Claude usage limits", "AI subscriptions", "Software promotions", "SEO"],
      worksFor: { "@type": "Organization", name: "Digiwings", url: AUTHOR.agency },
      sameAs: [AUTHOR.x, AUTHOR.github, AUTHOR.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: [...i18n.locales],
      publisher: { "@id": ORG_ID },
    },
  ];
}

export function webPageNode(opts: {
  url: string;
  name: string;
  description: string;
  lang: Locale;
  dateModified?: number;
  type?: string;
  speakable?: string[];
  about?: Node;
  /** @id of the page's main image node (ImageObject). */
  primaryImage?: string;
  /** @id of the BreadcrumbList on the page. */
  breadcrumb?: string;
  /** Defaults to the founder; blog pages are authored by the organization. */
  authorId?: string;
}): Node {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    author: { "@id": opts.authorId ?? PERSON_ID },
    ...(opts.dateModified ? { dateModified: iso(opts.dateModified) } : {}),
    ...(opts.speakable ? { speakable: { "@type": "SpeakableSpecification", cssSelector: opts.speakable } } : {}),
    ...(opts.about ? { about: opts.about } : {}),
    ...(opts.primaryImage ? { primaryImageOfPage: { "@id": opts.primaryImage } } : {}),
    ...(opts.breadcrumb ? { breadcrumb: { "@id": opts.breadcrumb } } : {}),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[], id?: string): Node {
  return {
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function faqNode(items: { question: string; answer: string }[], url?: string): Node {
  return {
    "@type": "FAQPage",
    ...(url ? { "@id": `${url}#faq` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function itemListNode(name: string, items: { name: string; url: string }[]): Node {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: item.url })),
  };
}

/**
 * The tool itself. With a profile it carries the verified facts; it never carries ratings or
 * reviews, and an Offer only when a starting price was verified on the vendor's pricing page.
 */
export function softwareNode(tool: ToolRecord, lang: Locale, category: string, profile?: ToolProfile): Node {
  const os = profile ? operatingSystems(profile.platforms) : "";
  const price = profile?.pricing;
  return {
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: [SCHEMA_CATEGORY[tool.category], category],
    ...(os ? { operatingSystem: os } : {}),
    url: tool.website,
    description: profile?.summary ?? localize(tool.tagline, lang),
    ...(profile ? { featureList: profile.keyFeatures.map((f) => f.name) } : {}),
    publisher: { "@type": "Organization", name: tool.vendor },
    ...(price?.freePlan ? { isAccessibleForFree: true } : {}),
    ...(price?.startingPrice !== undefined && price.currency
      ? {
          offers: {
            "@type": "Offer",
            price: price.startingPrice,
            priceCurrency: price.currency,
            category: "subscription",
            url: tool.website,
          },
        }
      : {}),
  };
}

/** Promotions become Offers; limit changes are described on the page itself. */
export function offerNode(deal: DealRecord, tool: ToolRecord, lang: Locale, url: string): Node | undefined {
  if (deal.kind === "limit-change" || deal.kind === "limit-boost") return undefined;
  return {
    "@type": "Offer",
    "@id": `${url}#offer`,
    name: localize(deal.headline, lang),
    description: localize(deal.summary, lang),
    url: deal.ctaUrl ?? tool.website,
    offeredBy: { "@type": "Organization", name: tool.vendor, url: tool.website },
    itemOffered: { "@type": "SoftwareApplication", name: tool.name, url: tool.website },
    eligibleCustomerType: localize(deal.audience, lang),
    ...(deal.startKnown !== false ? { validFrom: iso(deal.startsAt) } : {}),
    ...(deal.endsAt ? { validThrough: iso(deal.endsAt) } : {}),
    ...(deal.regions ? { eligibleRegion: deal.regions } : {}),
  };
}

export function howToNode(deal: DealRecord, lang: Locale, name: string): Node | undefined {
  if (!deal.steps?.length) return undefined;
  return {
    "@type": "HowTo",
    name,
    step: deal.steps.map((step, i) => ({ "@type": "HowToStep", position: i + 1, text: localize(step, lang) })),
  };
}

/** A "how to" with named steps (blog posts); the steps are also visible on the page. */
export function howToStepsNode(name: string, steps: { name: string; text: string }[], url: string, lang: Locale): Node {
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name,
    inLanguage: lang,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${url}#step-${i + 1}`,
    })),
  };
}

/**
 * Hero photo with its credit and license, so image search can show both. Carries every image
 * metadata field Google checks (Search Console flags each missing one). `url` must be the <img src>
 * the page shows: Google ties the metadata to the image whose URL matches contentUrl.
 */
export function imageObjectNode(opts: {
  id: string;
  url: string;
  width: number;
  height: number;
  caption: string;
  credit: string;
  creditUrl: string;
  license: string;
}): Node {
  const creator = opts.credit.split(/\s+\/\s+|\s+via\s+|\s+on\s+/)[0];
  return {
    "@type": "ImageObject",
    "@id": opts.id,
    url: opts.url,
    contentUrl: opts.url,
    width: opts.width,
    height: opts.height,
    caption: opts.caption,
    creditText: opts.credit,
    creator: { "@type": "Person", name: creator },
    // Unsplash and CC BY photographers keep the copyright; a CC0 or public domain photo has none.
    copyrightNotice: opts.license.includes("/publicdomain/") ? `${creator}, public domain` : `© ${creator}`,
    license: opts.license,
    acquireLicensePage: opts.creditUrl,
  };
}

export interface BlogPostingInput {
  url: string;
  lang: Locale;
  headline: string;
  description: string;
  /** Absolute URLs: 16:9, 4:3 and 1:1 crops of the hero photo. */
  images: string[];
  publishedAt: number;
  updatedAt: number;
  wordCount: number;
  readingMinutes: number;
  section: string;
  keywords: string[];
  /** The tools the post is about, most important first. */
  tools: Node[];
  sources: string[];
  blogUrl: string;
  /** English original, set on translations. */
  translationOf?: string;
  /** Translations, set on the English original. */
  translations?: { url: string; lang: Locale }[];
}

export function blogPostingNode(p: BlogPostingInput): Node {
  return {
    "@type": "BlogPosting",
    "@id": `${p.url}#article`,
    mainEntityOfPage: { "@id": `${p.url}#webpage` },
    url: p.url,
    headline: p.headline.length > 110 ? `${p.headline.slice(0, 107)}…` : p.headline,
    description: p.description,
    ...(p.images.length ? { image: p.images, thumbnailUrl: p.images[0] } : {}),
    datePublished: iso(p.publishedAt),
    dateModified: iso(p.updatedAt),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: p.lang,
    wordCount: p.wordCount,
    timeRequired: `PT${p.readingMinutes}M`,
    articleSection: p.section,
    keywords: p.keywords.join(", "),
    isAccessibleForFree: true,
    isPartOf: { "@id": `${p.blogUrl}#blog` },
    ...(p.tools.length ? { about: p.tools.slice(0, 3), ...(p.tools.length > 3 ? { mentions: p.tools.slice(3) } : {}) } : {}),
    citation: p.sources.map((url) => ({ "@type": "CreativeWork", url })),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".page-summary", ".key-takeaways"] },
    ...(p.translationOf ? { translationOfWork: { "@id": `${p.translationOf}#article` } } : {}),
    ...(p.translations?.length
      ? { workTranslation: p.translations.map((t) => ({ "@id": `${t.url}#article`, inLanguage: t.lang })) }
      : {}),
  };
}

/** The blog itself, listing its posts (newest first). */
export function blogNode(opts: {
  url: string;
  lang: Locale;
  name: string;
  description: string;
  posts: { url: string; headline: string; publishedAt: number; updatedAt: number; image?: string }[];
}): Node {
  return {
    "@type": "Blog",
    "@id": `${opts.url}#blog`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    author: { "@id": ORG_ID },
    blogPost: opts.posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${post.url}#article`,
      url: post.url,
      headline: post.headline,
      datePublished: iso(post.publishedAt),
      dateModified: iso(post.updatedAt),
      author: { "@id": ORG_ID },
      ...(post.image ? { image: post.image } : {}),
    })),
  };
}

/** A tool as the subject of an article: name, vendor site and our profile page. */
export function toolMentionNode(tool: ToolRecord, profileUrl: string): Node {
  return {
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: SCHEMA_CATEGORY[tool.category],
    url: tool.website,
    publisher: { "@type": "Organization", name: tool.vendor },
    subjectOf: { "@type": "WebPage", url: profileUrl },
  };
}
