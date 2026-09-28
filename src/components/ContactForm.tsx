"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm({ initialUnit = "" }: { initialUnit?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    tipe: "",
    unit: initialUnit,
    pesan: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-4 px-8 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-brand-950">
          Pesan terkirim!
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          Terima kasih, {form.nama.split(" ")[0] || "sahabat"}! Tim Sedayu Living akan
          menghubungi Anda maksimal 1×24 jam kerja. Untuk respon tercepat, hubungi kami
          langsung via WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setForm({ nama: "", email: "", telepon: "", tipe: "", unit: "", pesan: "" });
          }}
          className="btn-outline mt-2 px-5 py-2.5 text-sm"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink/10 bg-sand-50 px-4 py-3 text-sm text-brand-950 outline-none transition-all placeholder:text-ink-soft/70 focus:border-brand-700/40 focus:bg-white focus:ring-2 focus:ring-brand-700/15";
  const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft";

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nama" className={label}>Nama lengkap *</label>
          <input
            id="nama"
            required
            className={field}
            placeholder="cth: Adinda Putri"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email *</label>
          <input
            id="email"
            type="email"
            required
            className={field}
            placeholder="cth: adinda@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="telepon" className={label}>No. WhatsApp *</label>
          <input
            id="telepon"
            type="tel"
            required
            className={field}
            placeholder="cth: 0812xxxxxx"
            value={form.telepon}
            onChange={(e) => setForm({ ...form, telepon: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tipe" className={label}>Tipe hunian</label>
          <select
            id="tipe"
            className={field}
            value={form.tipe}
            onChange={(e) => setForm({ ...form, tipe: e.target.value })}
          >
            <option value="">Pilih tipe</option>
            <option value="kos">Kos</option>
            <option value="kontrakan">Kontrakan</option>
            <option value="apartemen">Apartemen</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="unit" className={label}>Nama unit (opsional)</label>
          <input
            id="unit"
            className={field}
            placeholder="cth: Sukma Kos Premium Cipete"
            value={form.unit}
            onChange={(e) => setForm({ ...form, unit: e.target.value })}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="pesan" className={label}>Pesan *</label>
          <textarea
            id="pesan"
            required
            rows={5}
            className={`${field} resize-none`}
            placeholder="Ceritakan kebutuhan hunian Anda, budget, dan lokasi yang diinginkan..."
            value={form.pesan}
            onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          />
        </div>
      </div>

      <button type="submit" className="btn-accent mt-6 w-full px-6 py-4">
        <Send className="h-4.5 w-4.5" />
        Kirim Pesan
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
      </p>
    </form>
  );
}