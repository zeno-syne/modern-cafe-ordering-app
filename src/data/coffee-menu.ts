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
  { id: 'all', label: 'All Items' },
  { id: 'makanan', label: '🍜 Kitchen & Comfort Bites' },
  { id: 'kopi', label: '☕ Specialty Coffee' },
  { id: 'minuman', label: '🥤 Cold Brews & Refreshers' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // KITCHEN & COMFORT BITES
  {
    id: 'm-1',
    name: 'Signature Garlic Scallion Noodles',
    category: 'makanan',
    price: 18000,
    description: 'Springy egg noodles tossed in slow-braised savory beef, crisp garlic oil, fresh scallions, and a soft-poached egg.',
    badge: 'CHEF’S SPECIAL',
    badgeColor: 'red',
    popular: true,
  },
  {
    id: 'm-2',
    name: 'Crispy Artisan Tempeh Crisps',
    category: 'makanan',
    price: 12000,
    description: 'Hand-cut cultured soybean batons tossed with scallions and flash-fried in golden herbs, paired with sweet spiced sambal glaze.',
    badge: 'FRESHLY FRIED',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'm-3',
    name: 'Toasted Brioche with Belgian Cocoa & Aged Cheddar',
    category: 'makanan',
    price: 15000,
    description: 'Golden butter-crisped brioche stuffed with rich Belgian chocolate curls and generous grated savory cheddar.',
    badge: 'HOUSE FAVORITE',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'm-4',
    name: 'Caramelized Sweet Plantain Beignets',
    category: 'makanan',
    price: 15000,
    description: 'Tender caramelized banana fritters in a light crisp batter, finished with sweet condensed milk drizzle and sharp cheddar.',
    badge: 'SWEET TREAT',
    badgeColor: 'green',
    popular: false,
  },
  {
    id: 'm-5',
    name: 'Crispy Truffle & Herb Shoestring Fries',
    category: 'makanan',
    price: 15000,
    description: 'Double-cooked golden shoestring potatoes tossed in aromatic herbs and sea salt, served with zesty house garlic dip.',
    popular: false,
  },
  {
    id: 'm-6',
    name: 'Midnight Wok-Tossed Savory Noodles',
    category: 'makanan',
    price: 12000,
    description: 'Generous double portion of aromatic wok-tossed noodles with fried shallots, chili crunch, and house savory glaze.',
    badge: 'MIDNIGHT FUEL',
    badgeColor: 'red',
    popular: false,
  },

  // SPECIALTY COFFEE
  {
    id: 'k-1',
    name: 'Signature Palm Sugar Iced Latte',
    category: 'kopi',
    price: 20000,
    description: 'Double ristretto espresso shaken over crystal ice with fresh farm milk and organic smoky palm nectar. Velvety, bold, and balanced.',
    badge: 'BEST SELLER',
    badgeColor: 'red',
    popular: true,
  },
  {
    id: 'k-2',
    name: 'Single-Origin Java Dark Roast',
    category: 'kopi',
    price: 10000,
    description: 'Heritage coarse-ground volcanic highland roast brewed via slow immersion. Rich dark chocolate notes with deep earthy body.',
    badge: 'HERITAGE BREW',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'k-3',
    name: 'Iced Single-Origin Americano',
    category: 'kopi',
    price: 14000,
    description: 'Crisp double espresso poured over mountain crystal ice with filtered water. Bright citrus aroma with zero-sugar clarity.',
    popular: false,
  },
  {
    id: 'k-4',
    name: 'Sea Salt Caramel Cream Latte',
    category: 'kopi',
    price: 22000,
    description: 'Slow-poured espresso over creamy cold milk, topped with handcrafted golden caramel drizzle and mineral sea salt.',
    badge: 'TOP PICK',
    badgeColor: 'yellow',
    popular: false,
  },

  // COLD BREWS & REFRESHERS
  {
    id: 'd-1',
    name: 'Blossom Jasmine Chilled Tea (500ml)',
    category: 'minuman',
    price: 8000,
    description: 'Generous tumbler of slow-steeped fragrant jasmine blossom green tea poured over crushed crystal ice. Pure refreshment.',
    badge: 'SUMMER COOLER',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'd-2',
    name: 'Freshly Pressed Valencia Citrus Sparkler',
    category: 'minuman',
    price: 8000,
    description: 'Chilled freshly squeezed citrus nectar packed with natural Vitamin C and invigorating sweet-tart brightness.',
    popular: false,
  },
  {
    id: 'd-3',
    name: 'Belgian Velvet Dark Chocolate',
    category: 'minuman',
    price: 15000,
    description: 'Pure melted Belgian cocoa whisked smoothly with whole steamed or chilled milk. Decadent comfort for non-coffee drinkers.',
    popular: false,
  },
  {
    id: 'd-4',
    name: 'Crisp Meyer Lemon & Mint Iced Tea',
    category: 'minuman',
    price: 12000,
    description: 'Premium Ceylon black tea shaken with freshly extracted lemon juice, muddled mint sprigs, and a hint of organic cane sugar.',
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
    name: 'Marcus Vance',
    role: 'Tech Lead & Remote Founder',
    comment: 'Hands down my favorite work-friendly sanctuary in Senopati. The 150 Mbps dedicated fiber never falters during high-stakes video calls, and charging bays are literally on every table. Their Signature Palm Sugar Latte is unbeatable.',
    rating: 5,
    timeAgo: '2 days ago',
  },
  {
    id: 'rev-2',
    name: 'Sarah Chen',
    role: 'Senior Product Designer',
    comment: 'The QR table ordering here is a masterclass in modern cafe DX. You scan the code, customize your drinks, and split the bill without ever having to stand in a queue. The garlic scallion noodles and warm tempeh crisps are absolute must-tries.',
    rating: 5,
    timeAgo: '1 week ago',
  },
  {
    id: 'rev-3',
    name: 'Devon Lee',
    role: 'Distributed Systems Engineer',
    comment: 'Super rapid kitchen turnaround and refreshingly fair pricing. The built-in fair-share bill splitter saved our squad 10 minutes of awkward group chat math after our sprint planning. Great ergonomic seating and upbeat focus energy.',
    rating: 5,
    timeAgo: '3 days ago',
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    role: 'Digital Nomad & Creative Director',
    comment: 'Open late till 1 AM with high-speed internet, ambient low-fi acoustics, and wonderfully welcoming staff. Parking is hassle-free with attendants on duty. The gold standard for late-night productivity!',
    rating: 5,
    timeAgo: 'Yesterday',
  },
];

export const CAFE_INFO = {
  name: 'Sentosa Cafe & Diner',
  kicker: 'Artisanal Coffee & Late-Night Co-Working Diner • Senopati',
  tagline: 'Artisanal Brews, 150 Mbps Fiber, Open Till Late.',
  subheading: 'A vibrant neighborhood haven engineered for high-output remote sprints, creative collabs, and relaxed late-night gatherings. Exceptional coffee, honest pricing, zero compromises.',
  address: 'Jl. Senopati Raya No. 42 (Senopati Tech & Arts District), South Jakarta',
  googleMapsUrl: 'https://maps.google.com/?q=Warkop+Sentosa+Senopati',
  phone: '+62 812-8990-2026',
  whatsappUrl: 'https://wa.me/6281289902026?text=Hello%20Sentosa%20Cafe,%20I%20would%20like%20to%20inquire%20about%20your%20menu%20and%20table%20reservations',
  operatingHours: {
    weekdays: 'Mon – Fri: 09:00 AM – 01:00 AM (GMT+7)',
    weekends: 'Sat – Sun: 09:00 AM – 02:00 AM (GMT+7)',
  },
  instagram: '@sentosacafe.id',
};
