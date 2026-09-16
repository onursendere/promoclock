import type { ToolRecord } from "@/lib/deals";

/** Affiliate link when we have one, otherwise the official site — both tagged with UTM. */
export function outboundUrl(tool: ToolRecord): string {
  const url = new URL(tool.affiliate?.url ?? tool.website);
  if (!url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", "promoclock");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "tools");
  }
  return url.toString();
}
