import { cn } from "@/lib/utils";

/** The round PromoClock mark on its own (bylines, author boxes). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("size-6", className)} aria-hidden="true">
      <circle cx="50" cy="50" r="46" className="fill-primary" />
      <path
        d="M40 30 L62 50 L40 70"
        fill="none"
        className="stroke-primary-foreground"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <LogoMark />
      <span>PromoClock</span>
    </span>
  );
}
