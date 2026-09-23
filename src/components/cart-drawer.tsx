'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/cart-context';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  Send,
  MessageCircle,
  Utensils,
  Package,
  QrCode,
  Edit3,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    orderType,
    tableNumber,
    customerName,
    totalItems,
    totalPrice,
    qrDetectedTable,
    setIsCartOpen,
    setOrderType,
    setTableNumber,
    setCustomerName,
    updateQuantity,
    updateNotes,
    removeItem,
    clearCart,
  } = useCart();

  const [activeNoteEditId, setActiveNoteEditId] = useState<string | null>(null);
  const [checkoutSuccessToast, setCheckoutSuccessToast] = useState(false);

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    // Validate table number if dine-in
    if (orderType === 'dine-in' && !tableNumber.trim()) {
      alert('Mohon masukkan nomor meja tempat kamu nongkrong ya Kak!');
      return;
    }

    const orderTypeLabel =
      orderType === 'dine-in'
        ? `Makan di Tempat (Meja ${tableNumber.trim()})`
        : 'Bungkus / Take Away';

    const customerLine = customerName.trim()
      ? `👤 Atas Nama: *${customerName.trim()}*\n`
      : '';

    const itemsList = items
      .map((i) => {
        let text = `• *${i.quantity}x ${i.item.name}* (${formatRupiah(i.item.price * i.quantity)})`;
        if (i.notes && i.notes.trim()) {
          text += `\n  ↳ _Catatan: ${i.notes.trim()}_`;
        }
        return text;
      })
      .join('\n');

    const rawMessage =
      `*PESANAN WARKOP SENTOSA*\n` +
      `==============================\n` +
      `📋 Tipe: *${orderTypeLabel}*\n` +
      customerLine +
      `\n*Daftar Pesanan:*\n` +
      `${itemsList}\n` +
      `------------------------------\n` +
      `*Total: ${formatRupiah(totalPrice)}* (${totalItems} porsi)\n` +
      `==============================\n` +
      `Halo Kasir Warkop Sentosa, mau pesan ini ya. Mohon segera diproses. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const targetUrl = `https://wa.me/6281289902026?text=${encodedMessage}`;

    setCheckoutSuccessToast(true);
    setTimeout(() => {
      window.open(targetUrl, '_blank');
      setCheckoutSuccessToast(false);
      setIsCartOpen(false);
    }, 600);
  };

  return (
    <>
      {/* 1. FLOATING CART BAR (Muncul di layar saat ada item & drawer tertutup) */}
      {totalItems > 0 && !isCartOpen && (
        <div className="fixed bottom-5 sm:bottom-6 left-0 right-0 z-40 px-3 sm:px-4 flex justify-center pointer-events-none animate-in slide-in-from-bottom-6 duration-300">
          <div className="pointer-events-auto w-full max-w-md bg-[#1C1612]/95 backdrop-blur-xl border border-[#EA580C]/40 p-2 sm:p-2.5 rounded-full shadow-2xl shadow-black/80 flex items-center justify-between ring-1 ring-white/10 hover:border-[#EA580C] transition-all">
            
            {/* Left info: Icon & Total items + price */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-3 pl-3 text-left cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/40 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-stone-950 font-mono text-[11px] font-black flex items-center justify-center ring-2 ring-[#1C1612]">
                  {totalItems}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-stone-400 font-medium block">
                  {orderType === 'dine-in' && tableNumber ? `Meja ${tableNumber} • ` : ''}{totalItems} Menu Dipilih
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#F59E0B] font-display">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
            </button>

            {/* Right action button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#EA580C]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Lihat Pesanan</span>
              <MessageCircle className="w-4 h-4 fill-white/10" />
            </button>
          </div>
        </div>
      )}

      {/* 2. CART DRAWER MODAL / SLIDE-OVER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-lg h-full bg-[#18130F] border-l border-stone-800 text-stone-100 flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800/80 flex items-center justify-between bg-[#1C1612]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white font-display">
                    Keranjang Warkop
                  </h2>
                  <span className="text-xs text-stone-400">
                    {totalItems} item siap diproses
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="p-2 rounded-xl text-stone-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30 transition-colors text-xs font-medium cursor-pointer"
                    title="Kosongkan Keranjang"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                  aria-label="Tutup Keranjang"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-5">
              
              {/* Order Options: Dine-in vs Takeaway */}
              <div className="p-3.5 rounded-2xl bg-[#14110E] border border-stone-800/90 space-y-3">
                <div className="text-xs font-semibold text-stone-300">
                  Pilihan Pemesanan:
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      orderType === 'dine-in'
                        ? 'bg-[#EA580C]/20 border-[#EA580C] text-[#F59E0B]'
                        : 'bg-[#1C1612] border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Makan di Tempat</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-[#EA580C]/20 border-[#EA580C] text-[#F59E0B]'
                        : 'bg-[#1C1612] border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>Bungkus / Take Away</span>
                  </button>
                </div>

                {/* Table Number & Customer Name Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {orderType === 'dine-in' && (
                    <div className="relative">
                      <label className="text-[11px] font-medium text-stone-400 mb-1 flex items-center justify-between">
                        <span>Nomor Meja *</span>
                        {qrDetectedTable && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center gap-1">
                            <QrCode className="w-2.5 h-2.5" /> QR Scan
                          </span>
                        )}
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: 04"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#1C1612] border border-stone-800 focus:border-[#EA580C] text-white text-xs placeholder:text-stone-500 outline-none transition-colors"
                      />
                    </div>
                  )}

                  <div className={orderType === 'dine-in' ? '' : 'sm:col-span-2'}>
                    <label className="text-[11px] font-medium text-stone-400 mb-1 block">
                      Nama Pemesan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Dimas / Squad ML"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#1C1612] border border-stone-800 focus:border-[#EA580C] text-white text-xs placeholder:text-stone-500 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              {items.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500">
                    <ShoppingBag className="w-8 h-8 opacity-40" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    Keranjang Masih Kosong
                  </h3>
                  <p className="text-xs text-stone-400 max-w-xs mx-auto">
                    Yuk pilih menu favoritmu di katalog Warkop Sentosa, kopi mantap dan Indomie anget sudah menanti!
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex px-5 py-2 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#F59E0B] text-xs font-bold hover:bg-[#EA580C]/30 transition-all cursor-pointer"
                  >
                    Kembali ke Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-400 font-semibold px-1">
                    <span>Menu yang Dipesan</span>
                    <span>Subtotal</span>
                  </div>

                  {items.map((cartItem) => {
                    const isEditingNote = activeNoteEditId === cartItem.item.id;
                    const itemSubtotal = cartItem.item.price * cartItem.quantity;

                    return (
                      <div
                        key={cartItem.item.id}
                        className="p-3.5 rounded-2xl bg-[#1C1612] border border-stone-800/80 hover:border-stone-700/80 transition-all space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-white leading-snug">
                              {cartItem.item.name}
                            </h4>
                            <span className="text-xs text-stone-400 font-mono">
                              {formatRupiah(cartItem.item.price)}
                            </span>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-bold text-[#F59E0B] font-mono">
                              {formatRupiah(itemSubtotal)}
                            </span>
                          </div>
                        </div>

                        {/* Special Note Tag or Input */}
                        <div>
                          {isEditingNote ? (
                            <div className="flex items-center gap-1.5 mt-1">
                              <input
                                type="text"
                                placeholder="Contoh: less sugar, mie setengah matang"
                                value={cartItem.notes || ''}
                                onChange={(e) =>
                                  updateNotes(cartItem.item.id, e.target.value)
                                }
                                autoFocus
                                className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#14110E] border border-[#EA580C]/50 text-white text-xs placeholder:text-stone-600 outline-none"
                              />
                              <button
                                onClick={() => setActiveNoteEditId(null)}
                                className="px-2.5 py-1.5 rounded-lg bg-[#EA580C] text-white text-xs font-bold cursor-pointer"
                              >
                                Simpan
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between text-xs">
                              {cartItem.notes ? (
                                <p className="text-[11px] text-amber-200/90 italic bg-amber-950/30 border border-amber-900/50 rounded-lg px-2 py-1 max-w-[80%] truncate">
                                  Catatan: &ldquo;{cartItem.notes}&rdquo;
                                </p>
                              ) : (
                                <span className="text-[11px] text-stone-500">
                                  Tanpa catatan khusus
                                </span>
                              )}
                              <button
                                onClick={() =>
                                  setActiveNoteEditId(cartItem.item.id)
                                }
                                className="text-[11px] text-[#EA580C] hover:text-[#F97316] font-semibold flex items-center gap-1 cursor-pointer"
                              >
                                <Edit3 className="w-3 h-3" />
                                <span>{cartItem.notes ? 'Ubah' : '+ Catatan'}</span>
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Quantity Counter Bar */}
                        <div className="flex items-center justify-between pt-2 border-t border-stone-800/60">
                          <button
                            onClick={() => removeItem(cartItem.item.id)}
                            className="text-stone-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                            title="Hapus menu"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  cartItem.item.id,
                                  cartItem.quantity - 1
                                )
                              }
                              className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-white font-mono w-6 text-center">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  cartItem.item.id,
                                  cartItem.quantity + 1
                                )
                              }
                              className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Drawer Footer (Summary & WhatsApp Checkout CTA) */}
            {items.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-stone-800/80 bg-[#1C1612] space-y-3">
                <div className="space-y-1.5 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>Total Porsi ({totalItems} item)</span>
                    <span className="font-mono text-stone-200">
                      {formatRupiah(totalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Biaya Layanan / Meja</span>
                    <span className="text-emerald-400 font-semibold">GRATIS</span>
                  </div>
                  <div className="flex justify-between items-center text-sm sm:text-base font-extrabold text-white pt-2 border-t border-stone-800 font-display">
                    <span>Total Tagihan:</span>
                    <span className="text-[#F59E0B] text-lg sm:text-xl font-mono">
                      {formatRupiah(totalPrice)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 via-[#EA580C] to-[#C2410C] hover:opacity-95 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#EA580C]/25 cursor-pointer active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4 fill-white/20" />
                  <span>Kirim Pesanan ke WhatsApp Kasir</span>
                </button>

                <p className="text-[10px] text-center text-stone-400">
                  ⚡ Pesanan otomatis terformat rapi dan langsung diteruskan ke kasir warkop.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Success Feedback Toast */}
      {checkoutSuccessToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-emerald-950/95 border border-emerald-500/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Membuka WhatsApp untuk mengirim pesanan...</span>
        </div>
      )}
    </>
  );
}
