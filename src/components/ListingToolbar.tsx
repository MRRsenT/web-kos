"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Building2, MapPin, Wallet, RotateCcw } from "lucide-react";
import type { PropertyType } from "@/lib/data";

const types = [
  { value: "", label: "Semua tipe" },
  { value: "kos", label: "Kos" },
  { value: "kontrakan", label: "Kontrakan" },
  { value: "apartemen", label: "Apartemen" },
];

const budgets = [
  { value: "", label: "Semua harga" },
  { value: "2000000", label: "< Rp 2 jt" },
  { value: "3000000", label: "< Rp 3 jt" },
  { value: "4500000", label: "< Rp 4,5 jt" },
  { value: "7000000", label: "< Rp 7 jt" },
];

type CityOption = string;
const cityOptions: CityOption[] = [
  "Jakarta Selatan",
  "Jakarta Utara",
  "Depok",
  "Bekasi",
  "Bandung",
  "Surabaya",
];

function Select({
  icon: Icon,
  value,
  onChange,
  options,
  placeholder,
  label,
}: {
  icon: typeof MapPin;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  label: string;
}) {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-ink/8 bg-sand-50 px-4 py-3.5">
      <Icon className="h-5 w-5 shrink-0 text-brand-600" />
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm font-medium text-brand-950 outline-none focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ListingToolbar({
  type,
  initialKota = "",
  initialMaks = "",
}: {
  type?: PropertyType;
  initialKota?: string;
  initialMaks?: string;
}) {
  const router = useRouter();
  const [tipe, setTipe] = useState(type ?? "");
  const [kota, setKota] = useState(initialKota);
  const [maks, setMaks] = useState(initialMaks);

  function apply() {
    const q = new URLSearchParams();
    if (tipe) q.set("tipe", tipe);
    if (kota) q.set("kota", kota);
    if (maks) q.set("maks", maks);
    const base = type ? `/${type}` : "/properti";
    router.push(q.size ? `${base}?${q.toString()}` : base);
  }

  function reset() {
    setTipe(type ?? "");
    setKota("");
    setMaks("");
    router.push(type ? `/${type}` : "/properti");
  }

  const options = type ? null : types;
  const typeOptions = options?.map((t) => ({ value: t.value, label: t.label })) ?? [];
  const cityOptionsMapped = cityOptions.map((c) => ({ value: c, label: c }));

  return (
    <div className="card flex flex-col gap-2 p-3 lg:flex-row lg:items-center lg:gap-2">
      {!type && (
        <Select
          icon={Building2}
          label="Tipe hunian"
          value={tipe}
          onChange={setTipe}
          options={typeOptions}
          placeholder="Semua tipe"
        />
      )}
      <Select
        icon={MapPin}
        label="Pilih kota"
        value={kota}
        onChange={setKota}
        options={cityOptionsMapped}
        placeholder="Semua kota"
      />
      <Select
        icon={Wallet}
        label="Budget bulanan"
        value={maks}
        onChange={setMaks}
        options={budgets}
        placeholder="Semua harga"
      />

      <div className="flex gap-2">
        <button
          type="button"
          onClick={apply}
          className="btn-accent flex-1 px-6 py-3.5 text-sm lg:flex-none lg:py-3"
        >
          Terapkan Filter
        </button>
        <button
          type="button"
          onClick={reset}
          aria-label="Reset filter"
          className="btn-outline grid h-12 w-12 place-items-center p-0 lg:h-11 lg:w-11"
        >
          <RotateCcw className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
}