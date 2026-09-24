import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTHOR } from "@/lib/site";

/** Floating desktop-only coffee link; the label comes from the page dictionary. */
export function CoffeeButton({ label }: { label: string }) {
  return (
    <Button
      asChild
      size="sm"
      className="fixed right-4 bottom-4 z-40 hidden h-9 rounded-full sm:inline-flex bg-[#FFDD00] px-3 text-black shadow-lg hover:bg-[#FFDD00]/90"
    >
      <a href={AUTHOR.coffee} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Coffee data-icon="inline-start" />
        {label}
      </a>
    </Button>
  );
}
