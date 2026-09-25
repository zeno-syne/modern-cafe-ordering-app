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
  { id: 'makanan', label: '🍜 Comfort Food & Bites' },
  { id: 'kopi', label: '☕ Handcrafted Coffee' },
  { id: 'minuman', label: '🥤 Coolers & Beverages' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // COMFORT FOOD & BITES
  {
    id: 'm-1',
    name: 'Sentosa Special Corned Beef Noodles',
    category: 'makanan',
    price: 18000,
    description: 'The legendary comfort bowl: springy noodles, savory sauteed corned beef, fresh scallions, and a golden soft-boiled egg.',
    badge: 'BEST SELLER',
    badgeColor: 'red',
    popular: true,
  },
  {
    id: 'm-2',
    name: 'Crispy Golden Tempeh (Mendoan)',
    category: 'makanan',
    price: 12000,
    description: 'Freshly fried artisan thin-cut tempeh with spring onions, served piping hot with sweet soy chili dip.',
    badge: 'MADE TO ORDER',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'm-3',
    name: 'Toasted Brioche with Chocolate & Cheese',
    category: 'makanan',
    price: 15000,
    description: 'Crisp-crusted warm toasted brioche overflowing with Belgian chocolate vermicelli and grated savory cheddar.',
    badge: 'SQUAD FAVORITE',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'm-4',
    name: 'Crispy Banana Fritters with Cheese',
    category: 'makanan',
    price: 15000,
    description: 'Caramelized sweet plantains fried in light golden batter, drizzled with sweet condensed cream and melted cheddar.',
    badge: 'VALUE BUNDLE',
    badgeColor: 'green',
    popular: false,
  },
  {
    id: 'm-5',
    name: 'Crispy Shoestring Fries with Garlic Chili Dip',
    category: 'makanan',
    price: 15000,
    description: 'Double-fried golden potato shoestrings lightly salted. The ultimate snack for deep work or gaming sessions.',
    popular: false,
  },
  {
    id: 'm-6',
    name: 'Double Jumbo Savory Fried Noodles',
    category: 'makanan',
    price: 12000,
    description: 'Double portion of aromatic savory noodles with crisp shallots and chili seasoning for serious late-night appetites.',
    badge: 'MIDNIGHT FUEL',
    badgeColor: 'red',
    popular: false,
  },

  // HANDCRAFTED COFFEE
  {
    id: 'k-1',
    name: 'Signature Iced Aren Latte',
    category: 'kopi',
    price: 20000,
    description: 'Double espresso shaken with fresh creamy milk and organic smoky palm nectar. Smooth, bold, and energizing.',
    badge: 'BEST SELLER',
    badgeColor: 'red',
    popular: true,
  },
  {
    id: 'k-2',
    name: 'Traditional Dark Roast Tubruk Coffee',
    category: 'kopi',
    price: 10000,
    description: 'Authentic coarse-ground volcanic roast infused slowly with boiling water. Rich roasted aroma and earthy body.',
    badge: 'CLASSIC ROAST',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'k-3',
    name: 'Fresh Iced Americano',
    category: 'kopi',
    price: 14000,
    description: 'Double shot of single-origin espresso poured over crystal ice. Crisp, citrusy, and clean zero-sugar clarity.',
    popular: false,
  },
  {
    id: 'k-4',
    name: 'Iced Salted Caramel Latte',
    category: 'kopi',
    price: 22000,
    description: 'Velvety espresso and cold fresh milk coated with golden sea-salt caramel drizzle on crystal ice.',
    badge: 'FAVORITE',
    badgeColor: 'yellow',
    popular: false,
  },

  // COOLERS & BEVERAGES
  {
    id: 'd-1',
    name: 'Jumbo Iced Jasmine Tea',
    category: 'minuman',
    price: 8000,
    description: '500ml colossal tumbler of freshly brewed fragrant jasmine tea over crushed ice. The ultimate thirst quencher.',
    badge: 'SUMMER HIT',
    badgeColor: 'yellow',
    popular: true,
  },
  {
    id: 'd-2',
    name: 'Fresh Squeezed Citrus Orange Cooler',
    category: 'minuman',
    price: 8000,
    description: 'Chilled zesty citrus punch packed with Vitamin C and revitalizing sweet-tart natural flavor.',
    popular: false,
  },
  {
    id: 'd-3',
    name: 'Artisan Creamy Dark Cocoa',
    category: 'minuman',
    price: 15000,
    description: 'Rich melted dark chocolate whisked with fresh whole milk. Decadent comfort for non-coffee drinkers.',
    popular: false,
  },
  {
    id: 'd-4',
    name: 'Fresh Mint Iced Lemon Tea',
    category: 'minuman',
    price: 12000,
    description: 'Ceylon black tea shaken with fresh lemon juice and cooling mint leaves. Fresh and crisp.',
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
    role: 'Google Local Guide • Level 7',
    comment: 'Hands down my favorite work-friendly cafe in town. The 150 Mbps fiber Wi-Fi never drops during video calls, and power sockets are everywhere. Their Iced Aren Latte is unmatched.',
    rating: 5,
    timeAgo: '2 days ago',
  },
  {
    id: 'rev-2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer • Remote',
    comment: 'Incredible late-night hangout! The QR table ordering is seamless—no waiting in lines at the counter. The corned beef noodles and warm mendoan tempeh are absolute must-tries.',
    rating: 5,
    timeAgo: '1 week ago',
  },
  {
    id: 'rev-3',
    name: 'Devon Lee',
    role: 'Senior Software Engineer',
    comment: 'Super fast service and honest prices. The digital split-bill feature inside the web app saved our squad 10 minutes of awkward math. Very cozy seating and great energy.',
    rating: 5,
    timeAgo: '3 days ago',
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    role: 'Digital Nomad',
    comment: 'Open late till 1 AM with high-speed internet and great ambient music. The team is wonderfully welcoming and parking is easy. 5 stars all the way!',
    rating: 5,
    timeAgo: 'Yesterday',
  },
];

export const CAFE_INFO = {
  name: 'Sentosa Cafe & Diner',
  kicker: 'Casual Specialty Coffee & Dining in Senopati',
  tagline: 'Artisan Coffee, 150 Mbps Wi-Fi, Open Till Late.',
  subheading: 'The quintessential neighborhood spot for deep focus work, team meetings, or late-night hangouts with friends. Honest prices, premium hospitality.',
  address: 'Jl. Senopati Raya No. 42 (Near Campus & Tech Hub), South Jakarta',
  googleMapsUrl: 'https://maps.google.com/?q=Warkop+Sentosa+Senopati',
  phone: '+62 812-8990-2026',
  whatsappUrl: 'https://wa.me/6281289902026?text=Hello%20Sentosa%20Cafe,%20I%20would%20like%20to%20inquire%20about%20menu%20and%20table%20reservations',
  operatingHours: {
    weekdays: '09:00 AM - 01:00 AM WIB',
    weekends: '09:00 AM - 02:00 AM WIB',
  },
  instagram: '@sentosacafe.id',
};
