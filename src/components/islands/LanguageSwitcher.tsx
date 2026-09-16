import { Check, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

  const select = (code: Locale) => {
    if (code === lang) return;
    document.cookie = `LOCALE=${code};path=/;max-age=31536000;samesite=lax`;
    const { pathname, hash } = window.location;
    window.location.assign(switchLocalePath(pathname, code) + hash);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label={label}>
          <Languages data-icon="inline-start" />
          <span className="hidden sm:inline">{current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((locale) => (
          <DropdownMenuItem key={locale.code} lang={locale.code} onSelect={() => select(locale.code)}>
            {locale.name}
            {locale.code === lang && <Check className="ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
