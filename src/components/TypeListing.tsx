import type { PropertyType } from "@/lib/data";
import { ListingToolbar } from "@/components/ListingToolbar";
import { ListingSection } from "@/components/ListingSection";
import { Reveal } from "@/components/Reveal";

const meta: Record<PropertyType, { eyebrow: string; title: string; lead: string }> = {
  kos: {
    eyebrow: "Kos",
    title: "Kos nyaman untuk segala kebutuhan",
    lead: "Dari kos mahasiswa hemat hingga kos premium untuk profesional — pilih sesuai gaya hidup dan budgetmu.",
  },
  kontrakan: {
    eyebrow: "Kontrakan",
    title: "Rumah kontrakan untuk keluarga",
    lead: "Rumah kontrakan dengan akses mudah, lingkungan tenang, dan kontrak yang jelas tanpa biaya tersembunyi.",
  },
  apartemen: {
    eyebrow: "Apartemen",
    title: "Apartemen modern di pusat kota",
    lead: "Hidup praktis dengan fasilitas lengkap: kolam renang, gym, dan akses mudah ke pusat bisnis kota.",
  },
};

export function TypeListing({
  type,
  items,
  initialKota = "",
  initialMaks = "",
  count,
}: {
  type: PropertyType;
  items: Parameters<typeof ListingSection>[0]["items"];
  initialKota?: string;
  initialMaks?: string;
  count: number;
}) {
  const m = meta[type];
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 pb-16 pt-14 text-sand-100 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 texture-dots opacity-60" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="container-page relative">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-400">
              {m.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {m.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand-100/70 sm:text-lg">
              {m.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-pad pt-10 sm:pt-14">
        <div className="card mb-6 flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="font-display text-2xl font-semibold text-brand-950">{count}</p>
            <p className="text-xs uppercase tracking-wider text-ink-soft">
              Unit tersedia
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium capitalize text-brand-700">
            Kategori {m.eyebrow}
          </span>
        </div>

        <Reveal>
          <ListingToolbar
            type={type}
            initialKota={initialKota}
            initialMaks={initialMaks}
          />
        </Reveal>

        <div className="mt-10">
          <ListingSection items={items} />
        </div>
      </section>
    </>
  );
}