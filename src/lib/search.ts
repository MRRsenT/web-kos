export function sp(value: string | string[] | undefined): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

export async function readSearchParams(
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
) {
  const raw = await searchParams;
  return {
    tipe: sp(raw.tipe),
    kota: sp(raw.kota),
    maks: sp(raw.maks),
  };
}