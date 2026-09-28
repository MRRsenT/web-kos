import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim Sedayu Living untuk survei unit, pertanyaan sewa, atau kerja sama pemasaran properti.",
};

export default async function KontakPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const unit = typeof sp.unit === "string" ? sp.unit : "";

  const infos = [
    {
      icon: MapPin,
      title: "Kantor Pusat",
      lines: ["Jl. Kemang Raya No. 8", "Jakarta Selatan 12730, Indonesia"],
    },
    {
      icon: Phone,
      title: "Telepon",
      lines: ["(021) 512 3456", "0812 5051 212 (WhatsApp)"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["halo@sedayuliving.id", "kemitraan@sedayuliving.id"],
    },
    {
      icon: Clock,
      title: "Jam Layanan",
      lines: ["Senin–Jumat: 08.00–20.00", "Sabtu–Minggu: 09.00–17.00 WIB"],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Kontak Kami"
        title="Mari bicarakan hunian impianmu"
        lead="Tim kami siap membantu mulai dari survei unit, proses sewa, hingga layanan setelah penghuni menetap."
      />

      <section className="container-page section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <div>
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {infos.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="card p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-brand-950">
                      {title}
                    </h3>
                    {lines.map((l) => (
                      <p key={l} className="mt-1 text-sm text-ink-soft">{l}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="card mt-4 overflow-hidden p-0">
                <iframe
                  title="Lokasi kantor Sedayu Living"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.800%2C-6.275%2C106.835%2C-6.255&layer=mapnik&marker=-6.265%2C106.817"
                  className="h-72 w-full border-0"
                  loading="lazy"
                />
                <div className="flex items-center gap-3 px-5 py-4">
                  <Building2 className="h-5 w-5 text-brand-600" />
                  <p className="text-sm font-medium text-brand-950">
                    Sedayu Living HQ — Kemang, Jakarta Selatan
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="lg:sticky lg:top-28">
              <ContactForm initialUnit={unit} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl bg-brand-800 bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-12 text-center text-sand-100 sm:px-14">
          <MessageCircle className="mx-auto h-8 w-8 text-accent-400" />
          <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
            Butuh jawaban cepat?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-sand-100/70">
            Tim WhatsApp kami merespons rata-rata dalam 15 menit pada jam kerja.
          </p>
          <a
            href="https://wa.me/628125051212?text=Halo%20Sedayu%20Living%2C%20saya%20ingin%20bertanya%20tentang%20hunian."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent mt-6 px-7 py-3.5"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}