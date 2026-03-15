"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { i18n, localeNames, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import PromoClockLogo from "@/components/PromoClockLogo";

interface HeaderProps {
  dict: Dictionary;
  lang: Locale;
}

export default function Header({ dict, lang }: HeaderProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${locale}`);
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
    router.push(newPath);
    setLangOpen(false);
  };

  const navItems = [
    { href: "#how-it-works", label: dict.header.nav.howItWorks },
    { href: "#eligibility", label: dict.header.nav.eligibility },
    { href: "#schedule", label: dict.header.nav.schedule },
    { href: "#faq", label: dict.header.nav.faq },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={`/${lang}`} className="flex items-center">
          <PromoClockLogo size={28} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-secondary hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-surface-warm/50"
              aria-label="Change language"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{localeNames[lang]}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-surface rounded-xl shadow-lg border border-border/50 overflow-hidden"
                >
                  {i18n.locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLocale(locale)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        locale === lang
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-surface-warm/50"
                      }`}
                    >
                      {localeNames[locale]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://github.com/onursendere/promoclock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-foreground transition-colors p-1.5"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-secondary hover:text-foreground transition-colors p-1.5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-wide text-secondary hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
