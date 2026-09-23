'use client';

import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/coffee-menu';
import { useCart } from '@/context/cart-context';
import {
  Flame,
  X,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Check,
  Search,
  RotateCcw,
} from 'lucide-react';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [orderNote, setOrderNote] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { addItem, getItemQuantity, setIsCartOpen, totalItems } = useCart();

  // Extended filter categories with Best Seller
  const extendedCategories = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'bestseller', label: '🔥 Paling Laris' },
    ...MENU_CATEGORIES.filter((c) => c.id !== 'all'),
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // 1. Category filter
    let matchesCategory = true;
    if (activeCategory === 'bestseller') {
      matchesCategory = Boolean(
        item.popular ||
          item.badge?.includes('BEST') ||
          item.badge?.includes('FAVORIT')
      );
    } else if (activeCategory !== 'all') {
      matchesCategory = item.category === activeCategory;
    }

    // 2. Search query filter
    if (!searchQuery.trim()) return matchesCategory;

    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleOpenOrder = (item: MenuItem) => {
    setSelectedOrderItem(item);
    setQuantity(1);
    setOrderNote('');
  };

  const handleAddToCart = () => {
    if (!selectedOrderItem) return;

    addItem(selectedOrderItem, quantity, orderNote);
    const itemName = selectedOrderItem.name;
    const addedQty = quantity;
    setSelectedOrderItem(null);

    setToastMessage(`${addedQty}x ${itemName} masuk ke keranjang!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleDirectBuyWhatsApp = () => {
    if (!selectedOrderItem) return;

    const total = selectedOrderItem.price * quantity;
    const noteText = orderNote.trim() ? `\nCatatan: ${orderNote.trim()}` : '';
    const message = encodeURIComponent(
      `*PESANAN LANGSUNG WARKOP SENTOSA*\n\n` +
      `Item: *${selectedOrderItem.name}*\n` +
      `Jumlah: ${quantity} porsi\n` +
      `Total: ${formatRupiah(total)}${noteText}\n\n` +
      `Halo Kak, mau pesan ini ya. Apakah ready? Terima kasih!`
    );

    const targetUrl = `https://wa.me/6281289902026?text=${message}`;
    window.open(targetUrl, '_blank');
    setSelectedOrderItem(null);
  };

  // Helper for bold organic sticker badges
  const getBadgeStyle = (color?: string) => {
    switch (color) {
      case 'red':
        return 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-950/60 ring-1 ring-red-400/40 -rotate-2';
      case 'yellow':
        return 'bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 shadow-lg shadow-amber-950/50 ring-1 ring-amber-300 rotate-1';
      case 'green':
        return 'bg-gradient-to-r from-emerald-500 to-teal-500 text-stone-950 shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-300';
      default:
        return 'bg-[#EA580C] text-white shadow-md';
    }
  };

  return (
    <section id="menu" className="scroll-mt-24 py-20 sm:py-28 md:py-32 relative bg-[#14110E] border-t border-stone-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Menu Warkop Kekinian</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Harga Merakyat, Rasa Pejabat
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal px-2">
            Pilihan menu andalan buat nemenin nugas berjam-jam, mabar santai bareng squad, atau nongkrong sampai jam 1 pagi.
          </p>
        </div>

        {/* Instant Search Bar */}
        <div className="max-w-md mx-auto mb-6 px-2">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari kopi, indomie, mendoan, roti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#1C1612] border border-stone-800 focus:border-[#EA580C] text-white text-xs sm:text-sm placeholder:text-stone-500 shadow-lg outline-none transition-all focus:ring-1 focus:ring-[#EA580C]/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                title="Hapus pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters: Floating Pill Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10 sm:mb-14">
          {extendedCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white shadow-lg shadow-[#EA580C]/30 scale-105'
                  : 'bg-[#1D1713] hover:bg-[#271F1A] text-[#F5EDE4]/80 border border-stone-800 hover:border-[#EA580C]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <div className="max-w-md mx-auto py-12 px-4 text-center space-y-3 bg-[#1A1410] border border-stone-800 rounded-3xl">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#F59E0B]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              Menu Tidak Ditemukan
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Tidak ada menu yang cocok dengan kata kunci &ldquo;<span className="text-[#F59E0B] font-semibold">{searchQuery}</span>&rdquo;.
              Coba cari kopi, indomie, mendoan, atau roti bakar.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#F59E0B] hover:bg-[#EA580C]/30 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Pencarian</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item, index) => {
              const isFeatured = item.popular && index < 2;
              const inCartQty = getItemQuantity(item.id);

              return (
                <div
                  key={item.id}
                  className="bezel-shell group active:scale-[0.99] transition-all"
                >
                  <div
                    className={`bezel-core !p-5 sm:!p-6 ${
                      isFeatured ? '!bg-[#221711] ring-1 ring-[#EA580C]/40' : ''
                    }`}
                  >
                    <div>
                      {/* Organic Sticker Badge & Price Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {item.badge ? (
                            <span
                              className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-black tracking-wider uppercase transition-transform group-hover:scale-105 ${getBadgeStyle(
                                item.badgeColor
                              )}`}
                            >
                              {item.badge}
                            </span>
                          ) : (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-stone-400 bg-stone-900 border border-stone-800">
                              {item.category === 'kopi'
                                ? 'Kopi'
                                : item.category === 'makanan'
                                ? 'Makanan'
                                : 'Minuman'}
                            </span>
                          )}

                          {inCartQty > 0 && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              <Check className="w-2.5 h-2.5" />
                              <span>{inCartQty} di Keranjang</span>
                            </span>
                          )}
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className="text-lg sm:text-2xl font-black text-[#F59E0B] font-display">
                            {formatRupiah(item.price)}
                          </span>
                        </div>
                      </div>

                      {/* Item Name */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white font-display group-hover:text-[#F59E0B] transition-colors duration-200">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Action Footer */}
                    <div className="mt-5 pt-3.5 border-t border-stone-800/90 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs text-stone-400 font-medium">
                        {item.badge === 'BEST SELLER'
                          ? '🔥 Paling Dicari'
                          : item.badge === 'PAKET AKHIR BULAN'
                          ? '💰 Hemat Banget'
                          : '☕ Porsi Mantap'}
                      </span>

                      <button
                        onClick={() => handleOpenOrder(item)}
                        className="group/btn inline-flex items-center gap-1.5 pl-3.5 pr-2 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold tracking-wide cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#EA580C]/25"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{inCartQty > 0 ? 'Tambah Lagi' : 'Pesan'}</span>
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto text-center px-2">
          <a
            href="https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20mau%20tanya%20menu%20dan%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between sm:justify-center gap-3 pl-4 sm:pl-5 pr-2 py-2 rounded-full bg-[#1D1713] hover:bg-[#251D18] text-[#F5EDE4] hover:text-[#F59E0B] border border-stone-700/80 hover:border-[#EA580C]/50 text-xs sm:text-sm font-semibold transition-all shadow-lg active:scale-95"
          >
            <span className="text-left sm:text-center">
              Mau tanya info menu atau booking tempat nongkrong?
            </span>
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Quick Order & Add to Cart Dialog */}
      {selectedOrderItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#1C1612] border border-[#EA580C]/40 p-5 sm:p-7 shadow-2xl space-y-4 sm:space-y-5">
            {/* Close Button */}
            <button
              onClick={() => setSelectedOrderItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors cursor-pointer active:scale-90"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-3 py-0.5 rounded-full border border-[#EA580C]/30">
                Pilih Menu Warkop
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-2">
                {selectedOrderItem.name}
              </h3>
              <p className="text-xs text-stone-300 mt-1 font-normal">
                {selectedOrderItem.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14110E] border border-stone-800">
              <span className="text-xs font-medium text-stone-300">
                Jumlah porsi:
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-base font-bold text-white font-mono w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Special Request / Note Input */}
            <div>
              <label className="text-xs font-medium text-stone-300 mb-1.5 block">
                Catatan Khusus (Opsional):
              </label>
              <input
                type="text"
                placeholder="Misal: pedas rawit 5, es sedikit, manis sedang"
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#14110E] border border-stone-800 focus:border-[#EA580C] text-white text-xs placeholder:text-stone-500 outline-none transition-colors"
              />
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center border-t border-stone-800 pt-3 text-sm font-bold text-white font-display">
              <span>Total Harga:</span>
              <span className="text-[#F59E0B] font-display text-lg">
                {formatRupiah(selectedOrderItem.price * quantity)}
              </span>
            </div>

            {/* Action Buttons: Add to Multi-Item Cart vs Direct WA */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#EA580C]/30 active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>+ Masukkan ke Keranjang</span>
              </button>

              <button
                onClick={handleDirectBuyWhatsApp}
                className="w-full py-2.5 rounded-full bg-[#14110E] hover:bg-[#201A16] border border-stone-700/80 hover:border-emerald-500/50 text-stone-300 hover:text-emerald-400 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Beli Langsung via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 px-5 py-3 rounded-2xl bg-[#221B16] border border-[#EA580C]/40 text-[#F5EDE4] text-xs font-semibold shadow-2xl flex items-center justify-between sm:justify-start gap-3 animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-[11px] font-bold text-[#F59E0B] underline hover:text-white cursor-pointer ml-2"
          >
            Buka ({totalItems})
          </button>
        </div>
      )}
    </section>
  );
}
