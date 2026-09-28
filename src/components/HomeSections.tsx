import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Wallet,
  Headset,
  BedDouble,
  Home,
  Building2,
  Search,
  Video,
  FileText,
  KeyRound,
  MapPin,
  Star,
  Quote,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { properties, testimonials, faqs, stats } from "@/lib/data";
import { HeroSearch } from "@/components/HeroSearch";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { FaqList } from "@/components/FaqList";

/* ---------------- HERO ---------------- */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-400/15 blur-3xl" />

      <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-700/15 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800">
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              Dipercaya 850+ penghuni sejak 2019
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-brand-950 sm:text-6xl lg:text-[4.25rem]">
              Temukan tempat tinggal yang{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 italic text-brand-600">terasa rumah</span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 h-4 w-full text-accent-500"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 14 C 60 4, 180 3, 296 10"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Kos, kontrakan, dan apartemen terkurasi di 6 kota besar — foto asli, harga
              transparan, dan kontrak jelas. Tanpa drama, langsung siap huni.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8">
              <HeroSearch />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold text-brand-800 sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-ink-soft">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/5 shadow-[0_32px_64px_-24px_rgba(10,53,50,0.4)]">
              <Image
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
                alt="Kamar hunian Sedayu Living yang nyaman dan hangat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
            </div>

            <div className="card absolute -left-4 top-8 flex items-center gap-3 px-4 py-3 sm:-left-10">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-950">100% Terverifikasi</p>
                <p className="text-xs text-ink-soft">Foto & harga asli</p>
              </div>
            </div>

            <div className="card absolute -right-3 bottom-10 px-5 py-4 sm:-right-8">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-950">
                <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
                4.8/5
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                dari 1.200+ ulasan penghuni
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */
export function HomeTrustStrip() {
  const items = ["Kos Nyaman", "Kontrakan Keluarga", "Apartemen Premium", "6 Kota", "850+ Penghuni", "Foto Asli", "Harga Transparan"];
  const row = [
    ...items,
    ...items.map((i) => i.toUpperCase()),
  ];
  return (
    <div className="overflow-hidden border-y border-ink/5 bg-brand-950 py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8" aria-hidden={half === 1}>
            {row.map((t, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 font-display text-lg text-sand-100/70"
              >
                {t}
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- WHY US ---------------- */
export function HomeWhyUs() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Kurasi ketat tiap unit",
      desc: "Setiap properti dicek langsung oleh tim kami sebelum tayang. Foto asli, spesifikasi jujur, tanpa kejutan.",
    },
    {
      icon: Wallet,
      title: "Harga transparan",
      desc: "Harga sewa, utilitas, dan deposit ditulis jelas sejak awal. Tidak ada biaya tersembunyi atau mark-up.",
    },
    {
      icon: Headset,
      title: "Layanan purna-sewa",
      desc: "Setelah pindah, kami tetap ada: bantuan perawatan, klarifikasi tagihan, hingga proses perpanjangan kontrak.",
    },
  ];
  return (
    <section className="container-page section-pad">
      <SectionHeader
        center
        eyebrow="Kenapa Sedayu Living"
        title="Hunian yang aman, bukan sekadar menawar"
        lead="Kami membersihkan ribetnya mencari tempat tinggal — mulai dari pencarian sampai kunci di tangan."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(11,45,40,0.3)]">
              <span className="grid h-13 w-13 place-items-center rounded-2xl bg-brand-800 p-3 text-accent-400 transition-transform duration-300 group-hover:-rotate-6">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-950">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FEATURED ---------------- */
export function HomeFeatured() {
  const featured = properties.filter((p) => p.available).slice(0, 6);
  return (
    <section className="border-y border-ink/5 bg-sand-100/60">
      <div className="container-page section-pad">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Properti Unggulan"
            title="Pilihan terbaik bulan ini"
            lead="Unit terkurasi yang paling banyak disurvei dan direkomendasikan penghuni."
          />
          <Reveal delay={120}>
            <Link href="/properti" className="btn-outline px-6 py-3 text-sm">
              Lihat Semua
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <PropertyCard p={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TYPES ---------------- */
export function HomeTypes() {
  const tiles = [
    {
      type: "kos",
      icon: BedDouble,
      title: "Kos",
      desc: "Kamar nyaman untuk mahasiswa, pekerja, atau siapa pun yang baru mulai.",
      meta: `${properties.filter((p) => p.type === "kos").length} unit aktif`,
      img: "photo-1554995207-c18c203602cb",
    },
    {
      type: "kontrakan",
      icon: Home,
      title: "Kontrakan",
      desc: "Rumah sewa penuh untuk keluarga dengan halaman dan ruang yang lebih lega.",
      meta: `${properties.filter((p) => p.type === "kontrakan").length} unit aktif`,
      img: "photo-1600585154340-be6161a56a0c",
    },
    {
      type: "apartemen",
      icon: Building2,
      title: "Apartemen",
      desc: "Tinggal praktis dengan fasilitas kompleks: gym, kolam, dan akses mudah.",
      meta: `${properties.filter((p) => p.type === "apartemen").length} unit aktif`,
      img: "photo-1522708323590-d24dbb6b0267",
    },
  ];
  return (
    <section className="container-page section-pad">
      <SectionHeader
        center
        eyebrow="Jenis Hunian"
        title="Pilih gaya hidupmu"
        lead="Tiga pilihan hunian dengan standar layanan yang sama-sama rapi."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiles.map(({ type, icon: Icon, title, desc, meta, img }, i) => (
          <Reveal key={type} delay={i * 90}>
            <Link
              href={`/${type}`}
              className="card group block overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(11,45,40,0.32)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=800&q=80`}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />
                <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand-700 backdrop-blur">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="absolute bottom-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-accent-500 text-brand-950 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </span>
              </div>
              <div className="flex items-end justify-between gap-3 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-950">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {meta}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
export function HomeSteps() {
  const steps = [
    { icon: Search, title: "Cari & compare", desc: "Filter berdasarkan tipe, kota, dan budget. Bandingkan unit favoritmu." },
    { icon: Video, title: "Survei unit", desc: "Lihat video langsung atau atur jadwal kunjungan ke lokasi." },
    { icon: FileText, title: "Kontrak digital", desc: "Tanda tangan kontrak sah secara online, tanpa dokumen menumpuk." },
    { icon: KeyRound, title: "Langsung huni", desc: "Terima kunci, laporan inventaris, dan panduan menetap nyaman." },
  ];
  return (
    <section className="border-y border-ink/5 bg-brand-950 text-sand-100">
      <div className="container-page section-pad">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-400">
                Cara Kerja
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Pindahan semudah 1-2-3-4
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-sand-100/70 sm:text-base">
                Tidak ada agen bertele-tele atau kontrak membingungkan. Hanya empat langkah
                yang jelas, dan kamu sudah memegang kunci.
              </p>
              <Link href="/tentang" className="btn-accent mt-7 px-6 py-3 text-sm">
                Pelajari Lebih Lanjut
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-sand-100/10 bg-sand-100/[0.04] p-6 transition-colors duration-300 hover:bg-sand-100/[0.08]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500 text-brand-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-4xl font-semibold text-sand-100/10">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function HomeTestimonials() {
  return (
    <section className="container-page section-pad">
      <SectionHeader
        center
        eyebrow="Kata Penghuni"
        title="Cerita yang bikin kami tetap semangat"
        lead="Ribuan penghuni sudah pindah lewat Sedayu Living. Ini beberapa kisah mereka."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure className="card relative flex h-full flex-col p-7">
              <Quote className="h-8 w-8 text-accent-500" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                <span className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={`https://images.unsplash.com/${t.image}?auto=format&fit=crop&w=96&q=80`}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-950">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
                <span className="ml-auto flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-accent-500 text-accent-500" />
                  ))}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function HomeFaq() {
  return (
    <section className="border-t border-ink/5 bg-sand-100/60">
      <div className="container-page section-pad">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="FAQ"
              title="Pertanyaan yang sering ditanyakan"
              lead="Masih ragu? Ini jawaban untuk keraguan yang paling umum. Tidak ketemu? Hubungi kami kapan saja."
            />
            <Reveal delay={160}>
              <Link href="/kontak" className="btn-primary mt-7 px-6 py-3 text-sm">
                Tanya Konsultasi
              </Link>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
export function HomeCtaBand() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-14 text-center sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 texture-dots opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl" />

        <div className="relative">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-400">
              Mulai Hari Ini
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Rumah baru menunggumu di ujung halaman ini
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand-100/70 sm:text-base">
              Jelajahi daftar properti terkurasi, atau ceritakan kebutuhanmu dan biarkan tim
              kami mencarikannya.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/properti" className="btn-accent px-8 py-4 text-base">
                Cari Properti Sekarang
              </Link>
              <Link href="/kontak" className="btn-outline border-sand-100/25 bg-transparent px-8 py-4 text-base text-white hover:border-sand-100/50 hover:bg-sand-100/10">
                <MapPin className="h-5 w-5" />
                Konsultasi Gratis
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}