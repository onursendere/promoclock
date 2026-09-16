import { useCallback, useEffect, useRef, useState } from "react";
import { Bell, BellOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPeakStatus, PEAK_HOURS } from "@/data/claude";
import { cn } from "@/lib/utils";

interface Props {
  titles: { offPeak: string; peak: string };
  bodies: { offPeak: string; peak: string };
}

function readFlag(key: string) {
  try {
    return localStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

function writeFlag(key: string, value: boolean) {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // Storage unavailable — preference won't persist.
  }
}

function playChime() {
  try {
    const ctx = new AudioContext();
    const start = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = start + i * 0.15;
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.08, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 1.5);
    });
  } catch {
    // Web Audio unavailable.
  }
}

export default function NotificationBell({ titles, bodies }: Props) {
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [supported, setSupported] = useState(false);
  const prevPeak = useRef<boolean | null>(null);

  useEffect(() => {
    setSupported(typeof Notification !== "undefined");
    setNotifEnabled(readFlag("pc-notif") && typeof Notification !== "undefined" && Notification.permission === "granted");
    setSoundEnabled(readFlag("pc-sound"));
  }, []);

  const check = useCallback(() => {
    const { isPeak } = getPeakStatus(Date.now());
    if (prevPeak.current !== null && prevPeak.current !== isPeak) {
      if (notifEnabled && Notification.permission === "granted") {
        new Notification(isPeak ? `🔴 ${titles.peak}` : `🟢 ${titles.offPeak}`, {
          body: isPeak ? bodies.peak : bodies.offPeak,
          icon: "/favicon.ico",
          tag: "promoclock-status",
        });
      }
      if (soundEnabled && !isPeak) playChime();
    }
    prevPeak.current = isPeak;
  }, [notifEnabled, soundEnabled, titles, bodies]);

  useEffect(() => {
    if (!PEAK_HOURS.enabled) return;
    check();
    const id = setInterval(check, 1000);
    return () => clearInterval(id);
  }, [check]);

  if (!PEAK_HOURS.enabled) return null;

  const toggleNotifications = async () => {
    if (notifEnabled) {
      setNotifEnabled(false);
      writeFlag("pc-notif", false);
      return;
    }
    if (typeof Notification === "undefined") return;
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      setNotifEnabled(true);
      writeFlag("pc-notif", true);
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    writeFlag("pc-sound", next);
    if (next) playChime();
  };

  return (
    <div className="flex items-center">
      {supported && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleNotifications}
          aria-pressed={notifEnabled}
          aria-label={notifEnabled ? "Disable peak-hours notifications" : "Enable peak-hours notifications"}
          className={notifEnabled ? "bg-accent text-accent-foreground" : undefined}
        >
          {notifEnabled ? <Bell /> : <BellOff />}
        </Button>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        aria-label={soundEnabled ? "Disable sound alert" : "Enable sound alert"}
        className={cn("hidden sm:inline-flex", soundEnabled && "bg-accent text-accent-foreground")}
      >
        {soundEnabled ? <Volume2 /> : <VolumeX />}
      </Button>
    </div>
  );
}
