import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Handshake,
  HeartHandshake,
  Search,
  Video,
  FileText,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Sedayu Living adalah platform hunian sewa terkurasi yang berdiri untuk memudahkan orang Indonesia menemukan tempat tinggal yang jujur dan nyaman.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Kurasi Jujur",
    desc: "Setiap properti dicek langsung oleh tim kami. Foto asli, ukuran nyata, dan harga tanpa mark-up.",
  },
  {
    icon: Handshake,
    title: "Transaksi Transparan",
    desc: "Kontrak tertulis, biaya jelas, dan deposit yang dikembalikan sesuai ketentuan.",
  },
  {
    icon: HeartHandshake,
    title: "Layanan Purna-Sewa",
    desc: "Kami tetap mendampingi setelah Anda menetap — perawatan, tagihan, hingga pindahan.",
  },
];

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Cari & filter",
    desc: "Tentukan tipe hunian, kota, dan budget. Gunakan filter untuk mempersempit pilihan.",
  },
  {
    icon: Video,
    num: "02",
    title: "Survei unit",
    desc: "Lihat galeri, minta video call langsung ke unit, atau atur kunjungan ke lokasi.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Booking & kontrak",
    desc: "Bayar deposit untuk mengunci unit, lalu tandatangani kontrak digital yang sah.",
  },
  {
    icon: KeyRound,
    num: "04",
    title: "Pindah & betah",
    desc: "Terima kunci dan laporan inventaris. Tim kami siap membantu selama masa sewa.",
  },
];

const team = [
  { img: "photo-1560250097-0b93528c311a", name: "Andhika Pratama", role: "Founder & CEO" },
  { img: "photo-1573496359142-b8d87734a5a2", name: "Ratna Kusuma", role: "Head of Operations" },
  { img: "photo-1519085360753-af0119f7cbe7", name: "Dimas Arya", role: "Head of Property" },
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Rumah yang nyaman bukan keberuntungan — tapi kepastian"
        lead="Sejak 2019, Sedayu Living membantu lebih dari 850 penghuni menemukan tempat tinggal yang aman, jujur, dan sesuai budget."
      />

      <section className="container-page section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-ink/5">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
                  alt="Suasana hunian Sedayu Living"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="card absolute -bottom-6 -right-3 max-w-xs p-5 sm:right-6">
                <p className="font-display text-3xl font-semibold text-brand-800">850+</p>
                <p className="mt-1 text-sm text-ink-soft">
                  penghuni nyaman tinggal dan merekomendasikan kami ke teman-teman mereka.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Kisah Kami</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-950 sm:text-4xl">
              Berawal dari masalah yang sama-sama kita hadapi
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              Pendiri kami pernah mengalami harga kamar yang tidak sesuai foto, pemilik yang
              sulit dihubungi setelah deposit dibayar, dan kontrak lisan yang menyesatkan.
              Dua tahun bertualang pindah-pindah kos, satu hal menjadi jelas: pasar sewa di
              Indonesia butuh standar baru.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Sedayu Living dibangun untuk menjadi jembatan jujur antara pemilik properti dan
              calon penghuni. Kami memeriksa setiap unit, menuliskan biaya secara transparan,
              dan berdiri di belakang setiap transaksi yang terjadi lewat platform kami.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Sejak 2019", "6 kota", "40+ properti", "Rating 4.8/5"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-brand-900"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-sand-100/60">
        <div className="container-page section-pad">
          <SectionHeader
            center
            eyebrow="Nilai Kami"
            title="Tiga prinsip yang tidak kami tawar"
            lead="Di balik setiap properti yang kami kelola, ada standar layanan yang konsisten."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-800 text-accent-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-brand-950">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-pad">
        <SectionHeader
          center
          eyebrow="Cara Sewa"
          title="Hunian baru dalam 4 langkah"
          lead="Proses yang sederhana, jelas, dan dapat dilacak — dari pencarian hingga memegang kunci."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <Reveal key={num} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-ink/5 bg-white p-6">
                <span className="font-display text-5xl font-semibold text-brand-100">
                  {num}
                </span>
                <span className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/5 bg-sand-100/60">
        <div className="container-page section-pad">
          <SectionHeader center eyebrow="Tim Kami" title="Orang-orang di balik Sedayu" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="card overflow-hidden text-center">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/${m.img}?auto=format&fit=crop&w=600&q=80`}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <h3 className="font-display text-lg font-semibold text-brand-950">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-600">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
                Siap memulai babak baru?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink-soft sm:text-base">
                Jelajahi properti terkurasi kami atau ceritakan kebutuhan Anda — kami bantu
                menemukan yang paling pas.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/properti" className="btn-primary px-6 py-3.5">
                Lihat Properti
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <Link href="/kontak" className="btn-outline px-6 py-3.5">
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}