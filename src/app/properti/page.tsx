import type { Metadata } from "next";
import { filterProperties } from "@/lib/data";
import { readSearchParams } from "@/lib/search";
import { PageHero } from "@/components/PageHero";
import { ListingToolbar } from "@/components/ListingToolbar";
import { ListingSection } from "@/components/ListingSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Semua Properti (Kos, Kontrakan, Apartemen)",
  description:
    "Jelajahi daftar lengkap kos, kontrakan, dan apartemen terkurasi di 6 kota besar Indonesia.",
};

export default async function PropertiPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { tipe, kota, maks } = await readSearchParams(searchParams);
  const items = filterProperties({ tipe, kota, maks });

  return (
    <>
      <PageHero
        eyebrow="Direktori Hunian"
        title="Semua properti terkurasi untukmu"
        lead="Dari kos nyaman, kontrakan keluarga, hingga apartemen premium — semua sudah dicek staf kami dan siap huni."
      />

      <section className="container-page section-pad pt-10 sm:pt-14">
        <div className="card mb-6 flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="font-display text-2xl font-semibold text-brand-950">
              {items.length}
            </p>
            <p className="text-xs uppercase tracking-wider text-ink-soft">
              Properti ditemukan
            </p>
          </div>
          {tipe && (
            <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium capitalize text-brand-700">
              Filter: {tipe}
            </span>
          )}
        </div>

        <Reveal>
          <ListingToolbar
            initialKota={kota ?? ""}
            initialMaks={maks ?? ""}
          />
        </Reveal>

        <div className="mt-10">
          <ListingSection items={items} />
        </div>
      </section>
    </>
  );
}