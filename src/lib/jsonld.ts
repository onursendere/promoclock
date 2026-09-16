import type { Locale } from "@/lib/i18n/config";
import type { UiDictionary } from "@/lib/i18n/dictionaries";
import { AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";
import { absoluteUrl, localePath } from "@/lib/seo";

export const author = {
  "@type": "Person",
  name: AUTHOR.name,
  url: AUTHOR.x,
  sameAs: [AUTHOR.x, AUTHOR.github, AUTHOR.linkedin],
};

export const publisher = {
  "@type": "Organization",
  name: "Digiwings",
  url: AUTHOR.agency,
};

export function websiteJsonLd(lang: Locale, dict: UiDictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl(localePath(lang)),
    description: dict.meta.description,
    inLanguage: lang,
    publisher,
  };
}

export function softwareAppJsonLd(lang: Locale, dict: UiDictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    description: dict.meta.description,
    url: absoluteUrl(localePath(lang)),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author,
    publisher,
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}
