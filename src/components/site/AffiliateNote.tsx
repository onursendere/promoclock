import type { Locale } from "@/lib/i18n/config";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/seo";

export function AffiliateNote({ lang, hub }: { lang: Locale; hub: HubDictionary }) {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">
      {hub.common.affiliateNote}{" "}
      <a href={localePath(lang, "affiliate-disclosure")} className="underline underline-offset-4 hover:text-foreground">
        {hub.common.disclosureLink}
      </a>
    </p>
  );
}
