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
      howItWorks: string;
      eligibility: string;
      schedule: string;
      faq: string;
      devTools: string;
    };
  };
  hero: {
    badge: string;
    promotionActive: string;
    promotionInactive: string;
    promotionExpired: string;
    promotionNotStarted: string;
    activeSubtitle: string;
    inactiveSubtitle: string;
    expiredSubtitle: string;
    notStartedSubtitle: string;
    countdownLabel: string;
    yourTimezone: string;
    yourLocalTime: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    peakHours: string;
    offPeakHours: string;
    weekdays: string;
    allWeekend: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
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
  schedule: {
    title: string;
    subtitle: string;
    tableHeaders: {
      city: string;
      timezone: string;
      peakHours: string;
      offPeakHours: string;
    };
    weekdayLabel: string;
    weekendLabel: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  devTools: {
    title: string;
    subtitle: string;
    apiTitle: string;
    apiDescription: string;
    tryApi: string;
    notifTitle: string;
    notifDescription: string;
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
