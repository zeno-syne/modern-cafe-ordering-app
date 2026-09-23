export interface MenuItem {
  id: string;
  name: string;
  category: 'reserve' | 'coffee' | 'non-coffee' | 'snacks';
  price: number;
  description: string;
  notes?: string[];
  tag?: string;
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Semua Menu' },
  { id: 'reserve', label: 'Reserve & Experiential' },
  { id: 'coffee', label: 'Specialty Coffee' },
  { id: 'non-coffee', label: 'Artisan Non-Coffee' },
  { id: 'snacks', label: 'Gourmet Bites' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // RESERVE & EXPERIENTIAL (Senopati Exclusive)
  {
    id: 'res-1',
    name: 'Gesha Village Ethiopia (Slow Bar Pour-Over)',
    category: 'reserve',
    price: 68000,
    description: 'Biji kopi lelang langka diseduh tableside di depan Anda dengan dripper Orea V3. Menghadirkan wangi melati, peach manis, dan keasaman bergamot yang sangat jernih.',
    notes: ['Jasmine Floral', 'White Peach', 'Bergamot Citrus', 'Tableside Brew'],
    tag: 'Competition Grade',
    popular: true,
  },
  {
    id: 'res-2',
    name: 'Smoked Hickory Barrel Cold Brew Float',
    category: 'reserve',
    price: 58000,
    description: 'Cold brew 24 jam beraroma kayu ek bourbon, disajikan dengan kepulan asap kayu hickory di dalam cloche kaca dan scoop gelato vanilla Madagascar artisan.',
    notes: ['Bourbon Oak', 'Hickory Smoke', 'Madagascar Vanilla', 'Velvety'],
    tag: 'Sensory Experience',
    popular: true,
  },
  {
    id: 'res-3',
    name: 'Sentosa Coffee Omakase Flight (3 Courses)',
    category: 'reserve',
    price: 78000,
    description: 'Tiga tahap eksplorasi rasa dalam satu baki kayu jati: (1) Single Origin Ristretto, (2) Velvet Cortado, dan (3) Sparkling Cascara Palate Cleanser.',
    notes: ['Ristretto Intenso', 'Velvet Cortado', 'Sparkling Cascara'],
    tag: 'Signature Tasting',
    popular: false,
  },

  // SPECIALTY COFFEE
  {
    id: 'c-1',
    name: 'Kopi Susu Aren Bakar Sentosa',
    category: 'coffee',
    price: 38000,
    description: 'Double ristretto espresso house blend Nusantara, fresh milk Hokkaido style, dan sirup aren nira murni dengan teknik karamelisasi torched flame.',
    notes: ['Torched Brulee', 'Bold Roasted Hazelnut', 'Silky Body'],
    tag: 'Best Seller',
    popular: true,
  },
  {
    id: 'c-2',
    name: 'Aceh Gayo Anaerobic Wine Process (V60)',
    category: 'coffee',
    price: 45000,
    description: 'Arabika Takengon fermentasi tertutup 45 hari. Menghasilkan karakter rasa red wine yang tebal, aroma kismis hitam, dan aftertaste madu liar.',
    notes: ['Red Winey Body', 'Blackcurrant', 'Wild Honey Finish'],
    tag: 'Specialty Pick',
    popular: true,
  },
  {
    id: 'c-3',
    name: 'Cold Brew Pandan Wangi & Santan Foam',
    category: 'coffee',
    price: 42000,
    description: 'Ekstraksi dingin 18 jam dipadukan dengan ekstrak pandan suji asli dan mahkota sea-salt coconut cloud foam yang gurih lembut.',
    notes: ['Pandan Aromatic', 'Sea Salt Foam', 'Crisp Clean'],
    tag: 'House Signature',
    popular: true,
  },
  {
    id: 'c-4',
    name: 'Magic Flat White Senopati',
    category: 'coffee',
    price: 42000,
    description: 'Rasio klasik Melbourne: double ristretto pekat dipadu 130ml susu bertekstur mikro-foam bersuhu 60°C untuk kelembutan rasa kopi maksimal.',
    notes: ['Toffee Cream', 'Dark Chocolate Truffle'],
    tag: 'Barista Favorite',
    popular: false,
  },
  {
    id: 'c-5',
    name: 'Americano On Hand-Carved Ice',
    category: 'coffee',
    price: 36000,
    description: 'Double espresso single origin Flores Bajawa disajikan di atas crystal clear ice block yang dipahat tangan, menjaga temperatur dingin tanpa mencair cepat.',
    notes: ['Clean Roast', 'Cacao Nibs', 'Zero Dilution'],
    popular: false,
  },

  // ARTISAN NON-COFFEE
  {
    id: 'nc-1',
    name: 'Artisan Uji Ceremonial Matcha Latte',
    category: 'non-coffee',
    price: 46000,
    description: 'Matcha grade seremonial pertama dari perkebunan Uji, Kyoto. Dikocok menggunakan chasen bambu tradisional dengan susu segar dan tetesan madu hutan.',
    notes: ['Umami Grassiness', 'Silky Sweetness', 'Vibrant Jade'],
    tag: 'Kyoto Import',
    popular: true,
  },
  {
    id: 'nc-2',
    name: 'Sunset Senja Botanical Mocktail',
    category: 'non-coffee',
    price: 46000,
    description: 'Markisa organik, perasan jeruk kalamansi segar, soda botani berkarbonasi halus, cascara berry mist, dan ranting rosemary bakar aromatik.',
    notes: ['Passion Fruit', 'Botanical Fizz', 'Charred Herb Aromatic'],
    tag: 'Cocktail Style',
    popular: true,
  },
  {
    id: 'nc-3',
    name: 'Cokelat Single Origin Jawa Barat 72%',
    category: 'non-coffee',
    price: 42000,
    description: 'Biji kakao murni fermentasi dari kebun Garut diseduh dengan susu steam kental gurih, minim gula untuk menonjolkan profil fruity alami.',
    notes: ['Deep Dark Cacao', 'Malty Cream', 'Nutty Undertone'],
    popular: false,
  },
  {
    id: 'nc-4',
    name: 'Earl Grey Cascara Cold Sparkler',
    category: 'non-coffee',
    price: 39000,
    description: 'Seduhan teh bergamot dingin berpadu sirup cascara organik, perasan lemon meyer, dan sematan edible gold dust.',
    notes: ['Bergamot Citrus', 'Tannic Honey', 'Sparkling Clean'],
    popular: false,
  },

  // GOURMET BITES & FOOD
  {
    id: 'sn-1',
    name: 'Roti Bakar Srikaya Butter Batang French Style',
    category: 'snacks',
    price: 38000,
    description: 'Roti brioche panggang arang wangi, selai srikaya telur bebek pandan buatan dapur sendiri, disajikan dengan batang butter Elle & Vire dingin.',
    notes: ['Crisp Brioche', 'Velvety Duck Egg Kaya', 'Cold French Butter'],
    tag: 'Warkop Elevate',
    popular: true,
  },
  {
    id: 'sn-2',
    name: 'Pisang Goreng Wijen Madu Hutan Sumbawa',
    category: 'snacks',
    price: 35000,
    description: 'Pisang raja tua pilihan berbalut adonan tepung beras renyah dan wijen sangrai hitam-putih, disiram madu murni Sumbawa dan garam laut Bali.',
    notes: ['Crunchy Crust', 'Wild Blossom Honey', 'Flaky Sea Salt'],
    tag: 'Signature Snack',
    popular: true,
  },
  {
    id: 'sn-3',
    name: 'Kentang Truffle Parmesan & Rosemary Aioli',
    category: 'snacks',
    price: 45000,
    description: 'Hand-cut potato fries renyah digoreng dua kali, dibalur Italian white truffle oil, parutan keju Grana Padano 16 bulan, dan cocolan saus aioli gurih.',
    notes: ['White Truffle Oil', 'Grana Padano', 'Herb Aioli'],
    tag: 'Chef Pick',
    popular: true,
  },
  {
    id: 'sn-4',
    name: 'Cireng Crispy Bumbu Rujak Kecombrang',
    category: 'snacks',
    price: 34000,
    description: 'Cireng tapioka kenyal lembut dengan kulit luar ekstra krispi, disajikan dengan cocolan saus rujak asam manis beraroma bunga kecombrang segar.',
    notes: ['Extra Crispy Crust', 'Aromatic Kecombrang', 'Sweet Chili Glaze'],
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
  iconName: 'wifi' | 'plug' | 'music' | 'coffee' | 'clock' | 'sparkles' | 'car' | 'door';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Adrian Pratama',
    role: 'Venture Partner & Tech Founder',
    comment: 'Tempat meeting paling nyaman di Senopati. VIP Room-nya privat dengan akustik sempurna, kopinya specialty grade sungguhan, dan yang terpenting ada complimentary valet parking.',
    rating: 5,
    avatarInitials: 'AP',
  },
  {
    id: 'test-2',
    name: 'Clarissa Putri',
    role: 'Creative Director / Tastemaker',
    comment: 'Suasana temaramnya sangat berkelas, pencahayaannya hangat dan flattering. Vinyl Lounge-nya memutar piringan hitam City Pop & Jazz yang jarang ditemukan di tempat lain.',
    rating: 5,
    avatarInitials: 'CP',
  },
  {
    id: 'test-3',
    name: 'Rendra Wijaya',
    role: 'Specialty Coffee Q-Grader',
    comment: 'Warkop Sentosa sukses mendefinisikan ulang konsep warkop. Gesha Pour-Over tableside dan Kopi Susu Aren Bakar-nya membuktikan komitmen serius pada cita rasa.',
    rating: 5,
    avatarInitials: 'RW',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'am-valet',
    title: 'Complimentary Valet Parking',
    description: 'Layanan parkir valet gratis dan aman tepat di depan lobi. Tidak perlu lagi membuang waktu mencari parkir di padatnya area Senopati.',
    iconName: 'car',
  },
  {
    id: 'am-vip',
    title: 'VIP Private & Listening Room',
    description: 'Ruang tertutup ber-AC untuk rapat bisnis, podcast, atau kumpul eksklusif. Dilengkapi turntable privat, smart display 4K, dan layanan pelayan pribadi.',
    iconName: 'door',
  },
  {
    id: 'am-vinyl',
    title: 'Analog Vinyl Lounge & Sound System',
    description: 'Sistem audio tabung audiophile dengan kurasi piringan hitam original City Pop, Bossa Nova, dan Late-Night Jazz yang diputar setiap hari.',
    iconName: 'music',
  },
  {
    id: 'am-wifi',
    title: 'Dedicated Fiber Gigabit 200 Mbps',
    description: 'Jaringan internet bisnis ultra-stabil dengan backup multi-ISP untuk kelancaran video conference 4K dan upload file kerja skala besar.',
    iconName: 'wifi',
  },
  {
    id: 'am-plug',
    title: 'Universal Power & Type-C Fast Charge',
    description: 'Tersedia soket listrik universal dan port USB-PD fast-charging 65W di setiap sofa dan meja tanpa terkecuali.',
    iconName: 'plug',
  },
  {
    id: 'am-hours',
    title: 'Jam Operasional Hingga Dini Hari',
    description: 'Melayani Anda mulai pukul 08.00 pagi hingga 01.00 malam. Sanctuary terbaik untuk ngopi pagi sebelum kantor maupun obrolan larut malam.',
    iconName: 'clock',
  },
];

export const CAFE_INFO = {
  name: 'Warkop Sentosa',
  tagline: 'Warkop Vibe. Senopati Standard.',
  subheading: 'Mendefinisikan ulang warkop lokal dengan standar specialty coffee internasional. Ruang temaram estetik, vinyl lounge analog, sajian gourmet, dan layanan valet gratis di jantung Senopati.',
  address: 'Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12190',
  googleMapsUrl: 'https://maps.google.com/?q=Warkop+Sentosa+Senopati',
  phone: '+62 812-8990-2026',
  whatsappUrl: 'https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20saya%20ingin%20reservasi%20meja%20/%20VIP%20Room',
  operatingHours: {
    weekdays: '08.00 - 24.00 WIB',
    weekends: '08.00 - 01.00 WIB',
  },
  valetService: 'Complimentary Valet Parking Available (08.00 - Tutup)',
  instagram: '@warkopsentosa.id',
};
