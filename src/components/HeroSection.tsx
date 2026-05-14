"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HeroProps {
  dict: Dictionary;
}

export default function HeroSection({ dict }: HeroProps) {
  const accent = "#1D5B1A";

  return (
    <section className="min-h-dvh flex flex-col items-center justify-center pt-20 pb-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        {/* Static boost badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-4 sm:mb-5 relative overflow-hidden font-bold text-sm sm:text-base tracking-wide"
          style={{ background: accent, color: "#FFFFFF" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span className="w-2.5 h-2.5 rounded-full bg-white relative z-10 animate-pulse" />
          <span className="relative z-10">
            {dict.hero.badge}
            <span className="ml-2 font-extrabold">{dict.hero.boostLabel}</span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5 sm:mb-7 px-4"
          style={{ color: accent }}
        >
          {dict.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm sm:text-lg text-secondary max-w-2xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed font-medium"
        >
          {dict.hero.subtitle}
        </motion.p>

        {/* Ends-at line */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 px-5 py-3 rounded-2xl bg-surface border border-border/60"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-muted">
            {dict.hero.endsLabel}
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span
            className="font-semibold tabular-nums text-sm sm:text-base"
            style={{ color: accent }}
          >
            {dict.hero.endsValue}
          </span>
        </motion.div>

        {/* Source line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-xs text-muted mt-4"
        >
          {dict.hero.sourceLabel}
        </motion.p>

        {/* StackOptic sponsor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 sm:mt-10"
        >
          <motion.a
            href="https://stackoptic.com?ref=promoclock&utm_source=promoclock&utm_campaign=solo50"
            target="_blank"
            rel="noopener noreferrer sponsored"
            animate={{
              boxShadow: [
                "0 0 0 1.5px rgba(45,43,110,0.18), 0 4px 14px rgba(45,43,110,0.08)",
                "0 0 0 2.5px rgba(45,43,110,0.42), 0 6px 26px rgba(45,43,110,0.18)",
                "0 0 0 1.5px rgba(45,43,110,0.18), 0 4px 14px rgba(45,43,110,0.08)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-stretch rounded-2xl overflow-hidden bg-surface border border-transparent hover:border-[#2D2B6E]/40 transition-colors group w-full max-w-xl mx-auto"
          >
            {/* Top: sponsor identity */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4">
              <img
                src="/stackoptic-logo.png"
                alt="StackOptic"
                className="h-8 sm:h-9 w-auto self-center sm:self-auto shrink-0 mix-blend-multiply"
              />
              <span className="hidden sm:block w-px h-10 bg-border/60 shrink-0" />
              <div className="flex flex-col items-center sm:items-start gap-0.5 text-center sm:text-left flex-1 min-w-0">
                <span className="text-sm sm:text-[15px] font-semibold text-foreground group-hover:text-[#2D2B6E] transition-colors leading-snug">
                  {dict.sponsors.stackopticHeadline}
                </span>
                <span className="text-xs text-muted leading-snug">
                  {dict.sponsors.stackopticSub}
                </span>
              </div>
            </div>

            {/* Bottom: prominent SOLO50 promo strip */}
            <div className="relative flex flex-wrap items-center justify-center sm:justify-between gap-x-3 gap-y-2 px-4 sm:px-5 py-3 sm:py-3.5 bg-linear-to-r from-[#2D2B6E] via-[#3b3899] to-[#2D2B6E] text-white overflow-hidden">
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.22), transparent)",
                }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 text-[10px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase bg-white/15 border border-white/30 px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">
                {dict.sponsors.stackopticPromoBadge}
              </span>
              <span className="relative z-10 text-sm sm:text-[15px] font-bold leading-tight text-center flex-1 min-w-0 px-1">
                {dict.sponsors.stackopticPromo}
              </span>
              <span className="relative z-10 font-mono font-extrabold tracking-widest text-xs sm:text-sm bg-white text-[#2D2B6E] px-3 py-1.5 rounded-md shadow-sm shrink-0 whitespace-nowrap">
                {dict.sponsors.stackopticCode}
              </span>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
