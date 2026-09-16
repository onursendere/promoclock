import { i18n, type Locale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

/** "/en/", "/en/deals/", "/en/tools/cursor/" — always with a trailing slash. */
export function localePath(lang: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export const absoluteUrl = (pathname: string) => new URL(pathname, SITE_URL).toString();

export function alternateLinks(path = "") {
  return [
    ...i18n.locales.map((lang) => ({ hreflang: lang, href: absoluteUrl(localePath(lang, path)) })),
    { hreflang: "x-default", href: absoluteUrl(localePath("en", path)) },
  ];
}

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (i18n.locales as readonly string[]).includes(value);

/** Swap the leading /<lang>/ segment of a pathname. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) {
    parts[1] = target;
    return parts.join("/") || `/${target}/`;
  }
  return `/${target}/`;
}
