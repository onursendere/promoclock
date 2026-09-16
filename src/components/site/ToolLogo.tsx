import { BRAND_ICONS } from "@/lib/brand-icons";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "size-8 rounded-md text-xs [&_svg]:size-4",
  md: "size-10 rounded-lg text-sm [&_svg]:size-5",
  lg: "size-14 rounded-xl text-lg [&_svg]:size-7",
};

export function initials(name: string) {
  return name
    .replace(/[^\p{L}\p{N} ]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ToolLogo({
  slug,
  name,
  size = "md",
  className,
}: {
  slug: string;
  name: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const icon = BRAND_ICONS[slug];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center border bg-background font-semibold tracking-tight text-foreground shadow-xs",
        sizes[size],
        className,
      )}
    >
      {icon ? (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={icon.path} />
        </svg>
      ) : (
        initials(name)
      )}
    </span>
  );
}
