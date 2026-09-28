import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-28 text-center">
      <p className="font-display text-[7rem] font-semibold leading-none text-brand-100 sm:text-[10rem]">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
        Sepertinya hunian atau halaman yang Anda cari sudah pindah atau tidak pernah ada.
        Mari kembali ke tempat yang lebih nyaman.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary px-6 py-3.5 text-sm">
          <Home className="h-4.5 w-4.5" />
          Kembali ke Beranda
        </Link>
        <Link href="/properti" className="btn-outline px-6 py-3.5 text-sm">
          <Compass className="h-4.5 w-4.5" />
          Lihat Properti
        </Link>
      </div>
    </section>
  );
}