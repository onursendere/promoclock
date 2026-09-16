import type { Locale } from "./config";
import en from "@/dictionaries/en.json";
import hi from "@/dictionaries/hi.json";
import ja from "@/dictionaries/ja.json";
import fr from "@/dictionaries/fr.json";
import pt from "@/dictionaries/pt.json";
import ko from "@/dictionaries/ko.json";
import es from "@/dictionaries/es.json";
import de from "@/dictionaries/de.json";
import zhCN from "@/dictionaries/zh-CN.json";
import tr from "@/dictionaries/tr.json";

/**
 * Hub UI strings (deals, tools, calendar, Claude Watch).
 * Optional on `Dictionary` so a language can ship before it is translated;
 * `getDictionary` fills a missing `hub` from English. English must define it.
 */
export interface HubDictionary {
  nav: {
    claude: string;
    deals: string;
    tools: string;
    calendar: string;
    api: string;
    menu: string;
    language: string;
    theme: string;
    about: string;
  };
  common: {
    verified: string;
    source: string;
    endsIn: string;
    startsIn: string;
    ended: string;
    ongoing: string;
    visit: string;
    getDeal: string;
    details: string;
    code: string;
    copy: string;
    copied: string;
    worldwide: string;
    affiliateNote: string;
    disclosureLink: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    updated: string;
    daysLeft: string;
    hoursLeft: string;
    offer: string;
    who: string;
    ends: string;
    started: string;
    status: string;
    regions: string;
    howToClaim: string;
    goodToKnow: string;
    related: string;
    lastUpdated: string;
    live: string;
    upcomingLabel: string;
    sources: string;
  };
  kinds: Record<
    "limit-boost" | "limit-change" | "discount" | "student" | "free-trial" | "launch" | "seasonal",
    string
  >;
  categories: Record<
    "chat" | "coding" | "image" | "video" | "audio" | "writing" | "productivity" | "agents",
    string
  >;
  claudeWatch: {
    badge: string;
    cardTitle: string;
    peak: string;
    offPeak: string;
    windowProgress: string;
    livePromo: string;
    latestChange: string;
    promoEndsIn: string;
    peakPanelTitle: string;
    peakNote: string;
    seeAllDeals: string;
    statusTitle: string;
    peakShort: string;
    offPeakShort: string;
    changesIn: string;
    peakWindow: string;
    nextPeakWindow: string;
    whatsNew: string;
    info: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaDeals: string;
    ctaTools: string;
    statsLive: string;
    statsTools: string;
    statsDeadline: string;
    statsDeadlineNone: string;
    statsLanguages: string;
    sponsored: string;
    dealsTitle: string;
    dealsSubtitle: string;
    dealsCta: string;
    toolsTitle: string;
    toolsSubtitle: string;
    toolsCta: string;
    historyTitle: string;
    historySubtitle: string;
    archive: string;
    peakTitle: string;
    peakAnswer: string;
    peakFacts: { label: string; value: string }[];
    affectedPlans: string;
    scheduleTitle: string;
  };
  deals: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    filterAll: string;
    live: string;
    upcoming: string;
    archive: string;
    empty: string;
  };
  tools: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    filterAll: string;
    withDeals: string;
    searchPlaceholder: string;
    liveDeals: string;
    noLiveDeals: string;
    partnerLink: string;
    pastDeals: string;
    toolMetaTitle: string;
    toolMetaDescription: string;
    officialSite: string;
    currentDeals: string;
    allTools: string;
    empty: string;
  };
  calendar: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    upcoming: string;
    past: string;
    empty: string;
  };
  disclosure: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    paragraphs: string[];
  };
  dealPage: {
    metaTitle: string;
    faqTitle: string;
    qAvailable: string;
    aLive: string;
    aOngoing: string;
    aUpcoming: string;
    aEnded: string;
    qWho: string;
    qHow: string;
    qChange: string;
    qWhen: string;
    aWhen: string;
    qSource: string;
    aSource: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    sections: { title: string; body: string }[];
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
}

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
    sinceLastChange: string;
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
  sponsors: {
    stackopticHeadline: string;
    stackopticSub: string;
    stackopticPromoBadge: string;
    stackopticPromo: string;
    stackopticCode: string;
  };
  footer: {
    crafted: string;
    digiwingsPromo: string;
    digiwingsCta: string;
    buymeacoffee: string;
    disclaimer: string;
    rights: string;
  };
  hub?: HubDictionary;
}

export type UiDictionary = Dictionary & { hub: HubDictionary };

const english: UiDictionary = en;

const dictionaries: Record<Locale, Dictionary> = {
  en: english,
  hi,
  ja,
  fr,
  pt,
  ko,
  es,
  de,
  "zh-CN": zhCN,
  tr,
};

export function getDictionary(locale: Locale): UiDictionary {
  const dict = dictionaries[locale];
  return { ...dict, hub: dict.hub ?? english.hub };
}

/** Languages whose hub pages (deals, tools, calendar, about) are translated. */
export const hubLocales = (Object.keys(dictionaries) as Locale[]).filter((l) => l === "en" || Boolean(dictionaries[l].hub));
export const isHubTranslated = (locale: Locale) => hubLocales.includes(locale);

/**
 * Legacy section titles in untranslated dictionaries are ALL CAPS; render them in
 * sentence case until the translation pass replaces them.
 */
export const legacyCase = (lang: Locale) => (lang === "en" ? "" : "lowercase first-letter:uppercase");

export { format } from "./format";
