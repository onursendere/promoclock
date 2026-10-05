import { ArrowRight, BadgeCheck, Check, ChevronDown, ExternalLink, Languages, Rss } from "lucide-react";
import type { ReactNode } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { PageHeader } from "@/components/site/PageHeader";
import { LogoMark } from "@/components/site/Logo";
import type { Locale } from "@/lib/i18n/config";
import { format, type HubDictionary } from "@/lib/i18n/dictionaries";
import { licenseLabel, type BlogPost, type PostHowTo } from "@/lib/blog";
import type { ResponsiveImage } from "@/lib/blog-images";
import { sourceLabel } from "@/lib/profiles";
import { localePath } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { formatDate } from "@/lib/time";
import { cn } from "@/lib/utils";

/**
 * Blog building blocks (src/pages/[lang]/blog/*). Static React on shadcn/ui primitives; the only
 * interactive part of a post page is the FAQ accordion island.
 */

const isoDay = (ms: number) => new Date(ms).toISOString().slice(0, 10);
const longDate = (ms: number, lang: Locale) => formatDate(ms, lang, { month: "long" });

export interface Heading {
  depth: number;
  slug: string;
  text: string;
}

function Img({ image, className, priority = false }: { image: ResponsiveImage; className?: string; priority?: boolean }) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={className}
    />
  );
}

/** "Oct 4, 2026 · 7 min read" */
export function PostMeta({ post, lang, hub, className }: { post: BlogPost; lang: Locale; hub: HubDictionary; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground", className)}>
      <time dateTime={isoDay(post.publishedAt)}>{formatDate(post.publishedAt, lang)}</time>
      <span aria-hidden="true">·</span>
      <span>{format(hub.blog.readingTime, { n: post.readingMinutes })}</span>
    </p>
  );
}

/** Card for lists: image, category, title, excerpt. The whole card is one link. */
export function BlogCard({
  post,
  image,
  href,
  lang,
  hub,
  headingLevel = "h3",
  featured = false,
}: {
  post: BlogPost;
  image?: ResponsiveImage;
  href: string;
  lang: Locale;
  hub: HubDictionary;
  headingLevel?: "h2" | "h3";
  featured?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <Card
      className={cn(
        "group/post relative h-full gap-0 py-0 transition-shadow hover:ring-foreground/25",
        featured && "md:grid md:grid-cols-2",
      )}
    >
      {image && (
        <Img
          image={image}
          priority={featured}
          className={cn("aspect-video w-full bg-muted object-cover", featured && "md:aspect-auto md:h-full")}
        />
      )}
      <div className={cn("flex flex-1 flex-col gap-3 p-4", featured && "justify-center gap-4 p-5 sm:p-8")}>
        <div className="flex flex-wrap items-center gap-2">
          {featured && <Badge>{hub.blog.featured}</Badge>}
          <Badge variant="secondary">{hub.blog.categories[post.category]}</Badge>
        </div>
        <Heading className={cn("font-semibold tracking-tight text-balance", featured ? "text-2xl sm:text-3xl" : "text-lg leading-snug")}>
          <a href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {post.title}
          </a>
        </Heading>
        <p className={cn("text-pretty text-muted-foreground", featured ? "text-base leading-relaxed" : "line-clamp-3 text-sm leading-relaxed")}>
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <PostMeta post={post} lang={lang} hub={hub} />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
            {featured && hub.blog.readMore}
            <ArrowRight className="size-4 transition-transform group-hover/post:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Card>
  );
}

