export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'non-coffee' | 'snacks';
  price: number;
  description: string;
  notes?: string[];
  tag?: string;
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Semua Menu' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'snacks', label: 'Snacks & Food' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c-1',
    name: 'Kopi Susu Aren Bakar',
    category: 'coffee',
    price: 24000,
    description: 'Espresso ganda house blend Nusantara, susu segar lembut, dan karamelisasi gula aren torched hangat.',
    notes: ['Smoky Caramel', 'Bold Body', 'Creamy'],
    tag: 'Best Seller',
    popular: true,
  },
  {
    id: 'c-2',
    name: 'Aceh Gayo Wine Process (V60)',
    category: 'coffee',
    price: 32000,
    description: 'Biji kopi arabika Takengon fermentasi anaerobik alami, aroma anggur matang dengan aftertaste berry manis.',
    notes: ['Red Winey', 'Dark Berry', 'Sweet Honey Finish'],
    tag: 'Specialty',
    popular: true,
  },
  {
    id: 'c-3',
    name: 'Cold Brew Pandan Wangi',
    category: 'coffee',
    price: 28000,
    description: 'Ekstraksi dingin 18 jam disempurnakan sirup pandan suji alami dan sentuhan kelapa gurih.',
    notes: ['Aromatic Pandan', 'Velvety Sweet', 'Crisp Cold'],
    tag: 'Signature',
    popular: true,
  },
  {
    id: 'c-4',
    name: 'Magic Flat White',
    category: 'coffee',
    price: 27000,
    description: 'Double ristretto dengan susu textured velvet bersuhu ideal untuk rasa kopi yang intens dan halus.',
    notes: ['Toffee Butter', 'Hazelnut Cream'],
    tag: 'Barista Pick',
    popular: false,
  },
  {
    id: 'c-5',
    name: 'Americano On The Rocks',
    category: 'coffee',
    price: 22000,
    description: 'Double shot espresso disajikan di atas es batu jernih, clean body dengan aftertaste cokelat murni.',
    notes: ['Clean Roast', 'Subtle Cocoa Nib'],
    popular: false,
  },

  // NON-COFFEE
  {
    id: 'nc-1',
    name: 'Artisan Uji Matcha Latte',
    category: 'non-coffee',
    price: 29000,
    description: 'Matcha grade seremonial Jepang yang dikocok tradisional dengan susu segar dan sedikit madu hutan murni.',
    notes: ['Earthy Umami', 'Silky Sweet', 'Vibrant Green'],
    tag: 'Favorite',
    popular: true,
  },
  {
    id: 'nc-2',
    name: 'Sunset Senja Mocktail',
    category: 'non-coffee',
    price: 28000,
    description: 'Sari buah markisa segar, soda botani berkarbonasi lembut, cascara berry, dan rosemary bakar wangi.',
    notes: ['Passion Fruit', 'Refreshing Fizz', 'Herbal Citrus'],
    tag: 'Signature',
    popular: true,
  },
  {
    id: 'nc-3',
    name: 'Cokelat Klasik Jawa',
    category: 'non-coffee',
    price: 26000,
    description: 'Cokelat hitam 70% single origin Jawa Barat diseduh dengan susu steam kental, kaya dan tidak terlalu manis.',
    notes: ['Dark Cacao', 'Malty Cream', 'Comforting'],
    popular: false,
  },
  {
    id: 'nc-4',
    name: 'Earl Grey Cascara Fizz',
    category: 'non-coffee',
    price: 27000,
    description: 'Seduhan teh bergamot dingin dipadukan sirup cascara organik dan perasan lemon segar berkarbonasi.',
    notes: ['Bergamot Citrus', 'Tannic Sweet', 'Effervescent'],
    popular: false,
  },

  // SNACKS
  {
    id: 'sn-1',
    name: 'Roti Bakar Srikaya Butter Batang',
    category: 'snacks',
    price: 22000,
    description: 'Roti gandum tebal panggang arang, selai srikaya pontianak buatan rumah, dan potongan cold butter gurih.',
    notes: ['Crispy Crust', 'Sweet Pandan-Egg Jam', 'Salted Butter'],
    tag: 'Warkop Classic',
    popular: true,
  },
  {
    id: 'sn-2',
    name: 'Pisang Goreng Wijen Madu',
    category: 'snacks',
    price: 20000,
    description: 'Pisang raja tua digoreng renyah berbalut wijen sangrai, disajikan dengan cocolan madu hutan & gula palem.',
    notes: ['Crunchy Batter', 'Sweet Honey Glaze'],
    tag: 'Must Try',
    popular: true,
  },
  {
    id: 'sn-3',
    name: 'Kentang Truffle Parmesan',
    category: 'snacks',
    price: 26000,
    description: 'Potongan kentang goreng krispi dengan baluran minyak truffle wangi, taburan keju parmesan, dan peterseli.',
    notes: ['Earthy Truffle', 'Savory Umami'],
    popular: false,
  },
  {
    id: 'sn-4',
    name: 'Cireng Crispy Bumbu Rujak',
    category: 'snacks',
    price: 18000,
    description: 'Cireng renyah di luar kenyal lembut di dalam, disajikan hangat dengan cocolan saus rujak pedas manis asam segar.',
    notes: ['Crispy Chewy', 'Spicy Sweet Dip'],
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
  iconName: 'wifi' | 'plug' | 'music' | 'coffee' | 'clock' | 'sparkles';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rendra Wijaya',
    role: 'Q-Grader & Coffee Roaster',
    comment: 'Warkop Sentosa mendefinisikan ulang makna warkop lokal. Kopi V60 Gayo Wine-nya diekstraksi sangat presisi, notes red berry-nya sangat menonjol.',
    rating: 5,
    avatarInitials: 'RW',
  },
  {
    id: 'test-2',
    name: 'Clarissa Putri',
    role: 'Product Designer / WFC Nomad',
    comment: 'Suasana dark mode-nya sangat nyaman di mata, playlist musik lofi-nya pas, WiFi kencang 100+ Mbps, dan colokan tersedia di setiap meja.',
    rating: 5,
    avatarInitials: 'CP',
  },
  {
    id: 'test-3',
    name: 'Dimas Ardiansyah',
    role: 'Software Engineer',
    comment: 'Buka sampai tengah malam, barista super ramah dan paham karakter bean. Pisang goreng wijen madu dengan Americano dingin adalah kombinasi terbaik.',
    rating: 5,
    avatarInitials: 'DA',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'am-1',
    title: 'WiFi Gigabit 150 Mbps',
    description: 'Koneksi ultra stabil dedicated fiber optic untuk remote worker, meeting online, dan streaming tanpa hambatan.',
    iconName: 'wifi',
  },
  {
    id: 'am-2',
    title: 'Colokan & Fast Charging di Tiap Meja',
    description: 'Tidak perlu berebut colokan. Setiap tempat duduk dilengkapi soket listrik universal dan port Type-C.',
    iconName: 'plug',
  },
  {
    id: 'am-3',
    title: 'Slow Bar & Manual Brew Experience',
    description: 'Duduk berhadapan langsung dengan barista kami, berdiskusi tentang asal usul biji kopi dan teknik ekstraksi.',
    iconName: 'coffee',
  },
  {
    id: 'am-4',
    title: 'Vinyl Lounge & Curated Sound',
    description: 'Sistem tata suara analog hangat dengan pilihan piringan hitam jazz, lofi, dan indierock yang menenangkan.',
    iconName: 'music',
  },
  {
    id: 'am-5',
    title: 'Jam Operasional Panjang',
    description: 'Buka setiap hari mulai 08.00 pagi hingga 24.00 malam. Tempat terbaik untuk ngopi pagi maupun ngobrol larut malam.',
    iconName: 'clock',
  },
  {
    id: 'am-6',
    title: 'Biji Sangrai Segar Mingguan',
    description: 'Semua kopi disangrai segar setiap minggu secara in-house untuk memastikan aroma dan kesegaran rasa optimal.',
    iconName: 'sparkles',
  },
];

export const CAFE_INFO = {
  name: 'Warkop Sentosa',
  tagline: 'Kultur Kopi Otentik, Racikan Masa Kini',
  subheading: 'Menggabungkan kehangatan warkop tradisional Indonesia dengan presisi kopi specialty standar dunia. Ruang temaram estetik untuk bekerja, bercengkerama, dan menikmati secangkir kopi sempurna.',
  address: 'Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12190',
  googleMapsUrl: 'https://maps.google.com/?q=Warkop+Sentosa+Senopati',
  phone: '+62 812-8990-2026',
  whatsappUrl: 'https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20saya%20ingin%20tanya%20menu%20dan%20reservasi%20meja',
  operatingHours: {
    weekdays: '08.00 - 24.00 WIB',
    weekends: '07.30 - 01.00 WIB',
  },
  instagram: '@warkopsentosa.id',
};
