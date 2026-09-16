import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <svg viewBox="0 0 100 100" className="size-6" aria-hidden="true">
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
      <span>PromoClock</span>
    </span>
  );
}
