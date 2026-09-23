export interface MenuItem {
  id: string;
  name: string;
  category: 'combo' | 'coffee' | 'non-coffee' | 'makanan';
  price: number;
  originalPrice?: number;
  description: string;
  notes?: string[];
  tag?: string;
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Semua Menu' },
  { id: 'combo', label: '🔥 Paket Combo Nugas' },
  { id: 'coffee', label: 'Kopi & Es Kopi' },
  { id: 'non-coffee', label: 'Non-Kopi & Segar' },
  { id: 'makanan', label: 'Makanan & Cemilan' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // PAKET COMBO HEMAT MAHASISWA & NUGAS
  {
    id: 'cb-1',
    name: 'Combo Nugas Santai (Kopi + Roti)',
    category: 'combo',
    price: 32000,
    originalPrice: 38000,
    description: '1x Es Kopi Susu Aren Sentosa + 1x Roti Bakar Cokelat Keju Susu. Pas banget buat nemenin nugas laptopan 3-4 jam.',
    notes: ['Es Kopi Susu', 'Roti Bakar Cokelat Keju', 'Hemat Rp6.000'],
    tag: 'Paling Laris',
    popular: true,
  },
  {
    id: 'cb-2',
    name: 'Combo Mabar Kenyang (Indomie + Minum)',
    category: 'combo',
    price: 30000,
    originalPrice: 36000,
    description: '1x Indomie Goreng Spesial Telur Kornet + 1x Es Teh Manis Jumbo / Lemon Tea Dingin. Kenyang maksimal pas push rank bareng squad.',
    notes: ['Indomie Telur Kornet', 'Es Lemon Tea Jumbo', 'Hemat Rp6.000'],
    tag: 'Favorit Mabar',
    popular: true,
  },
  {
    id: 'cb-3',
    name: 'Combo Begadang Skripsi (Kopi + Snack)',
    category: 'combo',
    price: 28000,
    originalPrice: 34000,
    description: '1x Americano Dingin / Kopi Tubruk Hitam Mantap + 1x Kentang Goreng Krispi Saus Keju. Booster fokus anti ngantuk sampai subuh.',
    notes: ['Kopi Double Shot', 'Kentang Krispi', 'Hemat Rp6.000'],
    tag: 'Anti Ngantuk',
    popular: true,
  },

  // KOPI & ES KOPI (Rp15.000 - Rp24.000)
  {
    id: 'c-1',
    name: 'Es Kopi Susu Aren Sentosa',
    category: 'coffee',
    price: 18000,
    description: 'Espresso blend mantap, susu segar gurih creamy, dan gula aren asli legit. Manisnya pas, gak bikin eneg.',
    notes: ['Creamy', 'Gula Aren Legit', 'Espresso Mantap'],
    tag: 'Best Seller',
    popular: true,
  },
  {
    id: 'c-2',
    name: 'Kopi Tubruk Robusta Gayo',
    category: 'coffee',
    price: 15000,
    description: 'Kopi hitam seduh tubruk tradisional dengan aroma bakar pekat dan rasa pahit gurih yang nagih. Teman setia obrolan malam.',
    notes: ['Bold Body', 'Wangi Bakar', 'Klasik Warkop'],
    tag: 'Khas Warkop',
    popular: true,
  },
  {
    id: 'c-3',
    name: 'Es Americano / Long Black Dingin',
    category: 'coffee',
    price: 16000,
    description: 'Double shot espresso diseduh segar di atas es batu kristal. Bersih, segar, dan bikin mata langsung melek buat nugas.',
    notes: ['Segar Dingin', 'Zero Sugar', 'Fokus Kerja'],
    popular: false,
  },
  {
    id: 'c-4',
    name: 'Kopi Susu Karamel Macchiato',
    category: 'coffee',
    price: 22000,
    description: 'Kopi susu dengan saus karamel leleh dan taburan biskuit lotus crumble renyah di atasnya.',
    notes: ['Caramel Drizzle', 'Crunchy Biscuit', 'Sweet Cream'],
    tag: 'Favorit Cewek',
    popular: true,
  },
  {
    id: 'c-5',
    name: 'Es Kopi Pandan Segar',
    category: 'coffee',
    price: 20000,
    description: 'Perpaduan kopi susu lembut dengan aroma wangi daun pandan alami. Wangi dan segar banget.',
    notes: ['Aroma Pandan', 'Creamy Lembut'],
    popular: false,
  },

  // NON-KOPI & SEGAR (Rp10.000 - Rp22.000)
  {
    id: 'nc-1',
    name: 'Es Teh Manis Melati Jumbo',
    category: 'non-coffee',
    price: 10000,
    description: 'Gelas ukuran besar 500ml teh melati tubruk wangi sepet manis dingin. Penyelamat dahaga nomor satu.',
    notes: ['Ukuran Jumbo', 'Wangi Melati', 'Dingin Segar'],
    tag: 'Juara Haus',
    popular: true,
  },
  {
    id: 'nc-2',
    name: 'Es Matcha Green Tea Latte',
    category: 'non-coffee',
    price: 22000,
    description: 'Matcha hijau harum dikocok susu segar dingin, rasanya creamy gurih manis dengan rasa matcha yang berasa banget.',
    notes: ['Matcha Asli', 'Creamy Gurih', 'Manis Pas'],
    tag: 'Favorit',
    popular: true,
  },
  {
    id: 'nc-3',
    name: 'Es Cokelat Klasik Kental',
    category: 'non-coffee',
    price: 20000,
    description: 'Cokelat bubuk pekat diseduh kental gurih dengan krimer dan susu manis. Cocok diminum dingin atau hangat saat hujan.',
    notes: ['Rich Chocolate', 'Kental Manis', 'Comfort Drink'],
    popular: false,
  },
  {
    id: 'nc-4',
    name: 'Es Lemon Tea Biji Selasih',
    category: 'non-coffee',
    price: 15000,
    description: 'Perasan jeruk lemon segar berpadu teh hitam pekat dan biji selasih renyah. Asam manis segar menyegarkan otak.',
    notes: ['Segar Asam Manis', 'Real Lemon Juice'],
    popular: false,
  },

  // MAKANAN & CEMILAN (Rp15.000 - Rp22.000)
  {
    id: 'sn-1',
    name: 'Indomie Goreng Spesial Telur Kornet',
    category: 'makanan',
    price: 20000,
    description: 'Indomie goreng double racikan warkop dengan topping telur mata sapi setengah matang, kornet tumis gurih, dan taburan bawang goreng krispi.',
    notes: ['Indomie Warkop', 'Telur Setengah Matang', 'Kornet Gurih'],
    tag: 'Wajib Pesan',
    popular: true,
  },
  {
    id: 'sn-2',
    name: 'Roti Bakar Cokelat Keju Susu',
    category: 'makanan',
    price: 18000,
    description: 'Roti tawar tebal dibakar garing di luar lembut di dalam, taburan meses cokelat melimpah, parutan keju cheddar, dan kental manis.',
    notes: ['Renyah Garing', 'Keju Melimpah', 'Cokelat Meleleh'],
    tag: 'Teman Kopi',
    popular: true,
  },
  {
    id: 'sn-3',
    name: 'Pisang Goreng Crispy Cokelat Keju',
    category: 'makanan',
    price: 18000,
    description: 'Pisang raja manis berbalut tepung krispi keemasan, disajikan hangat dengan taburan keju parut gurih dan saus cokelat.',
    notes: ['Super Crispy', 'Pisang Raja Legit', 'Keju Cokelat'],
    popular: false,
  },
  {
    id: 'sn-4',
    name: 'Kentang Goreng Saus Keju & Chili',
    category: 'makanan',
    price: 18000,
    description: 'Kentang goreng crinkle cut renyah gurih disajikan dengan cocolan saus keju cheddar creamy dan saus sambal.',
    notes: ['Renyah Gurih', 'Saus Keju Creamy'],
    popular: false,
  },
  {
    id: 'sn-5',
    name: 'Cireng Crispy Bumbu Rujak Pedas',
    category: 'makanan',
    price: 15000,
    description: '10 pcs cireng kenyal gurih kulit krispi hangat, cocolan bumbu rujak gula merah pedas manis nagih.',
    notes: ['Kenyal Crispy', 'Saus Rujak Pedas'],
    popular: false,
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarInitials: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: 'wifi' | 'plug' | 'game' | 'coffee' | 'clock' | 'couch';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Fikri Haikal',
    role: 'Mahasiswa Tingkat Akhir / Pejuang Skripsi',
    comment: 'Tempat andalan buat begadang ngerjain bab 4. WiFi-nya beneran kencang 150 Mbps gak ngadat buat download jurnal, colokan ada di tiap meja, dan harga kopinya ramah banget di kantong anak kos!',
    rating: 5,
    avatarInitials: 'FH',
  },
  {
    id: 'test-2',
    name: 'Nadia Salsabila',
    role: 'Fresh Graduate / Jobseeker',
    comment: 'Paling suka area lesehan sama beanbag-nya! Suasananya adem dan gak berisik norak. Kalau suntuk bisa main Uno atau kartu bareng temen. Es Kopi Susu sama Roti Bakarnya juara!',
    rating: 5,
    avatarInitials: 'NS',
  },
  {
    id: 'test-3',
    name: 'Bagus Wicaksono',
    role: 'Freelance Graphic Designer & Gamer',
    comment: 'Langganan mabar ML sama anak-anak tiap weekend. Ping-nya stabil hijau terus, parkir motor luas gratis, Indomie telor kornetnya porsi kenyang. Best warkop modern!',
    rating: 5,
    avatarInitials: 'BW',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'am-plug',
    title: 'Colokan di Setiap Meja & Lesehan',
    description: 'Gak perlu drama rebutan colokan laptop atau HP. Setiap meja, kursi, dan area lesehan dilengkapi stop kontak ganda aman.',
    badge: 'Wajib Nugas',
    iconName: 'plug',
  },
  {
    id: 'am-wifi',
    title: 'WiFi Ngebut 150 Mbps Tanpa FUP',
    description: 'Koneksi internet dedicated fiber optic anti lelet. Lancar jaya buat Zoom meeting kuliah, upload file tugas, dan push rank game tanpa lag.',
    badge: 'Anti Lemot',
    iconName: 'wifi',
  },
  {
    id: 'am-couch',
    title: 'Area Lesehan Santai & Meja Kerja Ergonomis',
    description: 'Pilih tempat duduk sesuai kenyamananmu: meja kursi standar kerja tegak atau area karpet lesehan empuk buat selonjoran santai.',
    badge: 'Paling Cozy',
    iconName: 'couch',
  },
  {
    id: 'am-game',
    title: 'Free Board Games (Uno, Domino, Werewolf)',
    description: 'Bosan nugas? Pinjam aneka board games dan kartu seru secara gratis di kasir untuk seru-seruan bareng teman tongkrongan.',
    badge: 'Anti Bosan',
    iconName: 'game',
  },
  {
    id: 'am-hours',
    title: 'Buka Panjang Sampai Dini Hari (02.00)',
    description: 'Buka setiap hari mulai jam 09.00 pagi sampai 02.00 subuh. Pilihan terbaik buat yang suka ide cemerlang di waktu malam.',
    badge: 'Nongkrong Malam',
    iconName: 'clock',
  },
  {
    id: 'am-coffee',
    title: 'Harga Bersahabat Mulai Rp10.000',
    description: 'Kualitas rasa kafe modern dengan harga warkop mahasiswa. Plus diskon tambahan 10% setiap hari cukup tunjukkan KTM aktifmu!',
    badge: 'Diskon KTM 10%',
    iconName: 'coffee',
  },
];

export const CAFE_INFO = {
  name: 'Warkop Sentosa',
  tagline: 'Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi',
  subheading: 'Tempat pelarian paling nyaman buat nugas, mabar, dan ngobrol santai bareng teman. Harga ramah kantong mahasiswa, colokan melimpah, dan suasana yang bikin betah.',
  address: 'Jl. Senopati Raya No. 42 (Dekat Kampus & Perkantoran), Jakarta Selatan',
  googleMapsUrl: 'https://maps.google.com/?q=Warkop+Sentosa+Senopati',
  phone: '+62 812-8990-2026',
  whatsappUrl: 'https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20mau%20tanya%20menu%20dan%20booking%20meja%20nugas',
  operatingHours: {
    weekdays: '09.00 - 02.00 WIB',
    weekends: '08.30 - 02.30 WIB',
  },
  promoStudent: 'Diskon 10% Semua Menu dengan Menunjukkan Kartu Tanda Mahasiswa / Pelajar (KTM)',
  instagram: '@warkopsentosa.id',
  tiktok: '@warkopsentosa',
};
