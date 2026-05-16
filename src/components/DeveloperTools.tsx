"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function DeveloperTools({ dict }: { dict: Dictionary }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const curlCommand = `curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'],d['label'])"`;

  const zshPrompt = `# Add to ~/.zshrc
claude_status() {
  curl -s https://promoclock.co/api/status | \\
    python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'])" 2>/dev/null || echo '⏳'
}
RPROMPT='$(claude_status)'`;

  return (
    <section id="developer-tools" className="py-24 px-4" aria-label={dict.devTools.title}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {dict.devTools.title}
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {dict.devTools.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {/* API Endpoint Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Terminal size={22} className="text-primary" />
            </div>
            <h3 className="text-sm font-semibold tracking-wide mb-2">
              {dict.devTools.apiTitle}
            </h3>
            <p className="text-sm text-secondary leading-relaxed mb-5">
              {dict.devTools.apiDescription}
            </p>

            {/* curl command */}
            <div className="relative mb-4">
              <pre className="bg-foreground/3 rounded-xl p-4 text-xs text-secondary overflow-x-auto font-mono leading-relaxed">
                <code>{curlCommand}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(curlCommand, "curl")}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-surface hover:bg-surface-warm/80 text-muted hover:text-foreground transition-colors"
                aria-label="Copy"
              >
                {copied === "curl" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            {/* ZSH prompt */}
            <div className="relative">
              <pre className="bg-foreground/3 rounded-xl p-4 text-xs text-secondary overflow-x-auto font-mono leading-relaxed">
                <code>{zshPrompt}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(zshPrompt, "zsh")}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-surface hover:bg-surface-warm/80 text-muted hover:text-foreground transition-colors"
                aria-label="Copy"
              >
                {copied === "zsh" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <a
              href="/api/status"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              {dict.devTools.tryApi}
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Notification info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-surface rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide mb-1">
                {dict.devTools.notifTitle}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {dict.devTools.notifDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
