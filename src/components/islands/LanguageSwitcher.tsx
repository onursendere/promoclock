import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/seo";

interface Props {
  lang: Locale;
  locales: { code: Locale; name: string }[];
  label: string;
}

export default function LanguageSwitcher({ lang, locales, label }: Props) {
  const current = locales.find((l) => l.code === lang)?.name ?? lang;

  const onSelect = (code: string) => {
    if (code === lang) return;
    document.cookie = `LOCALE=${code};path=/;max-age=31536000;samesite=lax`;
    const { pathname, hash } = window.location;
    window.location.assign(switchLocalePath(pathname, code as Locale) + hash);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label={label} className="text-muted-foreground">
          <Globe />
          <span className="hidden sm:inline">{current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuRadioGroup value={lang} onValueChange={onSelect}>
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale.code} value={locale.code} lang={locale.code}>
              {locale.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
