"use client";

import { motion } from "framer-motion";
import { Check, X, Monitor, Smartphone, Terminal, Users, FileSpreadsheet } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const platformIcons = [Monitor, Monitor, Smartphone, Users, Terminal, FileSpreadsheet];

export default function Eligibility({ dict }: { dict: Dictionary }) {
  return (
    <section id="eligibility" className="py-24 px-4" aria-label={dict.eligibility.title}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {dict.eligibility.title}
          </h2>
          <p className="text-secondary max-w-lg mx-auto">
            {dict.eligibility.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {dict.eligibility.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-surface rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border ${
                plan.status ? "border-accent-green/30" : "border-border/50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                    plan.status
                      ? "bg-accent-green/10 text-accent-green"
                      : "bg-muted/10 text-muted"
                  }`}
                >
                  {plan.status ? (
                    <Check size={12} strokeWidth={3} />
                  ) : (
                    <X size={12} strokeWidth={3} />
                  )}
                  {plan.status ? dict.eligibility.eligible : dict.eligibility.notEligible}
                </span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
        >
          <h3 className="text-sm font-semibold tracking-wide mb-5">
            {dict.eligibility.platforms.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dict.eligibility.platforms.items.map((item, i) => {
              const Icon = platformIcons[i] || Monitor;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-secondary py-2"
                >
                  <Icon size={16} className="text-primary shrink-0" />
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-5 border-t border-border/50">
            <p className="text-sm text-muted leading-relaxed">
              {dict.eligibility.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
