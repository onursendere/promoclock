"use client";

import { motion } from "framer-motion";
import { usePromotionStatus } from "@/hooks/usePromotionStatus";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HeroProps {
  dict: Dictionary;
}

function CountdownDigit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-surface rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-semibold text-foreground tabular-nums"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs tracking-widest text-muted uppercase">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection({ dict }: HeroProps) {
  const status = usePromotionStatus();

  const getStatusText = () => {
    if (!status.isLoaded) return "";
    if (status.isNotStarted) return dict.hero.promotionNotStarted;
    if (status.isExpired) return dict.hero.promotionExpired;
    if (status.isOffPeak) return dict.hero.promotionActive;
    return dict.hero.promotionInactive;
  };

  const getSubtitleText = () => {
    if (!status.isLoaded) return "";
    if (status.isNotStarted) return dict.hero.notStartedSubtitle;
    if (status.isExpired) return dict.hero.expiredSubtitle;
    if (status.isOffPeak) return dict.hero.activeSubtitle;
    return dict.hero.inactiveSubtitle;
  };

  const getStatusColor = () => {
    if (!status.isLoaded) return "bg-muted";
    if (status.isOffPeak && status.isActive) return "bg-accent-green";
    if (status.isPeak && status.isActive) return "bg-accent-blue";
    return "bg-muted";
  };

  const getDotColor = () => {
    if (!status.isLoaded) return "bg-muted";
    if (status.isOffPeak && status.isActive) return "bg-accent-green";
    if (status.isPeak && status.isActive) return "bg-accent-blue";
    return "bg-muted";
  };

  const localTimeStr = status.isLoaded
    ? status.userLocalTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "--:--:--";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-warm/80 text-xs tracking-widest text-secondary mb-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <span className={`w-2 h-2 rounded-full ${getDotColor()} ${status.isActive && status.isOffPeak ? "animate-pulse" : ""} relative z-10`} />
          <span className="relative z-10">{dict.hero.badge}</span>
        </motion.div>

        <motion.h1
          key={getStatusText()}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6"
        >
          {getStatusText()}
        </motion.h1>

        <motion.p
          key={getSubtitleText()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg text-secondary max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {getSubtitleText()}
        </motion.p>

        {status.isLoaded && (
          <div className="flex items-center justify-center gap-4 text-sm text-muted mb-10">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-medium">{dict.hero.yourTimezone}:</span>
              <span>{status.userTimezone}</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-medium">{dict.hero.yourLocalTime}:</span>
              <time className="tabular-nums">{localTimeStr}</time>
            </div>
          </div>
        )}

        {status.isActive && !status.isExpired && status.nextChangeTimestamp > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs tracking-widest text-muted uppercase mb-4">
              {dict.hero.countdownLabel}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              {status.countdown.days > 0 && (
                <CountdownDigit value={status.countdown.days} label={dict.hero.days} />
              )}
              <CountdownDigit value={status.countdown.hours} label={dict.hero.hours} />
              <CountdownDigit value={status.countdown.minutes} label={dict.hero.minutes} />
              <CountdownDigit value={status.countdown.seconds} label={dict.hero.seconds} />
            </div>
          </motion.div>
        )}

        {status.isNotStarted && status.nextChangeTimestamp > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs tracking-widest text-muted uppercase mb-4">
              {dict.hero.countdownLabel}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <CountdownDigit value={status.countdown.days} label={dict.hero.days} />
              <CountdownDigit value={status.countdown.hours} label={dict.hero.hours} />
              <CountdownDigit value={status.countdown.minutes} label={dict.hero.minutes} />
              <CountdownDigit value={status.countdown.seconds} label={dict.hero.seconds} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