/** Breadcrumb, category, H1, answer-first excerpt and byline. */
export function PostHeader({ post, lang, hub }: { post: BlogPost; lang: Locale; hub: HubDictionary }) {
  const t = hub.blog;
  const updated = post.updatedAt > post.publishedAt;
  return (
    <div className="border-b bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pt-8 pb-8 sm:px-6 sm:pt-12 sm:pb-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath(lang)}>PromoClock</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath(lang, "blog")}>{hub.nav.blog}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="max-sm:hidden" />
            <BreadcrumbItem className="max-sm:hidden">
              <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{t.categories[post.category]}</Badge>
            <span className="text-sm text-muted-foreground">{format(t.readingTime, { n: post.readingMinutes })}</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">{post.title}</h1>
          <p className="page-summary text-lg leading-relaxed text-pretty text-muted-foreground">{post.excerpt}</p>
        </div>
        <div className="flex items-center gap-3">
          <LogoMark className="size-10 shrink-0" />
          <div className="flex min-w-0 flex-col gap-0.5 text-sm">
            <p className="font-medium">
              <Fill template={t.by} name="name">
                <a href={localePath(lang, "about")} rel="author" className="underline-offset-4 hover:underline">
                  {SITE_NAME}
                </a>
              </Fill>
            </p>
            <p className="flex flex-wrap gap-x-2 text-muted-foreground">
              <span>
                <PlaceholderDate template={t.published} ms={post.publishedAt} lang={lang} />
              </span>
              {updated && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    <PlaceholderDate template={t.updated} ms={post.updatedAt} lang={lang} />
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Fills one `{placeholder}` of a dictionary template with a React node (a link, a <time>…). */
function Fill({ template, name, children }: { template: string; name: string; children: ReactNode }) {
  const [before, after = ""] = template.split(`{${name}}`);
  return (
    <>
      {before}
      {children}
      {after}
    </>
  );
}

/** A "{date}" template with a machine-readable <time> in place of the placeholder. */
function PlaceholderDate({ template, ms, lang }: { template: string; ms: number; lang: Locale }) {
  return (
    <Fill template={template} name="date">
      <time dateTime={isoDay(ms)}>{longDate(ms, lang)}</time>
    </Fill>
  );
}

/** Hero photo with credit and license. */
export function PostHero({ image, post, hub }: { image: ResponsiveImage; post: BlogPost; hub: HubDictionary }) {
  const credit = post.image!;
  return (
    <figure className="flex flex-col gap-2">
      <Img image={image} priority className="aspect-video w-full rounded-xl border bg-muted object-cover lg:aspect-[2/1]" />
      <figcaption className="text-xs text-muted-foreground">
        <Fill template={hub.blog.photo} name="credit">
          <a href={credit.creditUrl} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
            {credit.credit}
          </a>
        </Fill>{" "}
        ·{" "}
        <a href={credit.license} target="_blank" rel="noopener license" className="underline-offset-4 hover:underline">
          {licenseLabel(credit.license)}
        </a>
      </figcaption>
    </figure>
  );
}

export function KeyTakeaways({ items, title }: { items: string[]; title: string }) {
  return (
    <Card className="key-takeaways border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2.5 text-base">
          {items.map((item) => (
            <li key={item} className="flex gap-2.5 leading-relaxed">
              <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function TocList({ headings }: { headings: Heading[] }) {
  return (
    <ol className="flex flex-col gap-1 border-l text-sm">
      {headings.map((h) => (
        <li key={h.slug}>
          <a
            href={`#${h.slug}`}
            data-toc-link={h.slug}
            className="-ml-px block border-l-2 border-transparent py-1 pl-3 leading-snug text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground data-[active=true]:border-primary data-[active=true]:font-medium data-[active=true]:text-foreground"
          >
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Sticky sidebar version (lg and up). */
export function TableOfContents({ headings, title }: { headings: Heading[]; title: string }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3">
      <p className="text-sm font-medium">{title}</p>
      <TocList headings={headings} />
    </nav>
  );
}

/** Collapsible version below lg; native <details>, so it works without JavaScript. */
export function MobileTableOfContents({ headings, title }: { headings: Heading[]; title: string }) {
  return (
    <details className="group/toc rounded-xl border bg-card lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-4 text-muted-foreground transition-transform group-open/toc:rotate-180" aria-hidden="true" />
      </summary>
      <nav aria-label={title} className="px-4 pb-4">
        <TocList headings={headings} />
      </nav>
    </details>
  );
}

/** The HowTo steps, visible on the page as the structured data requires. */
export function HowToSteps({ howTo }: { howTo: PostHowTo }) {
  return (
    <ItemGroup className="flex flex-col gap-3">
      {howTo.steps.map((step, i) => (
        <Item key={step.name} id={`step-${i + 1}`} role="listitem" variant="outline" className="scroll-m-20 items-start bg-card">
          <ItemMedia>
            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground tabular-nums">
              {i + 1}
            </span>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="line-clamp-none text-base">{step.name}</ItemTitle>
            <ItemDescription className="line-clamp-none text-sm leading-relaxed">{step.text}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}

export function PostSources({ sources, updatedAt, lang, hub }: { sources: string[]; updatedAt: number; lang: Locale; hub: HubDictionary }) {
  return (
    <div className="flex flex-col gap-3">
      <ol className="flex flex-col gap-2 text-sm">
        {sources.map((url) => {
          const { host, path } = sourceLabel(url);
          return (
            <li key={url} className="flex min-w-0">
              <a href={url} target="_blank" rel="noopener" className="group inline-flex min-w-0 items-center gap-1.5 underline-offset-4 hover:underline">
                <span className="flex min-w-0">
                  <span className="shrink-0 font-medium">{host}</span>
                  {path && <span className="truncate text-muted-foreground group-hover:text-foreground">{path}</span>}
                </span>
                <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ol>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <BadgeCheck className="size-3.5 shrink-0 text-success" aria-hidden="true" />
        <span>
          <PlaceholderDate template={hub.blog.factChecked} ms={updatedAt} lang={lang} />
        </span>
      </p>
    </div>
  );
}

/** Who stands behind the article and how facts are checked (E-E-A-T). */
export function AuthorCard({ lang, hub }: { lang: Locale; hub: HubDictionary }) {
  const t = hub.blog;
  return (
    <Card>
      <CardHeader className="grid-cols-[auto_1fr] items-center gap-x-3">
        <LogoMark className="row-span-2 size-10" />
        <CardTitle className="font-semibold">
          <a href={localePath(lang, "about")} rel="author" className="underline-offset-4 hover:underline">
            {SITE_NAME}
          </a>
        </CardTitle>
        <CardDescription>{t.authorRole}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{t.authorBio}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t pb-4">
        <Button variant="outline" size="sm" asChild>
          <a href={localePath(lang, "about")}>
            <BadgeCheck data-icon="inline-start" />
            {t.methodology}
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={`${localePath(lang, "blog")}rss.xml`} type="application/rss+xml">
            <Rss data-icon="inline-start" />
            {t.rss}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function UntranslatedNote({ message }: { message: string }) {
  return (
    <Alert role="note">
      <Languages />
      <AlertDescription className="text-pretty">{message}</AlertDescription>
    </Alert>
  );
}

export function RssLink({ href, label }: { href: string; label: string }) {
  return (
    <Button variant="outline" size="sm" asChild className="w-fit">
      <a href={href} type="application/rss+xml">
        <Rss data-icon="inline-start" />
        {label}
      </a>
    </Button>
  );
}

/** Article typography with shadcn tokens only (no typography plugin). */
export const articleProse = [
  "max-w-3xl text-base leading-7 sm:text-[1.0625rem] sm:leading-8",
  "[&>*:first-child]:mt-0",
  "[&_h2]:mt-12 [&_h2]:scroll-m-20 [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-balance",
  "[&_h3]:mt-8 [&_h3]:scroll-m-20 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight",
  "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ol]:mt-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_li]:mt-2 [&_li]:pl-1 [&_li::marker]:text-muted-foreground",
  "[&_strong]:font-semibold [&_em]:italic",
  "[&_a]:font-medium [&_a]:underline [&_a]:decoration-primary/40 [&_a]:underline-offset-4 [&_a:hover]:decoration-primary",
  "[&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:pl-5 [&_blockquote]:text-muted-foreground",
  "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em]",
  "[&_img]:mt-6 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_img]:border [&_hr]:my-10",
  "[&_.table-scroll]:mt-6 [&_.table-scroll]:overflow-x-auto [&_.table-scroll]:rounded-lg [&_.table-scroll]:border",
  "[&_table]:w-full [&_table]:text-sm [&_table]:leading-6 [&_thead]:bg-muted/50",
  "[&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:align-bottom [&_th]:font-medium [&_th]:whitespace-nowrap",
  "[&_td]:border-t [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:min-w-28",
].join(" ");


/** Blog index header: PageHeader plus the RSS link (composed here, not in .astro). */
export function BlogIndexHeader({ lang, hub, rssHref }: { lang: Locale; hub: HubDictionary; rssHref: string }) {
  return (
    <PageHeader
      crumbs={[{ label: "PromoClock", href: localePath(lang) }, { label: hub.nav.blog }]}
      title={hub.blog.title}
      description={hub.blog.subtitle}
    >
      <RssLink href={rssHref} label={hub.blog.rss} />
    </PageHeader>
  );
}

/** Compact list of posts for sidebars (deal pages). */
export function PostList({ posts, title, lang, hub }: { posts: BlogPost[]; title: string; lang: Locale; hub: HubDictionary }) {
  if (!posts.length) return null;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <ItemGroup className="gap-2">
        {posts.map((post) => (
          <Item key={post.slug} variant="outline" size="sm" asChild className="bg-card hover:bg-muted/50">
            <a href={localePath(lang, `blog/${post.slug}`)}>
              <ItemContent className="min-w-0">
                <ItemTitle className="line-clamp-2">{post.title}</ItemTitle>
                <ItemDescription className="line-clamp-1">
                  {hub.blog.categories[post.category]} · {format(hub.blog.readingTime, { n: post.readingMinutes })}
                </ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
