import type { Metadata } from "next";
import { filterProperties } from "@/lib/data";
import { readSearchParams } from "@/lib/search";
import { TypeListing } from "@/components/TypeListing";

export const metadata: Metadata = {
  title: "Kos",
  description:
    "Temukan kos nyaman dan terkurasi di Jakarta, Depok, Bekasi, Bandung, dan Surabaya. Transparan, siap huni.",
};

export default async function KosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { kota, maks } = await readSearchParams(searchParams);
  const items = filterProperties({ tipe: "kos", kota, maks });
  return (
    <TypeListing
      type="kos"
      items={items}
      count={filterProperties({ tipe: "kos" }).length}
      initialKota={kota ?? ""}
      initialMaks={maks ?? ""}
    />
  );
}