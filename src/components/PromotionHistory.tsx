"use client";

import { motion } from "framer-motion";
import { Archive, ExternalLink } from "lucide-react";

const PAST_PROMOTIONS = [
  {
    title: "Claude March 2026 Off-Peak Promotion",
    dates: "March 13 – March 27, 2026",
    description:
      "Anthropic ran a 2x session limits promotion during off-peak hours (outside weekdays 8 AM – 2 PM ET). Free, Pro, Max, and Team plans received doubled message and context limits during off-peak windows.",
    status: "ENDED",
    sources: [
      {
        label: "ghacks.net — Claude doubled usage limits",
        url: "https://www.ghacks.net/2026/03/14/anthropic-doubled-claude-usage-limits-for-free-pro-max-and-teams-users/",
      },
      {
        label: "theregister.com — Claude 2x limits article",
        url: "https://www.theregister.com/2026/03/14/anthropic_doubles_claude_usage_limits/",
      },
    ],
  },
];

export default function PromotionHistory() {
  return (
    <section
      id="promotion-history"
      className="py-24 px-4"
      aria-label="Promotion History"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold tracking-widest text-muted uppercase mb-6">
            <Archive size={13} />
            Archive
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            PROMOTION HISTORY
          </h2>
          <p className="text-secondary max-w-lg mx-auto text-sm sm:text-base">
            Past Claude promotions and limited-time events.
          </p>
        </motion.div>

        <div className="space-y-4">
          {PAST_PROMOTIONS.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface rounded-2xl border border-border p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-muted font-medium">{promo.dates}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-[rgba(139,58,58,0.1)] text-[#8B3A3A] border border-[rgba(139,58,58,0.2)]">
                  {promo.status}
                </span>
              </div>

              <p className="text-sm text-secondary leading-relaxed mb-5">
                {promo.description}
              </p>

              {promo.sources.length > 0 && (
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
                    Sources
                  </p>
                  <ul className="space-y-2">
                    {promo.sources.map((src, j) => (
                      <li key={j}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={12} className="shrink-0" />
                          {src.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
