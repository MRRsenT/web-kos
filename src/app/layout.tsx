import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sedayu-living.vercel.app"),
  title: {
    default: "Sedayu Living — Cari Kos, Kontrakan & Apartemen Terpercaya",
    template: "%s | Sedayu Living",
  },
  description:
    "Temukan kos, kontrakan, dan apartemen terkurasi di Jakarta, Depok, Bekasi, Bandung, dan Surabaya. Proses mudah, transparan, dan siap huni.",
  keywords: [
    "kos",
    "kontrakan",
    "apartemen",
    "sewa hunian",
    "kost jakarta",
    "rumah sewa",
    "Sedayu Living",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sedayu-living.vercel.app",
    siteName: "Sedayu Living",
    title: "Sedayu Living — Cari Kos, Kontrakan & Apartemen Terpercaya",
    description:
      "Temukan hunian terbaikmu: kos, kontrakan, dan apartemen terkurasi di 6 kota besar Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedayu Living — Cari Kos, Kontrakan & Apartemen",
    description: "Temukan hunian terbaikmu di Sedayu Living.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4541",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-sand-50 font-sans text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}