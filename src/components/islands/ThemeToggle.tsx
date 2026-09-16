import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("pc-theme", next ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode) — the choice lasts for this page only.
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={label} aria-pressed={dark}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
