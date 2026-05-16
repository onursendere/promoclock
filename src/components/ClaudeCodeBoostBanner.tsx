"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface Props {
  dict: Dictionary;
}

export default function ClaudeCodeBoostBanner({ dict }: Props) {
  const b = dict.claudeCodeBoost;

  return (
    <section className="px-4 py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(45,43,110,0.18)] bg-linear-to-br from-[#1f1d5a] via-[#2D2B6E] to-[#3b3899] text-white shadow-[0_8px_40px_rgba(45,43,110,0.25)]">
          {/* Decorative shimmer */}
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.10) 50%, transparent 70%)",
            }}
            animate={{ x: ["-100%", "120%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col items-center text-center gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase bg-white/15 border border-white/30 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                {b.badge}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase bg-amber-300/90 text-[#2D2B6E] px-3 py-1 rounded-full">
                {b.scope}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] max-w-2xl">
              {b.title}
            </h2>

            <p className="text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed">
              {b.subtitle}
            </p>

            <div className="mt-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70">
                {b.endsLabel}
              </span>
              <span className="text-sm sm:text-base font-mono font-bold bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg">
                {b.endsValue}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/70">
              <a
                href="https://x.com/claudedevs/status/1922534923457626336"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline hover:text-white transition-colors"
              >
                {b.sourceLabel}
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="text-white/60">{b.note}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
