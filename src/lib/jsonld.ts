import { i18n, type Locale } from "@/lib/i18n/config";
import { localize, type DealRecord, type ToolRecord } from "@/lib/deals";
import { AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";

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
    author: { "@id": PERSON_ID },
    ...(opts.dateModified ? { dateModified: iso(opts.dateModified) } : {}),
    ...(opts.speakable ? { speakable: { "@type": "SpeakableSpecification", cssSelector: opts.speakable } } : {}),
    ...(opts.about ? { about: opts.about } : {}),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
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

export function softwareNode(tool: ToolRecord, lang: Locale, category: string): Node {
  return {
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: category,
    operatingSystem: "Web",
    url: tool.website,
    description: localize(tool.tagline, lang),
    publisher: { "@type": "Organization", name: tool.vendor },
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
