import type { MetadataRoute } from "next";
import { properties } from "@/lib/data";

export const base = "https://sedayu-living.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/properti`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontrakan`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/apartemen`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tentang`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontak`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${base}/properti/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes];
}