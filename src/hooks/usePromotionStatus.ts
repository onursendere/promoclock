"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getPromotionStatus,
  getCountdown,
  type PromotionStatus,
} from "@/lib/promotion";

export interface PromotionState extends PromotionStatus {
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalMs: number;
  };
  isLoaded: boolean;
}

export function usePromotionStatus(): PromotionState {
  const [state, setState] = useState<PromotionState>({
    isActive: false,
    isOffPeak: false,
    isPeak: false,
    isExpired: false,
    isNotStarted: true,
    isWeekend: false,
    nextChangeTimestamp: 0,
    userTimezone: "",
    userLocalTime: new Date(),
    promotionStartUTC: 0,
    promotionEndUTC: 0,
    countdown: { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 },
    isLoaded: false,
  });

  const update = useCallback(() => {
    const now = new Date();
    const status = getPromotionStatus(now);
    const countdown = getCountdown(status.nextChangeTimestamp, now);

    setState({
      ...status,
      countdown,
      isLoaded: true,
    });
  }, []);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  return state;
}
