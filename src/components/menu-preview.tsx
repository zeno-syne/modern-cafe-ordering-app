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

  // Helper for bold organic badge styles
  const getBadgeStyle = (color?: string) => {
    switch (color) {
      case 'red':
        return 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-950/50 ring-1 ring-red-400/40 -rotate-1';
      case 'yellow':
        return 'bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 shadow-lg shadow-amber-950/40 ring-1 ring-amber-300 rotate-1';
      case 'green':
        return 'bg-gradient-to-r from-emerald-500 to-teal-500 text-stone-950 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-300';
      default:
        return 'bg-[#EA580C] text-white shadow-md';
    }
  };

  return (
    <section id="menu" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      {/* Background warm glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Menu Warkop Kekinian</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Harga Merakyat, Rasa Pejabat
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            Pilihan menu andalan buat nemenin nugas berjam-jam, mabar santai bareng squad, atau nongkrong sampai jam 1 pagi.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white shadow-lg shadow-[#EA580C]/30 scale-105'
                  : 'bg-[#201914] hover:bg-[#2A211B] text-[#F5EDE4]/80 border border-stone-800 hover:border-[#EA580C]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Organic Menu Grid: Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Organic highlight for the first 2 items (Indomie Internet & Es Kopi Susu)
            const isFeatured = item.popular && index < 2;

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between 
                           transition-all duration-300 ease-out 
                           hover:-translate-y-1.5 hover:shadow-2xl 
                           overflow-hidden ${
                             isFeatured
                               ? 'bg-gradient-to-b from-[#2B1D15] via-[#221711] to-[#1A120E] border-2 border-[#EA580C]/60 shadow-xl shadow-[#EA580C]/15 ring-1 ring-[#EA580C]/30'
                               : 'bg-[#1C1612]/95 border border-stone-800/90 hover:border-[#EA580C]/40 hover:bg-[#241D17]'
                           }`}
              >
                {/* Background ambient shine for featured */}
                {isFeatured && (
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#EA580C]/20 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Organic Badge & Price */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      {item.badge ? (
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase transition-transform group-hover:scale-105 ${getBadgeStyle(
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
                      <span className="text-xl sm:text-2xl font-black text-[#F59E0B] font-display">
                        {formatRupiah(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Item Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-[#F59E0B] transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-stone-800/90 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-medium">
                    {item.badge === 'BEST SELLER' ? '🔥 Paling Dicari' : item.badge === 'PAKET AKHIR BULAN' ? '💰 Penyelamat Dompet' : '☕ Porsi Mantap'}
                  </span>

                  <button
                    onClick={() => handleOpenOrder(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold tracking-wide cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#EA580C]/20"
                  >
                    <span>Pesan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Direct WA Order prompt */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6281289902026?text=Halo%20Warkop%20Sentosa,%20mau%20tanya%20menu%20dan%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1813] hover:bg-[#282019] text-[#F5EDE4] hover:text-[#F59E0B] border border-stone-700/80 hover:border-[#EA580C]/50 text-xs sm:text-sm font-semibold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Mau pesan bawa pulang / tanya ketersediaan menu? Chat WhatsApp Kita</span>
          </a>
        </div>
      </div>

      {/* Quick Order Pop-up Dialog */}
      {selectedOrderItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#1C1612] border border-[#EA580C]/40 p-6 sm:p-7 shadow-2xl space-y-5">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedOrderItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-3 py-0.5 rounded-full border border-[#EA580C]/30">
                Pesan Menu Warkop
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-2">
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
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-base font-bold text-white font-mono w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer"
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
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#EA580C]/30"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Lanjut Pesan ke WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Toast Feedback */}
      {orderConfirmedToast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#221B16] border border-[#EA580C]/40 text-[#F5EDE4] text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <Sparkles className="w-4 h-4 text-[#EA580C]" />
          <span>{orderConfirmedToast}</span>
        </div>
      )}
    </section>
  );
}
