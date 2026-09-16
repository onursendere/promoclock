import { siGithub } from "simple-icons";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/site/Logo";
import LanguageSwitcher from "@/components/islands/LanguageSwitcher";
import MobileNav from "@/components/islands/MobileNav";
import NotificationBell from "@/components/islands/NotificationBell";
import ThemeToggle from "@/components/islands/ThemeToggle";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export interface NavItem {
  href: string;
  label: string;
  active: boolean;
}

interface Props {
  lang: Locale;
  homeHref: string;
  items: NavItem[];
  locales: { code: Locale; name: string }[];
  labels: { language: string; theme: string; menu: string };
  notifications: { titles: { offPeak: string; peak: string }; bodies: { offPeak: string; peak: string } };
  repo: string;
}

export default function SiteHeader({ lang, homeHref, items, locales, labels, notifications, repo }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href={homeHref} className="flex items-center rounded-md" aria-label="PromoClock">
          <Logo />
        </a>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  active={item.active}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-8 bg-transparent",
                    item.active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-1">
          <LanguageSwitcher lang={lang} locales={locales} label={labels.language} />
          <Separator orientation="vertical" className="mx-1 hidden h-4 sm:block" />
          <NotificationBell titles={notifications.titles} bodies={notifications.bodies} />
          <ThemeToggle label={labels.theme} />
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <a href={repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={siGithub.path} />
              </svg>
            </a>
          </Button>
          <MobileNav label={labels.menu} items={items} />
        </div>
      </div>
    </header>
  );
}
