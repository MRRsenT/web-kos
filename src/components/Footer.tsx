import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const explore = [
  { href: "/", label: "Beranda" },
  { href: "/properti", label: "Semua Properti" },
  { href: "/kos", label: "Kos" },
  { href: "/kontrakan", label: "Kontrakan" },
  { href: "/apartemen", label: "Apartemen" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

const socials: { label: string; path?: string; isWhatsApp?: boolean }[] = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.3.42.6.23 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1.1.42 2.3.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.3-.23.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1.1.36-2.3.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.3-.42-.6-.23-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1.1-.42-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.3.23-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1.1-.36 2.3-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 4.35a5.45 5.45 0 1 0 0 10.9 5.45 5.45 0 0 0 0-10.9Zm0 2.18a3.27 3.27 0 1 1 0 6.54 3.27 3.27 0 0 1 0-6.54Zm6.39-3.84a1.27 1.27 0 1 0 0 2.55 1.27 1.27 0 0 0 0-2.55Z",
  },
  {
    label: "Facebook",
    path: "M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.25-1.5 1.53-1.5h1.64V4.5c-.28-.04-1.26-.12-2.4-.12-2.37 0-3.99 1.45-3.99 4.1v2.3H7.6v3.1h2.68v8h3.22Z",
  },
  {
    label: "WhatsApp",
    isWhatsApp: true,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-950 text-sand-100">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sand-100/10 text-accent-400">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 3 2 11h3v10h6v-6h2v6h6V11h3L12 3zm0 3.4 5 3.9V19h-2v-6H9v6H7V10.3l5-3.9z" />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Sedayu<span className="text-accent-400"> Living</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-100/70">
            Platform terpercaya untuk menemukan kos, kontrakan, dan apartemen yang
            terkurasi. Proses transparan, kontrak jelas, dan layanan purna-sewa yang
            tenang bagi para penghuni.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-sand-100/15 text-sand-100/80 transition-colors hover:border-accent-400 hover:text-accent-400"
              >
                {s.isWhatsApp ? (
                  <MessageCircle className="h-4.5 w-4.5" />
                ) : (
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                    <path d={s.path ?? ""} />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
            Jelajahi
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {explore.map((e) => (
              <li key={e.href}>
                <Link href={e.href} className="text-sand-100/75 transition-colors hover:text-white">
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
            Kontak
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-sand-100/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>Jl. Kemang Raya No. 8<br />Jakarta Selatan 12730</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent-400" />
              <a href="tel:+62215123456" className="transition-colors hover:text-white">
                (021) 512 3456
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent-400" />
              <a href="mailto:halo@sedayuliving.id" className="transition-colors hover:text-white">
                halo@sedayuliving.id
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
            Jam Layanan
          </h4>
          <div className="mt-5 flex items-start gap-3 text-sm text-sand-100/75">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
            <div className="space-y-2">
              <p>Senin–Jumat<br />08.00 – 20.00 WIB</p>
              <p>Sabtu–Minggu<br />09.00 – 17.00 WIB</p>
            </div>
          </div>
          <Link href="/kontak" className="btn-accent mt-6 px-6 py-2.5 text-sm">
            Hubungi Kami
          </Link>
        </div>
      </div>

      <div className="border-t border-sand-100/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand-100/50 sm:flex-row">
          <span>© 2026 Sedayu Living. Seluruh hak cipta dilindungi.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Syarat &amp; Ketentuan</a>
            <a href="#" className="transition-colors hover:text-white">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}