import type { Metadata } from "next";
import { filterProperties } from "@/lib/data";
import { readSearchParams } from "@/lib/search";
import { TypeListing } from "@/components/TypeListing";

export const metadata: Metadata = {
  title: "Apartemen",
  description:
    "Sewa apartemen modern dan furnished di Jakarta, Surabaya, dan sekitarnya dengan fasilitas kompleks lengkap.",
};

export default async function ApartemenPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { kota, maks } = await readSearchParams(searchParams);
  const items = filterProperties({ tipe: "apartemen", kota, maks });
  return (
    <TypeListing
      type="apartemen"
      items={items}
      count={filterProperties({ tipe: "apartemen" }).length}
      initialKota={kota ?? ""}
      initialMaks={maks ?? ""}
    />
  );
}