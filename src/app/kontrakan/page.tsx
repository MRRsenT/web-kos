import type { Metadata } from "next";
import { filterProperties } from "@/lib/data";
import { readSearchParams } from "@/lib/search";
import { TypeListing } from "@/components/TypeListing";

export const metadata: Metadata = {
  title: "Kontrakan",
  description:
    "Temukan kontrakan rumah untuk keluarga di Jakarta, Bekasi, dan sekitarnya. Kontrak jelas, lingkungan tenang.",
};

export default async function KontrakanPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { kota, maks } = await readSearchParams(searchParams);
  const items = filterProperties({ tipe: "kontrakan", kota, maks });
  return (
    <TypeListing
      type="kontrakan"
      items={items}
      count={filterProperties({ tipe: "kontrakan" }).length}
      initialKota={kota ?? ""}
      initialMaks={maks ?? ""}
    />
  );
}