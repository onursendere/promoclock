"use client";

import { motion } from "framer-motion";
import { Radar, Clock, Eye } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const icons = [Radar, Clock, Eye];

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="how-it-works" className="py-24 px-4" aria-label={dict.howItWorks.title}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {dict.howItWorks.title}
          </h2>
          <p className="text-secondary max-w-lg mx-auto">
            {dict.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {dict.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="text-xs tracking-widest text-muted mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-semibold tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
