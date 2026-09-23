'use client';

import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/coffee-menu';
import { Flame, X, Plus, Minus, Send, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [orderConfirmedToast, setOrderConfirmedToast] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

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
  };

  const handleConfirmOrder = () => {
    if (!selectedOrderItem) return;

    const total = selectedOrderItem.price * quantity;
    const message = encodeURIComponent(
      `*PESANAN WARKOP SENTOSA*\n\n` +
      `Item: *${selectedOrderItem.name}*\n` +
      `Jumlah: ${quantity} porsi\n` +
      `Total: ${formatRupiah(total)}\n\n` +
      `Halo Kak, mau pesan ini ya. Apakah ready? Terima kasih!`
    );

    setOrderConfirmedToast(`Pesanan ${quantity}x ${selectedOrderItem.name} siap dikirim ke WhatsApp!`);
    const targetUrl = `https://wa.me/6281289902026?text=${message}`;
    window.open(targetUrl, '_blank');
    setSelectedOrderItem(null);

    setTimeout(() => {
      setOrderConfirmedToast(null);
    }, 3500);
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
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
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

        {/* Category Filters: Floating Pill Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10 sm:mb-14">
          {MENU_CATEGORIES.map((cat) => (
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

        {/* 1-Column on Mobile, 2 on Tablet, 3 on Desktop (Broken Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = item.popular && index < 2;

            return (
              <div
                key={item.id}
                className="bezel-shell group active:scale-[0.99] transition-all"
              >
                <div className={`bezel-core !p-5 sm:!p-6 ${isFeatured ? '!bg-[#221711] ring-1 ring-[#EA580C]/40' : ''}`}>
                  <div>
                    {/* Organic Sticker Badge & Price Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
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
                            {item.category === 'kopi' ? 'Kopi' : item.category === 'makanan' ? 'Makanan' : 'Minuman'}
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

                  {/* Card Action Footer with Nested Button */}
                  <div className="mt-5 pt-3.5 border-t border-stone-800/90 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs text-stone-400 font-medium">
                      {item.badge === 'BEST SELLER' ? '🔥 Paling Dicari' : item.badge === 'PAKET AKHIR BULAN' ? '💰 Hemat Banget' : '☕ Porsi Mantap'}
                    </span>

                    <button
                      onClick={() => handleOpenOrder(item)}
                      className="group/btn inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold tracking-wide cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#EA580C]/25"
                    >
                      <span>Pesan</span>
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

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto text-center px-2">
          <a
            href="https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20mau%20tanya%20menu%20dan%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between sm:justify-center gap-3 pl-4 sm:pl-5 pr-2 py-2 rounded-full bg-[#1D1713] hover:bg-[#251D18] text-[#F5EDE4] hover:text-[#F59E0B] border border-stone-700/80 hover:border-[#EA580C]/50 text-xs sm:text-sm font-semibold transition-all shadow-lg active:scale-95"
          >
            <span className="text-left sm:text-center">Mau pesan bawa pulang / tanya menu?</span>
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Quick Order Pop-up Dialog */}
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
                Pesan Menu Warkop
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
              <span className="text-xs font-medium text-stone-300">Jumlah porsi:</span>
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

            {/* Total Price */}
            <div className="flex justify-between items-center border-t border-stone-800 pt-3 text-sm font-bold text-white font-display">
              <span>Total Harga:</span>
              <span className="text-[#F59E0B] font-display text-lg">
                {formatRupiah(selectedOrderItem.price * quantity)}
              </span>
            </div>

            {/* Submit to WhatsApp */}
            <button
              onClick={handleConfirmOrder}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#EA580C]/30 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Lanjut Pesan ke WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Toast Feedback */}
      {orderConfirmedToast && (
        <div className="fixed bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 px-5 py-3 rounded-2xl bg-[#221B16] border border-[#EA580C]/40 text-[#F5EDE4] text-xs font-semibold shadow-2xl flex items-center justify-center sm:justify-start gap-2 animate-in slide-in-from-bottom-5">
          <Sparkles className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
          <span>{orderConfirmedToast}</span>
        </div>
      )}
    </section>
  );
}
