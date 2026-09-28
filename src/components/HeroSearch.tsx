"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search, Home, Building2, Warehouse } from "lucide-react";

const types = [
  { value: "", label: "Semua tipe" },
  { value: "kos", label: "Kos" },
  { value: "kontrakan", label: "Kontrakan" },
  { value: "apartemen", label: "Apartemen" },
];

const cities = [
  "Jakarta Selatan",
  "Jakarta Utara",
  "Depok",
  "Bekasi",
  "Bandung",
  "Surabaya",
];

const budgets = [
  { value: "", label: "Semua harga" },
  { value: "1500000", label: "< Rp 1,5 jt" },
  { value: "3000000", label: "< Rp 3 jt" },
  { value: "5000000", label: "< Rp 5 jt" },
];

export function HeroSearch() {
  const router = useRouter();
  const [tipe, setTipe] = useState("");
  const [kota, setKota] = useState("");
  const [maks, setMaks] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const q = new URLSearchParams();
    if (tipe) q.set("tipe", tipe);
    if (kota) q.set("kota", kota);
    if (maks) q.set("maks", maks);
    router.push(q.size ? `/properti?${q.toString()}` : "/properti");
  }

  return (
    <form
      onSubmit={submit}
      className="card flex flex-col gap-3 p-3 sm:p-2.5 lg:flex-row lg:items-center lg:gap-2"
    >
      <div className="flex flex-1 items-center gap-3 rounded-2xl border border-ink/8 bg-sand-50 px-4 py-3.5">
        <Home className="h-5 w-5 shrink-0 text-brand-600" />
        <select
          aria-label="Tipe hunian"
          value={tipe}
          onChange={(e) => setTipe(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-brand-950 outline-none focus:outline-none"
        >
          {types.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-1 items-center gap-3 rounded-2xl border border-ink/8 bg-sand-50 px-4 py-3.5">
        <Building2 className="h-5 w-5 shrink-0 text-brand-600" />
        <select
          aria-label="Pilih kota"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-brand-950 outline-none focus:outline-none"
        >
          <option value="">Semua kota</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-1 items-center gap-3 rounded-2xl border border-ink/8 bg-sand-50 px-4 py-3.5">
        <Warehouse className="h-5 w-5 shrink-0 text-brand-600" />
        <select
          aria-label="Budget bulanan"
          value={maks}
          onChange={(e) => setMaks(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-brand-950 outline-none focus:outline-none"
        >
          {budgets.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-accent gap-2 px-7 py-4 lg:py-3.5">
        <Search className="h-5 w-5" />
        <span className="hidden sm:inline">Cari Hunian</span>
        <span className="sm:hidden">Cari</span>
      </button>
    </form>
  );
}