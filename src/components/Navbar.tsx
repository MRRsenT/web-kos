"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/properti", label: "Properti" },
  { href: "/kos", label: "Kos" },
  { href: "/kontrakan", label: "Kontrakan" },
  { href: "/apartemen", label: "Apartemen" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/5 bg-sand-50/85 shadow-[0_8px_30px_-16px_rgba(11,45,40,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Sedayu Living — beranda">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-800 text-accent-400 transition-transform duration-300 group-hover:-rotate-6">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 3 2 11h3v10h6v-6h2v6h6V11h3L12 3zm0 3.4 5 3.9V19h-2v-6H9v6H7V10.3l5-3.9z" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-brand-900">
            Sedayu<span className="text-brand-600"> Living</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-brand-800 text-white"
                  : "text-ink-soft hover:bg-brand-50 hover:text-brand-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/kontak" className="btn-accent px-6 py-2.5 text-sm">
            Cari Hunian
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-white text-brand-900 lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-sand-50/95 px-5 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-brand-800 text-white"
                    : "text-ink-soft hover:bg-brand-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="btn-accent mt-3 px-5 py-3 text-sm"
            >
              Cari Hunian
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}