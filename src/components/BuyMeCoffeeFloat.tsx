"use client";

import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyMeCoffeeFloat() {
  return (
    <motion.a
      href="https://buymeacoffee.com/onursendere"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.25)] hover:scale-110 active:scale-100"
      style={{
        background: '#FFDD00',
        color: '#000000',
      }}
      aria-label="Buy me a coffee"
    >
      <Coffee size={18} strokeWidth={2.5} />
      <span className="hidden sm:inline">Buy me a coffee</span>
    </motion.a>
  );
}
