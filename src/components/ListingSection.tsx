import { SearchX } from "lucide-react";
import type { Property } from "@/lib/data";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";

export function ListingSection({ items }: { items: Property[] }) {
  if (items.length === 0) {
    return (
      <div className="card flex flex-col items-center gap-4 px-8 py-20 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-700">
          <SearchX className="h-8 w-8" />
        </span>
        <h3 className="font-display text-xl font-semibold text-brand-950">
          Belum ada properti yang cocok
        </h3>
        <p className="max-w-md text-sm text-ink-soft">
          Coba ubah filter kota atau rentang harga. Kami terus menambah properti
          baru setiap minggu.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 3) * 90}>
          <PropertyCard p={p} />
        </Reveal>
      ))}
    </div>
  );
}