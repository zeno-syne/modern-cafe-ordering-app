'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/cart-context';
import { QrCode, ChevronDown, Check, X, Sparkles, Utensils, Package, Printer } from 'lucide-react';
import TableQrGeneratorModal from '@/components/table-qr-generator-modal';

export default function DemoTableSwitcher() {
  const { tableNumber, setTableNumber, orderType, setOrderType } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [customInput, setCustomInput] = useState('');

  const quickTables = ['01', '04', '08', '12', '15'];

  const handleSelectTable = (num: string) => {
    setTableNumber(num);
    setOrderType('dine-in');
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('meja', num);
      window.history.replaceState({}, '', url.toString());
    }
    setIsOpen(false);
  };

  const handleSelectTakeaway = () => {
    setOrderType('takeaway');
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('meja');
      url.searchParams.delete('table');
      window.history.replaceState({}, '', url.toString());
    }
    setIsOpen(false);
  };

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    handleSelectTable(customInput.trim());
    setCustomInput('');
  };

  return (
    <div className="fixed top-20 sm:top-24 right-3 sm:right-6 z-40">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka simulasi demo nomor meja warkop"
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1612]/90 backdrop-blur-xl border border-stone-700/80 hover:border-[#EA580C]/60 text-stone-200 text-xs font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer ring-1 ring-white/10"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <QrCode className="w-3.5 h-3.5 text-[#EA580C]" />
        <span>
          {orderType === 'dine-in' && tableNumber
            ? `Meja ${tableNumber}`
            : orderType === 'takeaway'
            ? 'Bungkus'
            : 'Pilih Meja'}
        </span>
        <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-[#1C1612] border border-[#EA580C]/40 p-4 shadow-2xl text-stone-100 space-y-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#F59E0B]">
                <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Simulasi QR Meja (Demo Klien)</span>
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                Uji cara kerja scan QR di meja warkop tanpa perlu scan fisik:
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-lg cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Table Buttons */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
              Pilih Meja Cepat:
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {quickTables.map((t) => {
                const isSelected = orderType === 'dine-in' && tableNumber === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleSelectTable(t)}
                    className={`py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-md shadow-[#EA580C]/30'
                        : 'bg-[#14110E] text-stone-300 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    #{t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Takeaway Option */}
          <button
            type="button"
            onClick={handleSelectTakeaway}
            className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-between border transition-all cursor-pointer ${
              orderType === 'takeaway'
                ? 'bg-[#EA580C]/20 border-[#EA580C] text-[#F59E0B]'
                : 'bg-[#14110E] border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Package className="w-3.5 h-3.5" />
              <span>Simulasi Bungkus / Take Away</span>
            </div>
            {orderType === 'takeaway' && <Check className="w-3.5 h-3.5 text-[#F59E0B]" />}
          </button>

            {/* Custom Input */}
            <form onSubmit={handleApplyCustom} className="pt-1 flex gap-1.5">
              <input
                type="text"
                placeholder="Ketik Meja (mis: 09/VIP)"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-xl bg-[#14110E] border border-stone-800 focus:border-[#EA580C] text-white text-xs outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-[#EA580C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Terapkan
              </button>
            </form>

            {/* Print Acrylic Table Tent CTA */}
            <div className="pt-2 border-t border-stone-800">
              <button
                type="button"
                onClick={() => {
                  setIsQrModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600/30 to-[#EA580C]/30 hover:from-amber-600/50 hover:to-[#EA580C]/50 border border-amber-500/40 text-amber-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <Printer className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Cetak Stand Akrilik Meja (QR)</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Generator Stand Meja QR */}
        <TableQrGeneratorModal
          isOpen={isQrModalOpen}
          onClose={() => setIsQrModalOpen(false)}
          initialTable={tableNumber || '04'}
        />
      </div>
    );
  }
