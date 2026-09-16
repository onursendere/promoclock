import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  actionHref,
  actionLabel,
  as: Tag = "h2",
  className,
  titleClassName,
}: {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="flex max-w-2xl flex-col gap-2">
        <Tag
          className={cn(
            "font-semibold tracking-tight text-balance",
            Tag === "h1" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
            titleClassName,
          )}
        >
          {title}
        </Tag>
        {description && <p className="text-pretty text-muted-foreground">{description}</p>}
      </div>
      {actionHref && actionLabel && (
        <Button variant="outline" asChild className="w-fit shrink-0">
          <a href={actionHref}>
            {actionLabel}
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
      )}
    </div>
  );
}
