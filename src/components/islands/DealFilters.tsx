import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Props {
  /** CSS selector of the container holding [data-deal-card] elements. */
  root: string;
  allLabel: string;
  emptyLabel: string;
  options: { value: string; label: string; count: number }[];
}

/** Filters server-rendered deal cards by kind without re-rendering them. */
export default function DealFilters({ root, allLabel, emptyLabel, options }: Props) {
  const [kind, setKind] = useState("all");
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const container = document.querySelector(root);
    if (!container) return;
    let visible = 0;
    container.querySelectorAll<HTMLElement>("[data-deal-card]").forEach((card) => {
      const match = kind === "all" || card.dataset.kind === kind;
      const wrapper = card.parentElement?.hasAttribute("data-deal-item") ? card.parentElement : card;
      wrapper.hidden = !match;
      if (match && !card.hasAttribute("data-ended")) visible += 1;
    });
    container.querySelectorAll<HTMLElement>("[data-deal-section]").forEach((section) => {
      const any = Array.from(section.querySelectorAll<HTMLElement>("[data-deal-card]")).some(
        (card) => kind === "all" || card.dataset.kind === kind,
      );
      section.hidden = !any;
    });
    setEmpty(visible === 0);
  }, [kind, root]);

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        value={kind}
        onValueChange={(value) => setKind(value || "all")}
        className="flex-wrap justify-center"
        spacing={2}
      >
        <ToggleGroupItem value="all">{allLabel}</ToggleGroupItem>
        {options.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value}>
            {option.label}
            <span className="text-muted-foreground tabular-nums">{option.count}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {empty && <p className="text-sm text-muted-foreground">{emptyLabel}</p>}
    </div>
  );
}
