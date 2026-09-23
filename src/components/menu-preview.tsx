'use client';

import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/coffee-menu';
import { Coffee, Flame, X, Plus, Minus, Send, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

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
      `Halo Kak, mau pesan menu ini ya. Apakah ready? Terima kasih!`
    );

    setOrderConfirmedToast(`Pesanan ${quantity}x ${selectedOrderItem.name} dikirim ke WhatsApp!`);
    const targetUrl = `https://wa.me/6281289902026?text=${message}`;
    
    // Direct open without lagging
    window.open(targetUrl, '_blank');
    setSelectedOrderItem(null);

    setTimeout(() => {
      setOrderConfirmedToast(null);
    }, 3500);
  };

  return (
    <section id="menu" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      {/* Background warm glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 ambient-glow-warm rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#E07A2A]" />
            <span>Menu Enak &amp; Ramah Kantong</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Daftar Menu &amp; Paket Hemat
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            Pilihan menu andalan buat nemenin nugas berjam-jam, mabar santai bareng squad, atau nongkrong sampai larut malam.
          </p>
        </div>

        {/* Student Promo Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#2A1F18] via-[#241A13] to-[#1E1611] border border-[#E07A2A]/35 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#E07A2A]/20 flex items-center justify-center text-[#E07A2A] flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Khusus Mahasiswa &amp; Pelajar: Diskon 10% Setiap Hari!
              </p>
              <p className="text-xs text-stone-300 font-light mt-0.5">
                Cukup tunjukkan Kartu Tanda Mahasiswa (KTM) atau kartu pelajar aktifmu saat pesan di kasir.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#E07A2A] px-4 py-2 rounded-full shadow-md shadow-[#E07A2A]/25 whitespace-nowrap">
            Klaim di Kasir
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'button-warm font-bold shadow-md shadow-[#E07A2A]/30 scale-105'
                  : 'bg-[#221B16] hover:bg-stone-800 text-[#F5EDE4]/80 border border-stone-800 hover:border-[#E07A2A]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid - responsive for mobile & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isCombo = item.category === 'combo';

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between 
                           transition-all duration-250 ease-out 
                           hover:-translate-y-1.5 hover:shadow-xl 
                           overflow-hidden ${
                             isCombo
                               ? 'bg-gradient-to-b from-[#2E2219] to-[#1C1510] border-2 border-[#E07A2A]/50 shadow-md shadow-[#E07A2A]/10'
                               : 'bg-[#1C1612]/90 border border-stone-800/80 hover:border-[#E07A2A]/40 hover:bg-[#241D17]'
                           }`}
              >
                <div className="relative z-10">
                  {/* Tag & Price */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div>
                      {item.tag && (
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                            isCombo
                              ? 'bg-[#E07A2A] text-white shadow-md shadow-[#E07A2A]/30'
                              : 'bg-[#E07A2A]/15 text-[#E07A2A] border border-[#E07A2A]/30'
                          }`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <div className="text-right">
                      {item.originalPrice && (
                        <span className="block text-[11px] text-stone-400 line-through font-mono">
                          {formatRupiah(item.originalPrice)}
                        </span>
                      )}
                      <span className="text-lg font-bold text-[#E29D52] font-mono">
                        {formatRupiah(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Item Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-[#E07A2A] transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Flavor / Ingredients Pills */}
                  {item.notes && item.notes.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.notes.map((note, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-[#14110E] text-[#F5EDE4]/75 border border-stone-800"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-medium">
                    {isCombo ? '🔥 Paket Hemat' : '☕ Porsi Pas'}
                  </span>

                  <button
                    onClick={() => handleOpenOrder(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full button-warm text-xs font-bold tracking-wide cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Pesan Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Order Pop-up Dialog */}
      {selectedOrderItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#1C1612] border border-[#E07A2A]/40 p-6 sm:p-7 shadow-2xl space-y-5">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedOrderItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E07A2A] bg-[#E07A2A]/15 px-3 py-0.5 rounded-full border border-[#E07A2A]/30">
                Pesan via WhatsApp
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-2">
                {selectedOrderItem.name}
              </h3>
              <p className="text-xs text-stone-300 mt-1 font-light">
                {selectedOrderItem.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14110E] border border-stone-800">
              <span className="text-xs font-medium text-stone-300">Mau pesan berapa porsi?</span>
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
              <span className="text-[#E29D52] font-mono text-base">
                {formatRupiah(selectedOrderItem.price * quantity)}
              </span>
            </div>

            {/* Submit to WhatsApp */}
            <button
              onClick={handleConfirmOrder}
              className="w-full py-3.5 rounded-full button-warm font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Lanjut Pesan ke WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Toast Feedback */}
      {orderConfirmedToast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#221B16] border border-[#E07A2A]/40 text-[#F5EDE4] text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <Sparkles className="w-4 h-4 text-[#E07A2A]" />
          <span>{orderConfirmedToast}</span>
        </div>
      )}
    </section>
  );
}
