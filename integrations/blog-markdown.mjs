// @ts-check
import { fileURLToPath } from "node:url";
import { localizeHref } from "../src/lib/blog.ts";

/**
 * Markdown tweaks for blog posts only (src/content/blog/<locale>/<slug>.md), added to Astro's
 * Sätteri processor as a hast plugin:
 * - internal links are written without a locale ("/tools/claude/") and get the post's locale;
 * - external links open in a new tab with rel="noopener";
 * - tables get a scroll wrapper so wide comparisons never widen the page on phones.
 *
 * @returns {import("astro").AstroIntegration}
 */
export default function blogMarkdown() {
  /** @param {{ fileURL: URL | undefined }} ctx */
  const plugin = (ctx) => {
    const file = ctx.fileURL ? fileURLToPath(ctx.fileURL) : "";
    const match = file.match(/[\\/]content[\\/]blog[\\/]([^\\/]+)[\\/][^\\/]+\.md$/);
    if (!match) return null;
    const lang = match[1];
    return {
      name: "promoclock:blog-markdown",
      element: [
        {
          filter: ["a"],
          /** @param {any} node @param {any} c */
          visit(node, c) {
            const href = node.properties?.href;
            if (typeof href !== "string") return;
            if (href.startsWith("/")) c.setProperty(node, "href", localizeHref(href, lang));
            else if (/^https?:\/\//.test(href)) {
              c.setProperty(node, "target", "_blank");
              c.setProperty(node, "rel", "noopener");
            }
          },
        },
        {
          filter: ["table"],
          /** @param {any} node @param {any} c */
          visit(node, c) {
            c.wrapNode(node, { raw: '<div class="table-scroll"></div>' });
          },
        },
      ],
    };
  };

  return {
    name: "promoclock:blog-markdown",
    hooks: {
      "astro:config:setup": ({ config, logger }) => {
        const processor = /** @type {any} */ (config.markdown).processor;
        if (processor?.name !== "satteri") {
          logger.warn("Markdown processor is not Sätteri; blog link localization is disabled.");
          return;
        }
        processor.options.hastPlugins.push(plugin);
      },
    },
  };
}
