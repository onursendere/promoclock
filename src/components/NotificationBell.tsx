"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Bell, BellOff, Volume2, VolumeX } from "lucide-react";
import { usePromotionStatus } from "@/hooks/usePromotionStatus";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface NotificationBellProps {
  dict: Dictionary;
}

export default function NotificationBell({ dict }: NotificationBellProps) {
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const status = usePromotionStatus();
  const prevOffPeak = useRef<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof Notification !== "undefined") {
      setPermission(Notification.permission);
    }
    // Restore preferences from localStorage
    const savedNotif = localStorage.getItem("pc-notif");
    const savedSound = localStorage.getItem("pc-sound");
    if (savedNotif === "true") setNotifEnabled(true);
    if (savedSound === "true") setSoundEnabled(true);
  }, []);

  // Create a gentle chime using Web Audio API
  const playChime = useCallback(() => {
    try {
      const ctx = new AudioContext();
      const now = ctx.currentTime;

      // Gentle bell-like tone (spiritual healer vibe)
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 — major chord
      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.08, now + i * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 1.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + 1.5);
      });
    } catch {
      // Web Audio API not available
    }
  }, []);

  // Watch for status changes
  useEffect(() => {
    if (!status.isLoaded || !status.isActive) return;

    if (prevOffPeak.current !== null && prevOffPeak.current !== status.isOffPeak) {
      // Status changed!
      if (notifEnabled && permission === "granted") {
        const title = status.isOffPeak
          ? "🟢 Claude 2X Limits Active!"
          : "🔴 Peak Hours — Standard Limits";
        const body = status.isOffPeak
          ? dict.hero.activeSubtitle
          : dict.hero.inactiveSubtitle;

        new Notification(title, {
          body,
          icon: "/favicon.ico",
          tag: "promoclock-status",
        });
      }

      if (soundEnabled && status.isOffPeak) {
        playChime();
      }
    }

    prevOffPeak.current = status.isOffPeak;
  }, [status.isOffPeak, status.isLoaded, status.isActive, notifEnabled, soundEnabled, permission, dict, playChime]);

  const toggleNotifications = async () => {
    if (!notifEnabled) {
      if (typeof Notification === "undefined") return;
      const perm = await Notification.requestPermission();
      setPermission(perm);
      if (perm === "granted") {
        setNotifEnabled(true);
        localStorage.setItem("pc-notif", "true");
      }
    } else {
      setNotifEnabled(false);
      localStorage.setItem("pc-notif", "false");
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem("pc-sound", String(next));
    if (next) playChime(); // Preview the chime
  };

  if (typeof window === "undefined") return null;

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={toggleNotifications}
        className={`p-2 rounded-lg transition-colors ${
          notifEnabled
            ? "text-primary bg-primary/10"
            : "text-muted hover:text-foreground hover:bg-surface-warm/50"
        }`}
        aria-label={notifEnabled ? "Disable notifications" : "Enable notifications"}
        title={notifEnabled ? "Notifications on" : "Notifications off"}
      >
        {notifEnabled ? <Bell size={16} /> : <BellOff size={16} />}
      </button>
      <button
        onClick={toggleSound}
        className={`p-2 rounded-lg transition-colors ${
          soundEnabled
            ? "text-primary bg-primary/10"
            : "text-muted hover:text-foreground hover:bg-surface-warm/50"
        }`}
        aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
        title={soundEnabled ? "Sound on" : "Sound off"}
      >
        {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
}
