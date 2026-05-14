import type { Locale } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  hi: () => import("@/dictionaries/hi.json").then((m) => m.default),
  ja: () => import("@/dictionaries/ja.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  pt: () => import("@/dictionaries/pt.json").then((m) => m.default),
  ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  de: () => import("@/dictionaries/de.json").then((m) => m.default),
  "zh-CN": () => import("@/dictionaries/zh-CN.json").then((m) => m.default),
  tr: () => import("@/dictionaries/tr.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  header: {
    logo: string;
    nav: {
      eligibility: string;
      faq: string;
      history: string;
    };
  };
  hero: {
    badge: string;
    boostLabel: string;
    title: string;
    subtitle: string;
    endsLabel: string;
    endsValue: string;
    sourceLabel: string;
  };
  eligibility: {
    title: string;
    subtitle: string;
    eligible: string;
    notEligible: string;
    plans: {
      name: string;
      status: boolean;
      description: string;
    }[];
    platforms: {
      title: string;
      items: string[];
    };
    note: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  sponsors: {
    stackopticHeadline: string;
    stackopticSub: string;
    stackopticPromoBadge: string;
    stackopticPromo: string;
    stackopticCode: string;
  };
  promotionHistory: {
    title: string;
    subtitle: string;
    archiveLabel: string;
    endedLabel: string;
    items: {
      title: string;
      dates: string;
      description: string;
    }[];
  };
  footer: {
    crafted: string;
    digiwingsPromo: string;
    digiwingsCta: string;
    buymeacoffee: string;
    disclaimer: string;
    rights: string;
  };
}
