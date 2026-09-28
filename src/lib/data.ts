export type PropertyType = "kos" | "kontrakan" | "apartemen";

export interface Property {
  slug: string;
  name: string;
  type: PropertyType;
  typeLabel: string;
  price: number;
  city: string;
  area: string;
  address: string;
  beds: number;
  baths: number;
  size: number;
  furnished: boolean;
  available: boolean;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  short: string;
  description: string;
  facilities: string[];
  includes: string[];
  tags: string[];
}

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    slug: "sukma-kos-premium-cipete",
    name: "Sukma Kos Premium Cipete",
    type: "kos",
    typeLabel: "Kos Premium",
    price: 1750000,
    city: "Jakarta Selatan",
    area: "Cipete",
    address: "Jl. Cipete Raya No. 12A, Jakarta Selatan",
    beds: 1,
    baths: 1,
    size: 18,
    furnished: true,
    available: true,
    rating: 4.8,
    reviews: 132,
    image: u("photo-1505693416388-ac5ce068fe85"),
    gallery: [
      u("photo-1505693416388-ac5ce068fe85"),
      u("photo-1554995207-c18c203602cb"),
      u("photo-1600566753086-00f18fb6b3ea"),
      u("photo-1600210492486-724fe5c67fb0"),
    ],
    short: "Kos eksklusif full-furnished 5 menit dari Stasiun MRT, cocok untuk profesional muda.",
    description:
      "Sukma Kos Premium menawarkan standar hunian kos paling nyaman di area Cipete. Setiap kamar dilengkapi tempat tidur queen size, lemari besar, AC, pemanas air, dan meja kerja ergonomis. Lingkungan asri dan keamanan 24 jam dengan akses kartu.",
    facilities: ["AC", "Kamar mandi dalam", "Wi-Fi 100 Mbps", "Lemari built-in", "Meja kerja", "Lemari es", "Laundry", "Keamanan 24 jam"],
    includes: ["Listrik", "Air", "Wi-Fi", "Kebersihan mingguan"],
    tags: ["profesional", "dekat-mrt", "full-furnished"],
  },
  {
    slug: "taman-sari-kontrakan-kemang",
    name: "Kontrakan Griya Taman Sari",
    type: "kontrakan",
    typeLabel: "Kontrakan",
    price: 4500000,
    city: "Jakarta Selatan",
    area: "Kemang",
    address: "Jl. Kemang Timur IV No. 8, Jakarta Selatan",
    beds: 2,
    baths: 2,
    size: 65,
    furnished: false,
    available: true,
    rating: 4.6,
    reviews: 48,
    image: u("photo-1600585154340-be6161a56a0c"),
    gallery: [
      u("photo-1600585154340-be6161a56a0c"),
      u("photo-1522708323590-d24dbb6b0267"),
      u("photo-1484154218962-a197022b5858"),
      u("photo-1600566753086-00f18fb6b3ea"),
    ],
    short: "Rumah kontrakan 2KT–2KM dengan halaman luas, carport, dan kanopi, ideal untuk keluarga kecil.",
    description:
      "Griya Taman Sari adalah rumah kontrakan bergaya arsitektur tropis modern dengan ruang yang lapang dan pencahayaan alami maksimal. Dilengkapi 2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, carport untuk 1 mobil, dan halaman belakang untuk jemuran.",
    facilities: ["2 kamar tidur", "2 kamar mandi", "Dapur", "Ruang keluarga", "Carport", "Halaman", "Air pam", "Listrik 2200 VA"],
    includes: ["Air (PAM)", "Sampah"],
    tags: ["keluarga", "dekat-kuliner", "parkir-mobil"],
  },
  {
    slug: "apartemen-skyline-kelapa-gading",
    name: "Scandinavian 2BR Skyline @ Kelapa Gading",
    type: "apartemen",
    typeLabel: "Apartemen",
    price: 6800000,
    city: "Jakarta Utara",
    area: "Kelapa Gading",
    address: "Menara Skyline, Jl. Boulevard Barat Raya, Jakarta Utara",
    beds: 2,
    baths: 1,
    size: 54,
    furnished: true,
    available: true,
    rating: 4.9,
    reviews: 214,
    image: u("photo-1512918728675-ed5a9ecdebfd"),
    gallery: [
      u("photo-1512918728675-ed5a9ecdebfd"),
      u("photo-1522708323590-d24dbb6b0267"),
      u("photo-1560448204-e02f11c3d0e2"),
      u("photo-1600210492486-724fe5c67fb0"),
    ],
    short: "Unit 2BR bergaya Skandinavia view kota, plus akses penuh fasilitas premium kompleks.",
    description:
      "Unit apartemen 2 kamar tidur dengan sentuhan desain Skandinavia yang bersih dan hangat. Dilengkapi interior furnised, kitchen set lengkap, dan jendela besar menghadap skyline Jakarta. Nikmati pool, gym, playground, dan shuttle ke stasiun MRT dari kompleks.",
    facilities: ["AC di semua kamar", "Kitchen set", "Furniture lengkap", "Kolam renang", "Gym", "Playground", "Security 24 jam", "Area parkir"],
    includes: ["Listrik", "Air", "Wi-Fi", "IPL", "Shuttle MRT"],
    tags: ["keluarga", "view-kota", "faskes-lengkap"],
  },
  {
    slug: "kos-putri-bunga-melati-depok",
    name: "Kos Putri Bunga Melati",
    type: "kos",
    typeLabel: "Kos Putri",
    price: 1100000,
    city: "Depok",
    area: "Pancoran Mas",
    address: "Jl. Bunga Melati No. 21, Pancoran Mas, Depok",
    beds: 1,
    baths: 1,
    size: 14,
    furnished: true,
    available: true,
    rating: 4.5,
    reviews: 89,
    image: u("photo-1554995207-c18c203602cb"),
    gallery: [
      u("photo-1554995207-c18c203602cb"),
      u("photo-1595526114035-0d45ed16cfbf"),
      u("photo-1600566753086-00f18fb6b3ea"),
      u("photo-1493809842364-78817add7ffb"),
    ],
    short: "Kos khusus putri di zona kost mahasiswa, 10 menit ke Universitas Indonesia dan Stasiun Commuter.",
    description:
      "Kos khusus putri yang bersih, aman, dan tenang — 10 menit dari UI Depok dan stasiun commuter. Setiap kamar memiliki kasur, meja belajar, lemari, dan kamar mandi dalam. Tersedia dapur bersama, area parkir motor, dan CCTV di seluruh area.",
    facilities: ["AC", "Kamar mandi dalam", "Wi-Fi", "Dapur bersama", "CCTV", "Parkir motor", "Kasur & lemari"],
    includes: ["Listrik", "Wi-Fi", "Air"],
    tags: ["mahasiswi", "putri", "dekat-kampus"],
  },
  {
    slug: "kontrakan-pondok-gede-bekasi",
    name: "Kontrakan Pondok Hijau",
    type: "kontrakan",
    typeLabel: "Kontrakan",
    price: 2300000,
    city: "Bekasi",
    area: "Pondok Gede",
    address: "Jl. Pondok Hijau Permai No. 3, Pondok Gede, Bekasi",
    beds: 2,
    baths: 1,
    size: 45,
    furnished: false,
    available: false,
    rating: 4.4,
    reviews: 27,
    image: u("photo-1600607687939-ce8a6c25118c"),
    gallery: [
      u("photo-1600607687939-ce8a6c25118c"),
      u("photo-1493809842364-78817add7ffb"),
      u("photo-1484154218962-a197022b5858"),
      u("photo-1600585154340-be6161a56a0c"),
    ],
    short: "Rumah kontrakan 2KT dengan dapur renovasi dan akses mudah ke Tol JORR.",
    description:
      "Kontrakan sederhana namun terawat dengan dapur baru, keramik baru, dan cat ulang menyeluruh. Lokasi strategis dekat pintu tol JORR, pasar, dan sekolah. Cocok untuk keluarga baru yang menginginkan biaya terjangkau.",
    facilities: ["2 kamar tidur", "Kamar mandi", "Dapur baru", "Ruang tamu", "Parkir motor", "Air pam", "Listrik 1300 VA"],
    includes: ["Air (PAM)", "Sampah"],
    tags: ["ekonomis", "dekat-tol", "keluarga"],
  },
  {
    slug: "apartemen-the-residence-pik",
    name: "Studio Cozy The Residences @ Pantai Indah Kapuk",
    type: "apartemen",
    typeLabel: "Apartemen",
    price: 5200000,
    city: "Jakarta Utara",
    area: "Pantai Indah Kapuk",
    address: "The Residences, Jl. Pantai Indah Utara 2, Jakarta Utara",
    beds: 1,
    baths: 1,
    size: 32,
    furnished: true,
    available: true,
    rating: 4.7,
    reviews: 156,
    image: u("photo-1522708323590-d24dbb6b0267"),
    gallery: [
      u("photo-1522708323590-d24dbb6b0267"),
      u("photo-1560448204-e02f11c3d0e2"),
      u("photo-1505693416388-ac5ce068fe85"),
      u("photo-1600566753086-00f18fb6b3ea"),
    ],
    short: "Studio modern sepenuhnya furnished di kawasan premium PIK, dekat ritel dan kuliner ikonik.",
    description:
      "Studio compact yang dioptimalkan dengan furnitur pintar dan storage maksimal. Terletak di kawasan premium Pantai Indah Kapuk dengan akses ke beach walk, pusat kuliner, dan pusat perbelanjaan. Menawarkan gaya hidup urban yang lengkap dalam satu tempat.",
    facilities: ["Furniture pintar", "AC", "Wi-Fi", "Gym", "Kolam renang", "Parkir", "CCTV", "Laundry room"],
    includes: ["Listrik", "Wi-Fi", "Air", "IPL"],
    tags: ["single", "ekspat", "meeting-place"],
  },
  {
    slug: "kos-eksklusif-dago-bandung",
    name: "Kos Eksklusif Teras Dago",
    type: "kos",
    typeLabel: "Kos Eksklusif",
    price: 2500000,
    city: "Bandung",
    area: "Dago",
    address: "Jl. Ir. H. Juanda No. 140, Dago, Bandung",
    beds: 1,
    baths: 1,
    size: 22,
    furnished: true,
    available: true,
    rating: 4.9,
    reviews: 76,
    image: u("photo-1595526114035-0d45ed16cfbf"),
    gallery: [
      u("photo-1595526114035-0d45ed16cfbf"),
      u("photo-1600210492486-724fe5c67fb0"),
      u("photo-1505693416388-ac5ce068fe85"),
      u("photo-1600566753086-00f18fb6b3ea"),
    ],
    short: "Kos eksklusif dengan balkon pemandangan kota Bandung, dekat kampus ITB dan area kuliner Dago.",
    description:
      "Kos premium dengan desain industrial yang hangat, setiap kamar memiliki balkon pribadi dan pemandangan kota. Dilengkapi kasur spring bed, meja kerja, AC, dan smart lock. Area lounge bersama di rooftop untuk bersosialisasi.",
    facilities: ["Balkon pribadi", "AC", "Smart lock", "Wi-Fi", "Rooftop lounge", "Pantry", "Laundry", "Keamanan"],
    includes: ["Listrik", "Air", "Wi-Fi", "Kebersihan harian"],
    tags: ["premium", "dekat-kampus", "view"],
  },
  {
    slug: "apartemen-sutomo-surabaya",
    name: "Tower 1BR Apartemen Sutomo",
    type: "apartemen",
    typeLabel: "Apartemen",
    price: 3900000,
    city: "Surabaya",
    area: "Gubeng",
    address: "Apartemen Sutomo Tower A, Jl. Gubernur Suryo, Surabaya",
    beds: 1,
    baths: 1,
    size: 38,
    furnished: true,
    available: true,
    rating: 4.6,
    reviews: 63,
    image: u("photo-1560448204-e02f11c3d0e2"),
    gallery: [
      u("photo-1560448204-e02f11c3d0e2"),
      u("photo-1522708323590-d24dbb6b0267"),
      u("photo-1512918728675-ed5a9ecdebfd"),
      u("photo-1600210492486-724fe5c67fb0"),
    ],
    short: "Unit 1BR berada di jantung bisnis Surabaya, view laut, strategis dekat gedung perkantoran.",
    description:
      "Apartemen 1 kamar tidur di lokasi super prime Surabaya Pusat dengan pemandangan selat Madura. Dilengkapi furniture lengkap, kitchen set, AC, dan water heater. Fasilitas kompleks mencakup kolam renang, gym, dan minimarket.",
    facilities: ["Furniture lengkap", "Kitchen set", "AC", "Water heater", "Kolam renang", "Gym", "Minimarket", "Security"],
    includes: ["Listrik", "Air", "Wi-Fi", "IPL"],
    tags: ["bisnis", "view-laut", "pusat-kota"],
  },
];

