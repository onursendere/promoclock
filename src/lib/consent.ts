/**
 * Cookie consent for Google Analytics in Google's Basic Consent Mode v2: gtag.js is only loaded
 * after the visitor allows analytics, so nothing reaches Google before that. All four consent
 * types start "denied"; allowing analytics grants analytics_storage only — the three ad types
 * stay denied. This module is the only place that may load gtag.js (tests/consent.test.ts).
 */
import { IS_STAGING } from "@/lib/site";

export const GA_ID = "G-MN3F77SZVF";
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

export const CONSENT_KEY = "pc-consent";
/** Policy/banner version the choice was made under. Bump it (and the privacy page date) when the
 *  cookie list or the banner wording changes in a way that needs a fresh choice. */
export const CONSENT_VERSION = "2026-10-12";
/** A choice — allow or refuse — is remembered for 6 months, then asked again. */
export const CONSENT_MAX_AGE_DAYS = 182;
/** _ga cookies expire after 13 months instead of Google's default 2 years. */
export const GA_COOKIE_DAYS = 395;

const DAY = 24 * 60 * 60 * 1000;

/** Everything the site stores in the browser, as listed on the privacy page. tests/consent.test.ts
 *  fails when the code writes a cookie or storage key that isn't here. */
export const STORAGE_INVENTORY = [
  { id: "consent", names: [CONSENT_KEY], provider: "PromoClock", storage: "localStorage", category: "necessary" },
  { id: "locale", names: ["LOCALE"], provider: "PromoClock", storage: "cookie", category: "necessary" },
  { id: "theme", names: ["pc-theme"], provider: "PromoClock", storage: "localStorage", category: "necessary" },
  { id: "notifications", names: ["pc-notif", "pc-sound"], provider: "PromoClock", storage: "localStorage", category: "necessary" },
  { id: "ga", names: ["_ga"], provider: "Google Analytics", storage: "cookie", category: "analytics" },
  { id: "gaSession", names: [`_ga_${GA_ID.slice(2)}`], provider: "Google Analytics", storage: "cookie", category: "analytics" },
] as const;

export type StorageItem = (typeof STORAGE_INVENTORY)[number]["id"];

export interface ConsentRecord {
  analytics: boolean;
  /** ISO timestamp of the choice. */
  at: string;
  version: string;
}

/** A stored choice, or null when there is none, it is malformed, outdated or older than 6 months. */
export function parseConsent(raw: string | null, now = Date.now()): ConsentRecord | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<ConsentRecord>;
    if (typeof value.analytics !== "boolean" || typeof value.at !== "string" || value.version !== CONSENT_VERSION) return null;
    const at = Date.parse(value.at);
    if (Number.isNaN(at) || at > now + DAY || now - at > CONSENT_MAX_AGE_DAYS * DAY) return null;
    return { analytics: value.analytics, at: value.at, version: value.version };
  } catch {
    return null;
  }
}

/** Cookie domains GA may have used for this host: host-only plus every parent domain ("promoclock.co"). */
export function cookieDomains(hostname: string): string[] {
  const labels = hostname.split(".");
  return labels.length < 2 ? [] : labels.slice(0, -1).map((_, i) => labels.slice(i).join("."));
}

export const isAnalyticsCookie = (name: string) => /^_ga($|_)|^_gid$|^_gat/.test(name);

// ---- Browser side ----------------------------------------------------------------------------

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let defaultsSent = false;
let tagLoaded = false;

/** gtag.js reads `arguments` objects from the dataLayer, not arrays. */
function gtag(..._args: unknown[]) {
  window.dataLayer.push(arguments);
}

/** Consent defaults go into the dataLayer before any measurement command. */
function sendDefaults() {
  if (defaultsSent) return;
  defaultsSent = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  gtag("set", "ads_data_redaction", true);
}

function setDisabled(disabled: boolean) {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = disabled;
}

function grantAnalytics() {
  setDisabled(false);
  gtag("consent", "update", { analytics_storage: "granted" });
  if (IS_STAGING) return;
  const firstLoad = !tagLoaded;
  if (firstLoad) {
    tagLoaded = true;
    gtag("js", new Date());
  }
  // On a re-grant after withdrawing on the same page, config runs again and sends the page view.
  gtag("config", GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: GA_COOKIE_DAYS * 24 * 60 * 60,
    // Local test hits go to DebugView only, not the reports.
    ...(import.meta.env.DEV ? { debug_mode: true } : {}),
  });
  if (firstLoad) {
    const script = document.createElement("script");
    script.async = true;
    script.src = GTAG_SRC;
    document.head.appendChild(script);
  }
}

function denyAnalytics() {
  // Disable first so an already loaded tag sends nothing more, not even cookieless pings.
  setDisabled(true);
  gtag("consent", "update", { analytics_storage: "denied" });
  clearAnalyticsCookies();
}

/** Deletes _ga, _ga_<id> (and legacy _gid/_gat) cookies on this host and its parent domains. */
export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter(isAnalyticsCookie);
  const domains = ["", ...cookieDomains(location.hostname).map((d) => `; domain=${d}`)];
  for (const name of names) {
    for (const domain of domains) document.cookie = `${name}=; max-age=0; path=/${domain}`;
  }
}

export function readConsent(): ConsentRecord | null {
  try {
    return parseConsent(localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

/** Runs once per page: consent defaults, then the stored choice. Leftover GA cookies from before
 *  consent (or from an expired choice) are removed while analytics isn't allowed. */
export function initConsent() {
  if (defaultsSent) return;
  sendDefaults();
  if (readConsent()?.analytics) grantAnalytics();
  else clearAnalyticsCookies();
}

/** Saves the visitor's choice with its date and policy version and applies it right away. */
export function setConsent(analytics: boolean): ConsentRecord {
  sendDefaults();
  const record: ConsentRecord = { analytics, at: new Date().toISOString(), version: CONSENT_VERSION };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // Storage blocked: the choice applies to this page only and the banner asks again next time.
  }
  if (analytics) grantAnalytics();
  else denyAnalytics();
  return record;
}
