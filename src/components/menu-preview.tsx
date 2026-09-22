'use client';

import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/coffee-menu';
import { Coffee, ShoppingBag, Check, Flame, X, Plus, Minus, Send } from 'lucide-react';

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
      `*PESANAN MENU WARKOP SENTOSA*\n\n` +
      `Item: *${selectedOrderItem.name}*\n` +
      `Jumlah: ${quantity} porsi\n` +
      `Total: ${formatRupiah(total)}\n\n` +
      `Halo Barista, saya ingin memesan menu ini. Apakah ready untuk disiapkan?`
    );

    // Show instant toast feedback
    setOrderConfirmedToast(`Pesanan ${quantity}x ${selectedOrderItem.name} siap diproses!`);
    const targetUrl = `https://wa.me/6281289902026?text=${message}`;
    
    setTimeout(() => {
      window.open(targetUrl, '_blank');
      setSelectedOrderItem(null);
    }, 600);

    setTimeout(() => {
      setOrderConfirmedToast(null);
    }, 4500);
  };

  return (
    <section id="menu" className="py-20 md:py-28 relative bg-stone-950 border-t border-stone-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Coffee className="w-3.5 h-3.5" />
            <span>Katalog Menu Pilihan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
            Interactive Menu
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Pilih racikan kopi terbaik, aneka minuman non-kopi segar, serta kudapan lezat teman ngobrol.
          </p>
        </div>

        {/* Category Filters: Coffee, Non-Coffee, Snacks */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#D97706] text-stone-950 shadow-lg shadow-[#D97706]/25 scale-105 font-bold border border-[#f59e0b]/40'
                  : 'bg-stone-900/90 hover:bg-stone-800 text-stone-300 border border-stone-800 hover:border-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid with subtle hover animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-stone-900/70 border border-stone-800 p-6 flex flex-col justify-between 
                         transition-all duration-300 ease-out 
                         hover:-translate-y-2 hover:scale-[1.015] 
                         hover:border-[#D97706]/60 hover:bg-stone-900/95 
                         hover:shadow-2xl hover:shadow-[#D97706]/20 
                         overflow-hidden"
            >
              {/* Subtle ambient light sweep effect on card hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/0 via-[#D97706]/5 to-[#D97706]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Tag & Price */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    {item.tag && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D97706]/15 text-[#f59e0b] border border-[#D97706]/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-base font-bold text-[#f59e0b] font-mono">
                    {formatRupiah(item.price)}
                  </span>
                </div>

                {/* Item Name */}
                <h3 className="text-lg font-bold text-stone-100 font-serif group-hover:text-[#f59e0b] transition-colors duration-200">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-400 mt-2 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Flavor / Ingredient Notes */}
                {item.notes && item.notes.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.notes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-stone-950/80 text-stone-300 border border-stone-800 group-hover:border-stone-700 transition-colors"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Button Card Footer */}
              <div className="relative z-10 mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Fresh Batch</span>
                </span>

                <button
                  onClick={() => handleOpenOrder(item)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D97706] hover:bg-[#b45309] text-stone-950 text-xs font-bold shadow-md shadow-[#D97706]/20 hover:shadow-[#D97706]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-[#f59e0b]/30 group-hover:shadow-lg"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-stone-950 transition-transform group-hover:rotate-6" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Order Popup Modal */}
      {selectedOrderItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-stone-900 border border-stone-700 p-6 shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedOrderItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                Pesan Menu
              </span>
              <h3 className="text-xl font-bold text-white font-serif mt-1">
                {selectedOrderItem.name}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {selectedOrderItem.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-300 font-medium">Jumlah Pesanan</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-200"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center font-bold text-amber-400 font-mono">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-200"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between text-sm px-1">
              <span className="text-stone-400">Total Harga:</span>
              <span className="text-lg font-bold text-amber-400 font-mono">
                {formatRupiah(selectedOrderItem.price * quantity)}
              </span>
            </div>

            {/* Order Action Button */}
            <button
              onClick={handleConfirmOrder}
              className="w-full py-3.5 rounded-xl bg-[#D97706] hover:bg-[#b45309] text-stone-950 font-extrabold text-xs shadow-lg shadow-[#D97706]/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] border border-[#f59e0b]/40"
            >
              <Send className="w-4 h-4 text-stone-950" />
              <span>Konfirmasi & Kirim Pesanan</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {orderConfirmedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900 border border-amber-500 text-stone-100 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs font-medium text-stone-200">{orderConfirmedToast}</p>
        </div>
      )}
    </section>
  );
}
