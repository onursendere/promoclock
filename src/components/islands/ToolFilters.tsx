import { useEffect, useRef, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <InputGroup className="bg-background sm:max-w-sm">
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput
            ref={input}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
          />
          <InputGroupAddon align="inline-end" className="hidden sm:flex">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <div className="flex items-center gap-2">
          <Switch id="live-only" checked={liveOnly} onCheckedChange={setLiveOnly} />
          <Label htmlFor="live-only">{liveLabel}</Label>
        </div>
      </div>
      <Tabs value={category} onValueChange={setCategory}>
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList variant="line" className="w-max">
            <TabsTrigger value="all">{allLabel}</TabsTrigger>
            {categories.map((c) => (
              <TabsTrigger key={c.value} value={c.value}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Tabs>
      {empty && (
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchX />
            </EmptyMedia>
            <EmptyDescription>{emptyLabel}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
