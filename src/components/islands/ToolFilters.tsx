import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Props {
  root: string;
  allLabel: string;
  liveLabel: string;
  searchPlaceholder: string;
  emptyLabel: string;
  categories: { value: string; label: string; count: number }[];
}

/** Filters server-rendered tool cards by category, search text and live deals. */
export default function ToolFilters({ root, allLabel, liveLabel, searchPlaceholder, emptyLabel, categories }: Props) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [liveOnly, setLiveOnly] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const container = document.querySelector(root);
    if (!container) return;
    const q = query.trim().toLowerCase();
    let visible = 0;
    container.querySelectorAll<HTMLElement>("[data-tool-card]").forEach((card) => {
      const match =
        (category === "all" || card.dataset.category === category) &&
        (!liveOnly || card.dataset.live === "true") &&
        (!q || (card.dataset.search ?? "").includes(q));
      card.hidden = !match;
      if (match) visible += 1;
    });
    container.querySelectorAll<HTMLElement>("[data-tool-section]").forEach((section) => {
      section.hidden = !section.querySelector("[data-tool-card]:not([hidden])");
    });
    setEmpty(visible === 0);
  }, [category, query, liveOnly, root]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full max-w-md items-center gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-9 bg-card pl-8"
          />
        </div>
        <Toggle variant="outline" pressed={liveOnly} onPressedChange={setLiveOnly} className="h-9 bg-card">
          <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
          {liveLabel}
        </Toggle>
      </div>
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        value={category}
        onValueChange={(value) => setCategory(value || "all")}
        className="flex-wrap justify-center"
        spacing={2}
      >
        <ToggleGroupItem value="all">{allLabel}</ToggleGroupItem>
        {categories.map((c) => (
          <ToggleGroupItem key={c.value} value={c.value}>
            {c.label}
            <span className="text-muted-foreground tabular-nums">{c.count}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {empty && <p className="text-sm text-muted-foreground">{emptyLabel}</p>}
    </div>
  );
}
