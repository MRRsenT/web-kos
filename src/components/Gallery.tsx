"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-ink/5">
        <Image
          src={current}
          alt={`${alt} — foto ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <span className="absolute bottom-4 right-4 rounded-full bg-brand-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          {active + 1} / {images.length}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Tampilkan foto ${i + 1}`}
            className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-all duration-200 ${
              i === active
                ? "ring-3 ring-brand-700 ring-offset-2 ring-offset-sand-50"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}