export const testimonials = [
  {
    name: "Rizky Maulana",
    role: "Data Analyst, tinggal di Kos Cipete",
    quote:
      "Prosesnya cepat dan semua info akurat sesuai foto. Kamar bersih, Wi-Fi stabil, dan pengelola responsif. Sudah setahun betah tinggal di sini.",
    image: "photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Dewi Anggraini",
    role: "Mahasiswi, tinggal di Kos Depok",
    quote:
      "Awalnya cari kos dekat kampus, ternyata dapat yang jauh lebih nyaman. Lingkungan aman, biaya listrik transparent, tidak ada biaya tersembunyi.",
    image: "photo-1494790108377-be9c29b29330",
  },
  {
    name: "Budi Santoso",
    role: "Kepala Keluarga, kontrakan di Bekasi",
    quote:
      "Survey online-nya super membantu. Keluarga saya tinggal langsung tanpa perlu datang berkali-kali. Kontrak jelas dan tidak rumit.",
    image: "photo-1500648767791-00dcc994a43e",
  },
];

export const faqs = [
  {
    q: "Bagaimana proses survei dan booking kamar?",
    a: "Anda bisa mengajukan jadwal survei daring atau langsung kunjungi lokasi. Setelah pilih unit, amankan booking via formulir kontak, lalu deposit 1 bulan untuk mengunci unit maksimal 7 hari.",
  },
  {
    q: "Apakah harga sudah termasuk listrik dan air?",
    a: "Sebagian unit sudah include listrik, air, dan Wi-Fi (tertulis di setiap detail properti). Untuk unit lain, biaya utilitas dihitung terpisah berdasarkan pemakaian meter.",
  },
  {
    q: "Bagaimana sistem pembayaran dan kontraknya?",
    a: "Pembayaran melalui transfer bank atau QRIS, dengan kontrak bulanan yang bisa diperpanjang. Kami menyediakan bukti kontrak digital yang sah dan tercatat.",
  },
  {
    q: "Apakah boleh membawa hewan peliharaan?",
    a: "Kebijakan berbeda per properti. Sebagian unit menerima kucing kecil dengan biaya tambahan deposit. Silakan cek detail atau hubungi pengelola.",
  },
  {
    q: "Apa yang terjadi jika saya pindah sebelum kontrak selesai?",
    a: "Jika memberitahukan minimal 30 hari sebelumnya, deposit akan dikembalikan penuh setelah unit diperiksa. Ketentuan lengkap dijelaskan saat penandatanganan kontrak.",
  },
];

export const stats = [
  { value: "850+", label: "Penghuni aktif" },
  { value: "40+", label: "Properti terkelola" },
  { value: "6", label: "Kota jangkauan" },
  { value: "4.8/5", label: "Rating agregat" },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export const cities = [
  "Jakarta Selatan",
  "Jakarta Utara",
  "Depok",
  "Bekasi",
  "Bandung",
  "Surabaya",
] as const;

export interface ListingFilters {
  tipe?: string;
  kota?: string;
  maks?: string;
}

export function filterProperties(f: ListingFilters): Property[] {
  return properties.filter((p) => {
    if (f.tipe && p.type !== f.tipe) return false;
    if (f.kota && p.city !== f.kota) return false;
    if (f.maks && p.price > Number(f.maks)) return false;
    return true;
  });
}

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);