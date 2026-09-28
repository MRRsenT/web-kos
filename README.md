# Sedayu Living — Platform Sewa Kos, Kontrakan & Apartemen

Website profesional untuk bisnis hunian sewa (kos, kontrakan, apartemen) dengan
teknologi modern **Next.js 16 + TypeScript + Tailwind CSS v4**, siap deploy di **Vercel**.

## Struktur Halaman

| Route                    | Keterangan                                          |
| ------------------------ | --------------------------------------------------- |
| `/`                      | Beranda (hero + pencarian, keunggulan, testimoni, FAQ) |
| `/properti`              | Direktori semua properti + filter                   |
| `/kos`                   | Halaman khusus kategori kos                         |
| `/kontrakan`             | Halaman khusus kategori kontrakan                   |
| `/apartemen`             | Halaman khusus kategori apartemen                   |
| `/properti/[slug]`       | Detail unit (galeri, fasilitas, harga, survei)      |
| `/tentang`               | Tentang perusahaan, nilai, cara sewa, tim           |
| `/kontak`                | Form kontak + lokasi + WhatsApp                     |

## Tech Stack

- **Next.js 16** (App Router, RSC, Turbopack) — SSR/SSG otomatis
- **TypeScript** — type-safe
- **Tailwind CSS v4** — design system berbasis `@theme`
- **next/font** — self-hosted `Fraunces` (display serif) + `Inter` (body)
- **next/image** — optimasi & responsive image (Unsplash)
- **lucide-react** — ikonografi ringan

## Design System

Palet **"Trust & Warmth"** (aturan 60-30-10):

- 60% netral `sand` (krem hangat) — background
- 30% brand `teal` (#0f4541 s/d #eef6f4) — trust & premium
- 10% accent `amber` (#e8a33d) — call-to-action & warmth

Didefinisikan di `src/app/globals.css` dalam `@theme`. Kustomisasi cukup edit token warna,
tipe scale, dan spacing — seluruh komponen mengikuti otomatis.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Verifikasi Produksi

```bash
npm run lint   # eslint
npm run build  # next build (prerender statis + SSG)
npm run start  # serve production build
```

## Deploy ke Vercel

### Cara 1 — Git + Vercel (recommended)

```bash
git init
git add .
git commit -m "init sedayu-living"
vercel    # lalu ikuti prompt
```

### Cara 2 — Vercel Dashboard

1. Push repo ini ke GitHub/GitLab/Bitbucket.
2. Di [vercel.com/new](https://vercel.com/new), import repo.
3. Framework preset otomatis terdeteksi **Next.js** (Framework Preset).
4. Build command: `npm run build`. Output: `.next`. Tidak perlu env var.
5. Klik **Deploy**.

## Kustomisasi Konten

Semua konten properti, testimoni, dan FAQ berada di satu file:

```
src/lib/data.ts
```

Tambah/ubah properti dengan mengikuti interface `Property`. Halaman deklaratif otomatis
menyesuaikan (listing, detail, sitemap).

Foto properti memakai Unsplash; ganti `image`/`gallery` dengan URL milik sendiri
(jangan lupa sesuaikan `next.config.ts` → `images.remotePatterns` bila host berbeda).