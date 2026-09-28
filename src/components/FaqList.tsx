"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { faqs } from "@/lib/data";

export function FaqList({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const active = open === i;
        return (
          <div
            key={f.q}
            className={`card overflow-hidden transition-colors ${active ? "border-brand-700/20" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={active}
            >
              <span className="font-display text-base font-semibold text-brand-950 sm:text-lg">
                {f.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  active ? "rotate-45 bg-brand-800 text-white" : "bg-brand-50 text-brand-800"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}