import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, BedDouble, Bath, Ruler, Check } from "lucide-react";
import type { Property } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export function PropertyCard({ p, priority = false }: { p: Property; priority?: boolean }) {
  return (
    <Link
      href={`/properti/${p.slug}`}
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_2px_4px_rgba(11,45,40,0.08),0_24px_48px_-20px_rgba(11,45,40,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-900 shadow-sm backdrop-blur">
            {p.typeLabel}
          </span>
          {p.furnished && (
            <span className="rounded-full bg-accent-500/95 px-3 py-1 text-xs font-semibold text-brand-950 shadow-sm">
              Furnished
            </span>
          )}
        </div>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-brand-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
          {p.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-brand-950 group-hover:text-brand-700">
            {p.name}
          </h3>
        </div>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-ink-soft">
          <MapPin className="h-4 w-4 shrink-0 text-brand-600" />
          {p.area}, {p.city}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-brand-600" /> {p.beds} KT
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-brand-600" /> {p.baths} KM
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-brand-600" /> {p.size} m²
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-ink/5 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-ink-soft">Mulai dari</p>
            <p className="font-display text-xl font-semibold text-brand-800">
              {formatPrice(p.price)}
              <span className="text-sm font-normal text-ink-soft">/bulan</span>
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
              p.available
                ? "bg-brand-50 text-brand-700"
                : "bg-clay-50 text-clay-500"
            }`}
          >
            <Check className={`h-3.5 w-3.5 ${p.available ? "text-brand-600" : "text-clay-400"}`} />
            {p.available ? "Tersedia" : "Menunggu Unit"}
          </span>
        </div>
      </div>
    </Link>
  );
}