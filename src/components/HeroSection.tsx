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
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-surface rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-border/30">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums"
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
    if (status.isPeak && status.isActive) return "bg-accent-red";
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
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-warm/90 text-xs sm:text-sm tracking-widest text-secondary mb-8 relative overflow-hidden font-semibold"
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 px-4"
        >
          {getStatusText()}
        </motion.h1>

        <motion.p
          key={getSubtitleText()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-12 px-4 leading-relaxed font-medium"
        >
          {getSubtitleText()}
        </motion.p>

        {status.isLoaded && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base text-muted mb-10 px-4">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-semibold">{dict.hero.yourTimezone}:</span>
              <span className="font-medium">{status.userTimezone}</span>
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-semibold">{dict.hero.yourLocalTime}:</span>
              <time className="tabular-nums font-medium">{localTimeStr}</time>
            </div>
          </div>
        )}

        {status.isActive && !status.isExpired && status.nextChangeTimestamp > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base tracking-widest text-secondary uppercase mb-6 font-semibold">
              {dict.hero.countdownLabel}
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
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
            <p className="text-sm sm:text-base tracking-widest text-secondary uppercase mb-6 font-semibold">
              {dict.hero.countdownLabel}
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
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
