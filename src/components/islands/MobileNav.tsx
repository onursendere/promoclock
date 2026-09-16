import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  items: { href: string; label: string; active: boolean }[];
}

export default function MobileNav({ label, items }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={label} className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label={label}>
          {items.map((item) => (
            <Button
              key={item.href}
              variant={item.active ? "secondary" : "ghost"}
              asChild
              className={cn("h-10 justify-start text-base", !item.active && "text-muted-foreground")}
            >
              <a href={item.href} aria-current={item.active ? "page" : undefined}>
                {item.label}
              </a>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
