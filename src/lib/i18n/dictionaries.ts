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

type Text = string;
type Kind = "limit-boost" | "limit-change" | "discount" | "student" | "free-trial" | "launch" | "seasonal";
type Category = "chat" | "coding" | "image" | "video" | "audio" | "writing" | "productivity" | "agents";

/** Every language must define every key — the build fails otherwise (see tests/i18n.test.ts). */
export interface Dictionary {
  meta: { title: Text; description: Text; ogTitle: Text; ogDescription: Text };
  notifications: { peakTitle: Text; peakBody: Text; offPeakTitle: Text; offPeakBody: Text };
  schedule: {
    tableHeaders: { city: Text; timezone: Text; peakHours: Text; offPeakHours: Text };
    weekendLabel: Text;
  };
  faq: { title: Text; items: { question: Text; answer: Text }[] };
  devTools: { title: Text; subtitle: Text; apiTitle: Text; apiDescription: Text };
  sponsors: {
    stackopticHeadline: Text;
    stackopticSub: Text;
    stackopticPromoBadge: Text;
    stackopticPromo: Text;
    stackopticCode: Text;
    stackopticCta: Text;
  };
  footer: { crafted: Text; buymeacoffee: Text; disclaimer: Text; rights: Text };
  hub: HubDictionary;
}

export interface HubDictionary {
  nav: { claude: Text; deals: Text; tools: Text; calendar: Text; api: Text; menu: Text; language: Text; theme: Text; about: Text };
  common: {
    verified: Text;
    startsIn: Text;
    ended: Text;
    ongoing: Text;
    visit: Text;
    getDeal: Text;
    details: Text;
    code: Text;
    copy: Text;
    copied: Text;
    affiliateNote: Text;
    disclosureLink: Text;
    daysLeft: Text;
    hoursLeft: Text;
    offer: Text;
    who: Text;
    ends: Text;
    started: Text;
    regions: Text;
    howToClaim: Text;
    goodToKnow: Text;
    related: Text;
    live: Text;
    sources: Text;
  };
  kinds: Record<Kind, Text>;
  categories: Record<Category, Text>;
  claudeWatch: {
    badge: Text;
    peak: Text;
    offPeak: Text;
    livePromo: Text;
    promoEndsIn: Text;
    peakNote: Text;
    statusTitle: Text;
    peakShort: Text;
    offPeakShort: Text;
    changesIn: Text;
    peakWindow: Text;
    nextPeakWindow: Text;
    whatsNew: Text;
    info: Text;
  };
  home: {
    heroEyebrow: Text;
    heroTitle: Text;
    heroSubtitle: Text;
    ctaDeals: Text;
    ctaTools: Text;
    statsLive: Text;
    statsTools: Text;
    statsDeadline: Text;
    statsLanguages: Text;
    sponsored: Text;
    dealsTitle: Text;
    dealsSubtitle: Text;
    dealsCta: Text;
    toolsTitle: Text;
    toolsSubtitle: Text;
    toolsCta: Text;
    historyTitle: Text;
    historySubtitle: Text;
    peakTitle: Text;
    peakAnswer: Text;
    peakFacts: { label: Text; value: Text }[];
    affectedPlans: Text;
    scheduleTitle: Text;
  };
  deals: {
    metaTitle: Text;
    metaDescription: Text;
    title: Text;
    subtitle: Text;
    filterAll: Text;
    live: Text;
    upcoming: Text;
    archive: Text;
    empty: Text;
  };
  tools: {
    metaTitle: Text;
    metaDescription: Text;
    title: Text;
    subtitle: Text;
    filterAll: Text;
    withDeals: Text;
    searchPlaceholder: Text;
    liveDeals: Text;
    noLiveDeals: Text;
    pastDeals: Text;
    toolMetaTitle: Text;
    toolMetaDescription: Text;
    currentDeals: Text;
    allTools: Text;
    empty: Text;
  };
  calendar: { metaTitle: Text; metaDescription: Text; title: Text; subtitle: Text; upcoming: Text; past: Text; empty: Text };
  disclosure: { metaTitle: Text; metaDescription: Text; title: Text; paragraphs: Text[] };
  dealPage: {
    metaTitle: Text;
    faqTitle: Text;
    qAvailable: Text;
    aLive: Text;
    aOngoing: Text;
    aUpcoming: Text;
    aEnded: Text;
    qWho: Text;
    qHow: Text;
    qChange: Text;
    qWhen: Text;
    aWhen: Text;
    qSource: Text;
    aSource: Text;
  };
  about: { metaTitle: Text; metaDescription: Text; title: Text; intro: Text; sections: { title: Text; body: Text }[] };
  notFound: { title: Text; body: Text; cta: Text };
}

export type UiDictionary = Dictionary;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
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

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** All locales are fully translated; kept so a new language can be added gradually later. */
export const hubLocales = Object.keys(dictionaries) as Locale[];
export const isHubTranslated = (locale: Locale) => hubLocales.includes(locale);

export { format } from "./format";
