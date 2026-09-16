export const SITE_URL = "https://promoclock.co";
export const SITE_NAME = "PromoClock";

/** Staging builds are noindex and disallow all crawlers. */
export const IS_STAGING = import.meta.env.PUBLIC_STAGING === "true";

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
