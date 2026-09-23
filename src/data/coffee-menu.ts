export interface MenuItem {
  id: string;
  name: string;
  category: 'makanan' | 'kopi' | 'minuman';
  price: number;
  description: string;
  badge?: string;
  badgeColor?: string; // 'yellow' | 'red' | 'green'
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Semua Menu' },
  { id: 'makanan', label: '🍜 Makanan & Gorengan' },
  { id: 'kopi', label: '☕ Kopi Mantap' },
  { id: 'minuman', label: '🥤 Es & Minuman Segar' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // MAKANAN & CEMILAN WARKOP
  {
    id: 'm-1',
    name: 'Indomie Telur Kornet (Internet)',
    category: 'makanan',
    price: 18000,
    description: 'Comfort food sejuta umat. Dibuat dengan tingkat kematangan mie yang pas, telur setengah matang, dan kornet gurih tumis.',
    badge: 'BEST SELLER',
    badgeColor: 'red',
    popular: true,
  },
  {
    id: 'm-2',
    name: 'Mendoan Anget Sambal Kecap',
    category: 'makanan',
    price: 12000,
    description: 'Digoreng dadakan panas-panas, daun bawang melimpah, lengkap sama cocolan sambal kecap rawit pedas manis.',
    badge: 'GORENGAN DADAKAN',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'm-3',
    name: 'Roti Bakar Coklat Keju',
    category: 'makanan',
    price: 15000,
    description: 'Cemilan wajib buat sharing bareng temen satu meja. Roti garing empuk bertabur meses cokelat dan parutan keju melimpah.',
    badge: 'FAVORIT TONGKRONGAN',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'm-4',
    name: 'Pisang Goreng Keju Susu',
    category: 'makanan',
    price: 15000,
    description: 'Pisang manis renyah dibalut tepung krispi, disiram kental manis dan parutan keju cheddar gurih.',
    badge: 'PAKET HEMAT',
    badgeColor: 'green',
    popular: false,
  },
  {
    id: 'm-5',
    name: 'Kentang Goreng Saus Sambal',
    category: 'makanan',
    price: 15000,
    description: 'Porsi pas buat ngemil sambil laptopan atau push rank game bareng squad.',
    popular: false,
  },
  {
    id: 'm-6',
    name: 'Indomie Goreng Jumbo Polos',
    category: 'makanan',
    price: 12000,
    description: 'Porsi dobel buat yang lapar berat di tengah malam. Taburan bawang goreng krispi melimpah.',
    badge: 'PAKET AKHIR BULAN',
    badgeColor: 'red',
    popular: false,
  },

  // KOPI MANTAP
  {
    id: 'k-1',
    name: 'Es Kopi Susu Sentosa',
    category: 'kopi',
    price: 20000,
    description: 'Kopi susu gula aren yang creamy dan kopinya tetap nendang. Manisnya pas, gak bikin eneg, bikin melek nugas.',
    badge: 'BEST SELLER',
    badgeColor: 'red',
    popular: true,
  },
  {
    id: 'k-2',
    name: 'Kopi Hitam Tubruk Mantap',
    category: 'kopi',
    price: 10000,
    description: 'Kopi hitam seduh tubruk tradisional dengan aroma bakar pekat. Teman ngobrol ngalor-ngidul sampai subuh.',
    badge: 'KLASIK WARKOP',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'k-3',
    name: 'Es Americano Segar',
    category: 'kopi',
    price: 14000,
    description: 'Double espresso disajikan dingin segar. Pahit bersih bikin fokus ngerjain tugas tanpa gula.',
    popular: false,
  },
  {
    id: 'k-4',
    name: 'Kopi Susu Karamel Dingin',
    category: 'kopi',
    price: 22000,
    description: 'Kopi susu manis dengan lumuran sirup karamel legit di dinding gelas.',
    badge: 'FAVORIT',
    badgeColor: 'yellow',
    popular: false,
  },

  // MINUMAN SEGAR LAINNYA
  {
    id: 'd-1',
    name: 'Es Teh Manis Jumbo',
    category: 'minuman',
    price: 8000,
    description: 'Gelas ukuran jumbo 500ml teh melati segar manis dingin. Penyelamat dahaga nomor satu paling ramah dompet.',
    badge: 'JUARA HAUS',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'd-2',
    name: 'Es Nutrisari Jeruk Peras',
    category: 'minuman',
    price: 8000,
    description: 'Minuman andalan warkop legendaris. Dingin, asam manis segar mengembalikan tenaga.',
    popular: false,
  },
  {
    id: 'd-3',
    name: 'Es Cokelat Susu Kental',
    category: 'minuman',
    price: 15000,
    description: 'Cokelat manis kental diseduh susu segar dingin. Pas buat yang lagi gak pengen ngopi.',
    popular: false,
  },
  {
    id: 'd-4',
    name: 'Es Lemon Tea Segar',
    category: 'minuman',
    price: 12000,
    description: 'Perasan jeruk lemon dipadu teh hitam dingin segar beres ngemil gorengan.',
    popular: false,
  },
];

export interface GoogleReview {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  timeAgo: string;
}

export const REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    name: 'Budi',
    role: 'Mahasiswa',
    comment: 'Pewe banget buat nugas akhir pekan. Es kopi susunya murah tapi rasanya nggak murahan. Colokan juga banyak di mana-mana.',
    rating: 5,
    timeAgo: '2 hari lalu',
  },
  {
    id: 'rev-2',
    name: 'Dimas',
    role: 'Karyawan',
    comment: 'Sering mabar Mobile Legends di sini karena WiFi-nya kencang dan stabil. Parkiran motornya juga lumayan luas dan aman.',
    rating: 5,
    timeAgo: '1 minggu lalu',
  },
  {
    id: 'rev-3',
    name: 'Siti',
    role: 'Mahasiswi',
    comment: 'Mendoan anget sama Indomie telor kornetnya juara! Harganya ramah banget di kantong, pelayanannya cepat dan mas-masnya ramah.',
    rating: 5,
    timeAgo: '3 hari lalu',
  },
  {
    id: 'rev-4',
    name: 'Rian',
    role: 'Freelancer',
    comment: 'Tempat nongkrong andalan kalau lagi suntuk di kosan. Bukanya sampai malam, suasananya asik buat ngobrol santai tanpa berisik norak.',
    rating: 5,
    timeAgo: 'Kemarin',
  },
];

export const CAFE_INFO = {
  name: 'Warkop Sentosa',
  kicker: 'Tempat Nongkrong Asik di Senopati',
  tagline: 'Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi.',
  subheading: 'Tempat pelarian paling pas buat nugas, mabar, atau sekadar ngobrol ngalor-ngidul sama teman. Harga merakyat, rasa tetap pejabat.',
  address: 'Jl. Senopati Raya No. 42 (Dekat Kampus & Kawasan Kantor), Jakarta Selatan',
  googleMapsUrl: 'https://maps.google.com/?q=Warkop+Sentosa+Senopati',
  phone: '+62 812-8990-2026',
  whatsappUrl: 'https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20mau%20tanya%20menu%20dan%20info%20tempat%20nongkrong',
  operatingHours: {
    weekdays: '09.00 - 01.00 WIB',
    weekends: '09.00 - 02.00 WIB',
  },
  instagram: '@warkopsentosa.id',
};
