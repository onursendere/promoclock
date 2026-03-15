export const i18n = {
  defaultLocale: "en",
  locales: ["en", "hi", "ja", "fr", "pt", "ko", "es", "de", "zh-CN", "tr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  ja: "日本語",
  fr: "Français",
  pt: "Português",
  ko: "한국어",
  es: "Español",
  de: "Deutsch",
  "zh-CN": "简体中文",
  tr: "Türkçe",
};
