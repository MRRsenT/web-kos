import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  MapPin,
  Star,
  BedDouble,
  Bath,
  Ruler,
  Check,
  ShieldCheck,
  Zap,
  Wifi,
  Droplets,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { getProperty, properties, formatPrice } from "@/lib/data";
import { Gallery } from "@/components/Gallery";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return { title: "Properti tidak ditemukan" };
  return {
    title: p.name,
    description: p.short,
    openGraph: {
      title: p.name,
      description: p.short,
      images: [{ url: p.image, alt: p.name }],
    },
  };
}

const includeIcons: Record<string, typeof Zap> = {
  Listrik: Zap,
  Air: Droplets,
  "Wi-Fi": Wifi,
};

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const similar = properties
    .filter((x) => x.type === p.type && x.slug !== p.slug)
    .slice(0, 3);

  return (
    <div className="container-page py-10 sm:py-14">
      <nav className="flex items-center gap-1.5 text-sm text-ink-soft" aria-label="Breadcrumb">
        <Link href="/" className="transition-colors hover:text-brand-700">Beranda</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${p.type}`} className="capitalize transition-colors hover:text-brand-700">
          {p.typeLabel}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="truncate text-brand-900">{p.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <Reveal>
            <Gallery images={p.gallery} alt={p.name} />
          </Reveal>

          <Reveal>
            <div className="mt-10">
              <p className="eyebrow">Tentang Unit Ini</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-brand-950">
                {p.name}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10">
              <p className="eyebrow">Fasilitas</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {p.facilities.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-ink/5 bg-white px-4 py-3 text-sm font-medium text-brand-950"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Check className="h-4 w-4" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10">
              <p className="eyebrow">Sudah Termasuk</p>
              <ul className="mt-4 space-y-2.5">
                {p.includes.map((inc) => {
                  const Icon = includeIcons[inc] ?? Sparkles;
                  return (
                    <li
                      key={inc}
                      className="flex items-center gap-3 text-[15px] text-ink"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-400/25 text-accent-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{inc}</span> — tanpa biaya tambahan
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="card p-6 lg:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h1 className="font-display text-2xl font-semibold leading-tight text-brand-950">
                    {p.name}
                  </h1>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-soft">
                    <MapPin className="h-4 w-4 text-brand-600" />
                    {p.address}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    p.available ? "bg-brand-50 text-brand-700" : "bg-clay-50 text-clay-500"
                  }`}
                >
                  {p.available ? "Tersedia" : "Menunggu Unit"}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-1.5">
                <Star className="h-4.5 w-4.5 fill-accent-500 text-accent-500" />
                <span className="font-semibold text-brand-950">{p.rating.toFixed(1)}</span>
                <span className="text-sm text-ink-soft">({p.reviews} ulasan)</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: BedDouble, label: `${p.beds} Kamar` },
                  { icon: Bath, label: `${p.baths} Kamar mandi` },
                  { icon: Ruler, label: `${p.size} m²` },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-xl bg-sand-50 px-3 py-3 text-center">
                    <Icon className="mx-auto h-5 w-5 text-brand-700" />
                    <p className="mt-1.5 text-xs font-medium text-ink-soft">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-ink/5 pt-5">
                <p className="text-xs uppercase tracking-wider text-ink-soft">Harga sewa</p>
                <p className="mt-1 font-display text-3xl font-semibold text-brand-800">
                  {formatPrice(p.price)}
                  <span className="text-base font-normal text-ink-soft">/bulan</span>
                </p>
                <p className="mt-1 text-xs text-ink-soft">
                  Pembayaran bulanan · deposit 1 bulan · tanpa komisi agen
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={`/kontak?unit=${p.slug}`}
                  className="btn-accent w-full px-6 py-3.5"
                >
                  Ajukan Survei Unit
                </a>
                <a
                  href="https://wa.me/628215051212?text=Halo%20Sedayu%20Living%2C%20saya%20tertarik%20dengan%20unit%20ini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full px-6 py-3.5"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  Tanya via WhatsApp
                </a>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-50 px-4 py-3.5 text-sm text-brand-800">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                <p>
                  Unit ini diverifikasi tim Sedayu Living pada bulan ini. Foto asli, harga
                  transparan.
                </p>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Masih Ragu?</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
                  Unit {p.typeLabel} lainnya
                </h2>
              </div>
              <Link href={`/${p.type}`} className="btn-outline px-5 py-2.5 text-sm">
                Lihat semua {p.typeLabel}
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {similar.map((s) => (
              <PropertyCard key={s.slug} p={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}