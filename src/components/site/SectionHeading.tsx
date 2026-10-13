import { ArrowRight, CircleHelp, Clock, History, LayoutGrid, Newspaper, Tag, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const icons = {
  deals: Tag,
  clock: Clock,
  tools: LayoutGrid,
  blog: Newspaper,
  history: History,
  faq: CircleHelp,
  api: Terminal,
} satisfies Record<string, LucideIcon>;

export type SectionIcon = keyof typeof icons;

/**
 * Section title block: an icon + label eyebrow marks where a new section starts, then a fluid
 * heading and a readable lead. The heading carries `id` so the section can point aria-labelledby at it.
 */
export function SectionHeading({
  id,
  eyebrow,
  icon,
  title,
  description,
  actionHref,
  actionLabel,
  as: Tag = "h2",
  className,
  titleClassName,
}: {
  id?: string;
  eyebrow?: string;
  icon?: SectionIcon;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}) {
  const Icon = icon ? icons[icon] : undefined;
  return (
    <div className={cn("flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="flex max-w-2xl flex-col gap-3">
        {eyebrow && (
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            {Icon && (
              <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/20 ring-inset">
                <Icon className="size-4" aria-hidden="true" />
              </span>
            )}
            {eyebrow}
          </p>
        )}
        <Tag
          id={id}
          className={cn(
            "font-semibold tracking-tight text-balance",
            Tag === "h1"
              ? "text-[clamp(1.875rem,1.4rem+1.6vw,2.25rem)] leading-tight"
              : "text-[clamp(1.75rem,1.3rem+1.4vw,2.25rem)] leading-[1.15]",
            titleClassName,
          )}
        >
          {title}
        </Tag>
        {description && <p className="text-lg leading-relaxed text-pretty text-muted-foreground">{description}</p>}
      </div>
      {actionHref && actionLabel && (
        <Button variant="outline" size="lg" asChild className="w-fit shrink-0 bg-background">
          <a href={actionHref}>
            {actionLabel}
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
      )}
    </div>
  );
}

/**
 * Sub-sections on inner pages: a hairline plus generous space before each one (none before the
 * first), so consecutive blocks read as separate parts instead of one long stack.
 */
export const subsectionClass = "flex scroll-mt-20 flex-col gap-5 border-t pt-10 first:border-t-0 first:pt-0 sm:pt-12";
export const subsectionTitleClass = "scroll-mt-20 text-2xl font-semibold tracking-tight text-balance";
