export const SITE_URL = "https://promoclock.co";
export const SITE_NAME = "PromoClock";
/** Privacy and general contact address. */
export const CONTACT_EMAIL = "info@promoclock.co";

/** Staging builds are noindex and disallow all crawlers. */
export const IS_STAGING = import.meta.env.PUBLIC_STAGING === "true";

/** PromoClock v1.0 went live on this day (first public release). */
export const LAUNCH_DATE = Date.UTC(2026, 2, 15);

/** Frozen at build start so every page in one build agrees on "now". */
export const BUILD_TIME = Date.now();

export const AUTHOR = {
  name: "Onur Şendere",
  x: "https://x.com/onursendere",
  github: "https://github.com/onursendere",
  linkedin: "https://www.linkedin.com/in/onursendere/",
  instagram: "https://www.instagram.com/onursendere/",
  agency: "https://digiwings.co.uk",
  coffee: "https://buymeacoffee.com/onursendere",
  repo: "https://github.com/onursendere/promoclock",
};
