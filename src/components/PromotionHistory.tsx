"use client";

import { motion } from "framer-motion";
import { Archive } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function PromotionHistory({ dict }: { dict: Dictionary }) {
  const items = dict.promotionHistory.items;

  return (
    <section
      id="promotion-history"
      className="py-24 px-4"
      aria-label={dict.promotionHistory.title}
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
            {dict.promotionHistory.archiveLabel}
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {dict.promotionHistory.title}
          </h2>
          <p className="text-secondary max-w-lg mx-auto text-sm sm:text-base">
            {dict.promotionHistory.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {items.map((promo, i) => (
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
                  {dict.promotionHistory.endedLabel}
                </span>
              </div>

              <p className="text-sm text-secondary leading-relaxed">
                {promo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
