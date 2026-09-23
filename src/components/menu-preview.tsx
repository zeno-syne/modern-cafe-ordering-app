'use client';

import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/coffee-menu';
import { Coffee, Flame, X, Plus, Minus, Send, Sparkles, Award } from 'lucide-react';

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
      `*PESANAN MENU WARKOP SENTOSA (SENOPATI)*\n\n` +
      `Item: *${selectedOrderItem.name}*\n` +
      `Kategori: ${selectedOrderItem.category.toUpperCase()}\n` +
      `Jumlah: ${quantity} porsi\n` +
      `Total: ${formatRupiah(total)}\n\n` +
      `Halo Barista, saya ingin memesan menu ini. Mohon info ketersediaannya.`
    );

    setOrderConfirmedToast(`Pesanan ${quantity}x ${selectedOrderItem.name} siap diproses!`);
    const targetUrl = `https://wa.me/6281289902026?text=${message}`;
    
    setTimeout(() => {
      window.open(targetUrl, '_blank');
      setSelectedOrderItem(null);
    }, 500);

    setTimeout(() => {
      setOrderConfirmedToast(null);
    }, 4000);
  };

  return (
    <section id="menu" className="py-24 md:py-32 relative bg-[#0D0B0A] border-t border-stone-800/80">
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 ambient-glow-gold rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 ambient-glow-espresso rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Katalog Kurasi Specialty</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            Interactive Menu &amp; Reserve
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            Eksplorasi lini biji lelang kelas dunia, espresso aren bakar khas Nusantara, serta hidangan pendamping premium.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'button-gold font-bold shadow-lg shadow-[#C5A059]/25 scale-105'
                  : 'bg-[#1A1512] hover:bg-stone-800 text-[#EDE6DD]/80 border border-[#C5A059]/15 hover:border-[#C5A059]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => {
            const isReserve = item.category === 'reserve';

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-7 flex flex-col justify-between 
                           transition-all duration-300 ease-out 
                           hover:-translate-y-2 hover:scale-[1.015] 
                           overflow-hidden ${
                             isReserve
                               ? 'bg-gradient-to-b from-[#241C16] to-[#140F0D] border-2 border-[#C5A059]/50 shadow-xl shadow-black/80 hover:border-[#C5A059]'
                               : 'bg-[#181310]/80 border border-stone-800/80 hover:border-[#C5A059]/40 hover:bg-[#1E1814]'
                           }`}
              >
                {/* Ambient glow in card */}
                {isReserve && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Tag & Price */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div>
                      {item.tag && (
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            isReserve
                              ? 'bg-[#C5A059] text-[#0D0B0A] shadow-md shadow-[#C5A059]/30'
                              : 'bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30'
                          }`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-lg font-bold text-[#E5C07B] font-serif">
                      {formatRupiah(item.price)}
                    </span>
                  </div>

                  {/* Item Name */}
                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-[#C5A059] transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-300/80 mt-2.5 leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>

                  {/* Flavor / Ingredient Notes */}
                  {item.notes && item.notes.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.notes.map((note, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0D0B0A]/80 text-[#EDE6DD]/70 border border-stone-800"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Order Button Card Footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 flex items-center gap-1.5">
                    {isReserve ? (
                      <>
                        <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span className="text-[#C5A059] font-medium">Reserve Collection</span>
                      </>
                    ) : (
                      <>
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        <span>Fresh Roasted</span>
                      </>
                    )}
                  </span>

                  <button
                    onClick={() => handleOpenOrder(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full button-gold text-xs font-bold uppercase tracking-wider cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Pesan Menu</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Order Pop-up Dialog */}
      {selectedOrderItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#181310] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedOrderItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/15 px-3 py-0.5 rounded-full border border-[#C5A059]/30">
                Konfirmasi Pesanan
              </span>
              <h3 className="text-2xl font-bold text-white font-serif mt-2">
                {selectedOrderItem.name}
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-light">
                {selectedOrderItem.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0D0B0A] border border-stone-800">
              <span className="text-xs font-medium text-stone-300">Jumlah Porsi:</span>
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

            {/* Price Breakdown */}
            <div className="space-y-2 border-t border-stone-800 pt-4 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>Harga Satuan:</span>
                <span className="font-mono">{formatRupiah(selectedOrderItem.price)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-stone-800/60 font-serif">
                <span>Total Pesanan:</span>
                <span className="text-[#E5C07B] font-mono">
                  {formatRupiah(selectedOrderItem.price * quantity)}
                </span>
              </div>
            </div>

            {/* Submit to WhatsApp */}
            <button
              onClick={handleConfirmOrder}
              className="w-full py-3.5 rounded-full button-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Pesanan ke WhatsApp Barista</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Notification Toast */}
      {orderConfirmedToast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#1A1512] border border-[#C5A059]/40 text-[#EDE6DD] text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span>{orderConfirmedToast}</span>
        </div>
      )}
    </section>
  );
}
