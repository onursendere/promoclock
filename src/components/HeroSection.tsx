"use client";

import { motion } from "framer-motion";
import { usePromotionStatus } from "@/hooks/usePromotionStatus";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HeroProps {
  dict: Dictionary;
}

function CountdownDigit({
  value,
  label,
  isPeak,
}: {
  value: number;
  label: string;
  isPeak: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] border"
        style={{
          background: isPeak ? "rgba(139,58,58,0.08)" : "rgba(29,91,26,0.08)",
          borderColor: isPeak ? "rgba(139,58,58,0.2)" : "rgba(29,91,26,0.2)",
        }}
      >
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold tabular-nums"
          style={{ color: isPeak ? "#8B3A3A" : "#1D5B1A" }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="mt-3 text-xs sm:text-sm tracking-widest text-secondary uppercase font-semibold">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection({ dict }: HeroProps) {
  const status = usePromotionStatus();

  const isPeak = status.isLoaded && status.isPeak;
  const isOffPeak = !isPeak;

  const getStatusText = () => {
    if (!status.isLoaded) return "\u00a0";
    if (isPeak) return dict.hero.promotionInactive;
    return dict.hero.promotionActive;
  };

  const getSubtitleText = () => {
    if (!status.isLoaded) return "\u00a0";
    if (isPeak) return dict.hero.inactiveSubtitle;
    return dict.hero.activeSubtitle;
  };

  const localTimeStr = status.isLoaded
    ? status.userLocalTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "--:--:--";

  const badgeBg = !status.isLoaded
    ? "#A8A3AC"
    : isPeak
    ? "#8B3A3A"
    : "#1D5B1A";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        {/* Dynamic status badge */}
        <motion.div
          key={String(isPeak)}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 relative overflow-hidden font-bold text-sm sm:text-base tracking-wide"
          style={{
            background: badgeBg,
            color: "#FFFFFF",
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full bg-white relative z-10 ${
              isOffPeak && status.isLoaded ? "animate-pulse" : ""
            }`}
          />
          <span className="relative z-10">{dict.hero.badge}</span>
        </motion.div>

        {/* Main status heading */}
        <motion.h1
          key={getStatusText()}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 px-4"
          style={{
            color: !status.isLoaded
              ? "var(--foreground)"
              : isPeak
              ? "#8B3A3A"
              : "#1D5B1A",
          }}
        >
          {getStatusText()}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={getSubtitleText()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg text-secondary max-w-2xl mx-auto mb-10 px-4 leading-relaxed font-medium"
        >
          {getSubtitleText()}
        </motion.p>

        {/* Timezone info */}
        {status.isLoaded && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted mb-10 px-4">
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-semibold">{dict.hero.yourTimezone}:</span>
              <span className="font-medium">{status.userTimezone}</span>
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-semibold">{dict.hero.yourLocalTime}:</span>
              <time className="tabular-nums font-medium">{localTimeStr}</time>
            </div>
          </div>
        )}

        {/* Countdown — always shown once loaded */}
        {status.isLoaded && status.nextChangeTimestamp > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs sm:text-sm tracking-widest text-secondary uppercase mb-6 font-semibold">
              {dict.hero.countdownLabel}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              {status.countdown.days > 0 && (
                <CountdownDigit
                  value={status.countdown.days}
                  label={dict.hero.days}
                  isPeak={isPeak}
                />
              )}
              <CountdownDigit
                value={status.countdown.hours}
                label={dict.hero.hours}
                isPeak={isPeak}
              />
              <CountdownDigit
                value={status.countdown.minutes}
                label={dict.hero.minutes}
                isPeak={isPeak}
              />
              <CountdownDigit
                value={status.countdown.seconds}
                label={dict.hero.seconds}
                isPeak={isPeak}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
