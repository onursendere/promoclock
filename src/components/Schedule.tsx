"use client";

import { motion } from "framer-motion";
import { CITY_SCHEDULES } from "@/lib/promotion";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Schedule({ dict }: { dict: Dictionary }) {
  return (
    <section id="schedule" className="py-24 px-4" aria-label={dict.schedule.title}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {dict.schedule.title}
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {dict.schedule.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">
                Global off-peak promotion schedule for Claude March 2026
              </caption>
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left px-6 py-4 text-xs tracking-widest text-muted font-medium uppercase">
                    {dict.schedule.tableHeaders.city}
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-widest text-muted font-medium uppercase">
                    {dict.schedule.tableHeaders.timezone}
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-widest text-muted font-medium uppercase">
                    {dict.schedule.tableHeaders.peakHours}
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-widest text-muted font-medium uppercase">
                    {dict.schedule.tableHeaders.offPeakHours}
                  </th>
                </tr>
              </thead>
              <tbody>
                {CITY_SCHEDULES.map((city, i) => (
                  <tr
                    key={city.city}
                    className={`border-b border-border/30 last:border-0 ${
                      i % 2 === 0 ? "" : "bg-surface-warm/20"
                    }`}
                  >
                    <td className="px-6 py-3.5 font-medium whitespace-nowrap">
                      {city.city}
                    </td>
                    <td className="px-6 py-3.5 text-muted whitespace-nowrap">
                      <span>{city.timezone}</span>
                      <span className="text-xs ml-1 text-muted/70">({city.utcOffset})</span>
                    </td>
                    <td className="px-6 py-3.5 text-secondary whitespace-nowrap">
                      <time>{dict.schedule.weekdayLabel}: {city.peakLocal}</time>
                    </td>
                    <td className="px-6 py-3.5 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                        <time>{dict.schedule.weekdayLabel}: {city.offPeakLocal}</time>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-warm/30 text-center">
            <p className="text-sm text-secondary">{dict.schedule.weekendLabel}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
