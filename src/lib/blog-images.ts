import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import type { PostImage } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

/** Attributes for a plain <img> (React components can't use Astro's <Image>). */
export interface ResponsiveImage {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
}

const meta = (image: PostImage) => image.src as unknown as ImageMetadata;

/** 16:9 crop in WebP at several widths. */
async function crop(image: PostImage, width: number, widths: number[], sizes: string, alt = image.alt): Promise<ResponsiveImage> {
  const height = Math.round((width * 9) / 16);
  const result = await getImage({ src: meta(image), width, height, widths, fit: "cover", position: "center", format: "webp", quality: 76 });
  return { src: result.src, srcSet: result.srcSet.attribute, sizes, width, height, alt };
}

/** Full-width hero on the post page (container is max-w-6xl, ~1104px of content). */
export const heroImage = (image: PostImage) =>
  crop(image, 1600, [640, 960, 1280, 1600], "(min-width: 1152px) 1104px, calc(100vw - 2rem)");

/** Card thumbnail on the blog index, home page and tool pages. */
export const cardImage = (image: PostImage, large = false) =>
  large
    ? crop(image, 1200, [480, 800, 1200], "(min-width: 1152px) 600px, (min-width: 768px) 50vw, calc(100vw - 2rem)")
    : crop(image, 800, [400, 640, 800], "(min-width: 1024px) 360px, (min-width: 640px) 50vw, calc(100vw - 2rem)");

/**
 * Absolute JPEG URLs for search engines and social cards: Open Graph (1200×630) plus the
 * 16:9, 4:3 and 1:1 crops Google recommends for articles.
 */
export async function shareImages(image: PostImage) {
  const jpeg = (width: number, height: number) =>
    getImage({ src: meta(image), width, height, fit: "cover", position: "center", format: "jpg", quality: 80 }).then((r) =>
      absoluteUrl(r.src),
    );
  const [og, wide, standard, square] = await Promise.all([jpeg(1200, 630), jpeg(1200, 675), jpeg(1200, 900), jpeg(1200, 1200)]);
  return { og, schema: [wide, standard, square] };
}
