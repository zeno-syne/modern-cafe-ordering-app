'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Printer,
  ExternalLink,
  QrCode,
  Coffee,
  Smartphone,
  UtensilsCrossed,
  Sparkles,
  Wifi,
} from 'lucide-react';

interface TableQrGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTable?: string;
}

const PRESET_TABLES = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  'VIP-1',
  'VIP-2',
];

export default function TableQrGeneratorModal({
  isOpen,
  onClose,
  initialTable = '04',
}: TableQrGeneratorModalProps) {
  const [selectedTable, setSelectedTable] = useState(initialTable);
  const [customTableInput, setCustomTableInput] = useState('');
  const [origin, setOrigin] = useState('https://modern-cafe-ordering-app.vercel.app');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.origin) {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (initialTable) {
      setSelectedTable(initialTable);
    }
  }, [initialTable]);

  // Close on Escape key press (WCAG Keyboard Accessibility)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const targetUrl = `${origin}/?table=${encodeURIComponent(selectedTable.trim() || '01')}`;

  const handlePrint = () => {
    window.print();
  };

  const handleTestOpen = () => {
    window.open(targetUrl, '_blank');
  };

  const handleSelectPreset = (table: string) => {
    setSelectedTable(table);
    setCustomTableInput('');
  };

  const handleCustomInput = (val: string) => {
    setCustomTableInput(val);
    if (val.trim()) {
      setSelectedTable(val.trim());
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-generator-title"
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-2xl my-auto z-10 space-y-4 print:m-0 print:p-0">
        
        {/* Controls Bar (Hidden during print) */}
        <div className="bg-[#1C1612] border border-stone-800 p-4 sm:p-5 rounded-3xl shadow-2xl space-y-4 print:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#EA580C] flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h2 id="qr-generator-title" className="text-base sm:text-lg font-bold text-white font-display">
                  Acrylic Table Stand QR Generator
                </h2>
                <p className="text-xs text-stone-400">
                  Generate print-ready QR cards to display in acrylic table stands for contactless dining
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label="Close QR generator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Table Selector Pills */}
          <div className="space-y-2 pt-1 border-t border-stone-800/80">
            <label className="text-xs font-semibold text-stone-300 block">
              Select Table Designation:
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {PRESET_TABLES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleSelectPreset(t)}
                  className={`min-h-[38px] px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedTable === t && !customTableInput
                      ? 'bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/30 scale-105'
                      : 'bg-[#14110E] hover:bg-stone-800 text-stone-300 border border-stone-800'
                  }`}
                >
                  {t}
                </button>
              ))}
              
              {/* Custom table input */}
              <input
                type="text"
                placeholder="Custom (e.g. VIP-3)"
                value={customTableInput}
                onChange={(e) => handleCustomInput(e.target.value)}
                className="min-h-[38px] w-36 px-3 rounded-xl bg-[#14110E] border border-stone-800 focus:border-[#EA580C] text-xs font-mono text-white placeholder:text-stone-600 outline-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-stone-800/80">
            <div className="text-[11px] text-stone-400 font-mono truncate max-w-xs">
              Direct URL: <span className="text-amber-400">{targetUrl}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleTestOpen}
                className="flex-1 sm:flex-initial min-h-[44px] px-4 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-750 text-stone-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Open simulated table URL in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                <span>Simulate Table Link</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 sm:flex-initial min-h-[44px] px-5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/30 transition-all cursor-pointer active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>Print Table Card (A6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRINTABLE ACRYLIC TABLE TENT CARD (A6 Standard Format) */}
        {/* ========================================================================= */}
        <div className="flex justify-center">
          <div
            id="printable-table-tent"
            className="w-full max-w-[340px] sm:max-w-[360px] bg-gradient-to-b from-[#1C1612] via-[#14110E] to-[#1C1612] text-white rounded-3xl p-6 sm:p-7 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden select-text text-center space-y-4"
          >
            {/* Top Glow & Decorative Pattern */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-400 to-[#EA580C]" />
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

            {/* Header: Brand & Identity */}
            <div className="space-y-1 pt-1">
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#F59E0B] text-[11px] font-bold tracking-wider uppercase">
                <Coffee className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>SENTOSA CAFE &amp; DINER</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">
                Order Straight From Your Table
              </h3>
              <p className="text-[11px] text-stone-400">
                Skip the Counter Queue &bull; Fast Fiber Wi-Fi &bull; Open Late
              </p>
            </div>

            {/* Central Badge: Table Number Highlight */}
            <div className="py-2.5 px-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-amber-950/40 border border-amber-500/30 shadow-inner flex items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                TABLE NO:
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#F59E0B] font-display tracking-wider">
                {selectedTable}
              </span>
            </div>

            {/* High-Contrast Crisp QR Code Container */}
            <div className="p-4 bg-white rounded-2xl shadow-xl border-4 border-amber-500/20 inline-block mx-auto">
              <div className="relative p-2 bg-white rounded-xl">
                <svg
                  viewBox="0 0 200 200"
                  className="w-44 h-44 sm:w-48 sm:h-48 text-stone-950 fill-current"
                  role="img"
                  aria-label={`QR Code Table ${selectedTable}`}
                >
                  {/* Top-Left Finder */}
                  <rect x="10" y="10" width="50" height="50" rx="8" fill="#14110E" />
                  <rect x="18" y="18" width="34" height="34" rx="4" fill="#ffffff" />
                  <rect x="26" y="26" width="18" height="18" rx="3" fill="#EA580C" />

                  {/* Top-Right Finder */}
                  <rect x="140" y="10" width="50" height="50" rx="8" fill="#14110E" />
                  <rect x="148" y="18" width="34" height="34" rx="4" fill="#ffffff" />
                  <rect x="156" y="26" width="18" height="18" rx="3" fill="#EA580C" />

                  {/* Bottom-Left Finder */}
                  <rect x="10" y="140" width="50" height="50" rx="8" fill="#14110E" />
                  <rect x="18" y="148" width="34" height="34" rx="4" fill="#ffffff" />
                  <rect x="26" y="156" width="18" height="18" rx="3" fill="#EA580C" />

                  {/* Data Pattern Mock */}
                  <rect x="70" y="16" width="10" height="14" rx="1" fill="#14110E" />
                  <rect x="88" y="16" width="18" height="8" rx="1" fill="#14110E" />
                  <rect x="114" y="16" width="14" height="8" rx="1" fill="#14110E" />
                  <rect x="70" y="38" width="14" height="12" rx="1" fill="#14110E" />
                  <rect x="92" y="32" width="10" height="22" rx="1" fill="#14110E" />
                  <rect x="110" y="32" width="20" height="10" rx="1" fill="#14110E" />

                  <rect x="16" y="70" width="10" height="16" rx="1" fill="#14110E" />
                  <rect x="34" y="70" width="20" height="8" rx="1" fill="#14110E" />
                  <rect x="16" y="96" width="18" height="8" rx="1" fill="#14110E" />
                  <rect x="42" y="86" width="12" height="24" rx="1" fill="#14110E" />
                  <rect x="16" y="112" width="26" height="10" rx="1" fill="#14110E" />

                  {/* Center Coffee Branding Icon */}
                  <rect x="72" y="72" width="56" height="56" rx="10" fill="#ffffff" stroke="#EA580C" strokeWidth="3" />
                  <circle cx="100" cy="100" r="18" fill="#EA580C" />
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="900"
                    fontFamily="sans-serif"
                  >
                    WS
                  </text>

                  <rect x="136" y="70" width="16" height="8" rx="1" fill="#14110E" />
                  <rect x="160" y="70" width="24" height="8" rx="1" fill="#14110E" />
                  <rect x="144" y="86" width="22" height="12" rx="1" fill="#14110E" />
                  <rect x="174" y="86" width="12" height="24" rx="1" fill="#14110E" />
                  <rect x="136" y="106" width="18" height="14" rx="1" fill="#14110E" />
                  <rect x="162" y="118" width="24" height="8" rx="1" fill="#14110E" />

                  <rect x="70" y="136" width="14" height="18" rx="1" fill="#14110E" />
                  <rect x="92" y="136" width="18" height="8" rx="1" fill="#14110E" />
                  <rect x="118" y="136" width="12" height="12" rx="1" fill="#14110E" />
                  <rect x="70" y="164" width="22" height="8" rx="1" fill="#14110E" />
                  <rect x="100" y="152" width="12" height="26" rx="1" fill="#14110E" />
                  <rect x="120" y="156" width="18" height="8" rx="1" fill="#14110E" />

                  <rect x="144" y="136" width="40" height="8" rx="1" fill="#14110E" />
                  <rect x="144" y="152" width="14" height="18" rx="1" fill="#14110E" />
                  <rect x="166" y="152" width="20" height="10" rx="1" fill="#14110E" />
                  <rect x="150" y="178" width="34" height="12" rx="1" fill="#14110E" />
                </svg>
              </div>
              <p className="text-[10px] text-stone-600 font-mono font-semibold pt-1">
                Scan with Smartphone Camera or Google Lens
              </p>
            </div>

            {/* 3 Steps Customer Instructions */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="p-2 rounded-xl bg-stone-900/70 border border-stone-800 space-y-1">
                <div className="w-6 h-6 mx-auto rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-white">1. Scan QR</div>
                <div className="text-[9px] text-stone-400 leading-tight">Open camera</div>
              </div>

              <div className="p-2 rounded-xl bg-stone-900/70 border border-stone-800 space-y-1">
                <div className="w-6 h-6 mx-auto rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-white">2. Pick Items</div>
                <div className="text-[9px] text-stone-400 leading-tight">Customize menu</div>
              </div>

              <div className="p-2 rounded-xl bg-stone-900/70 border border-stone-800 space-y-1">
                <div className="w-6 h-6 mx-auto rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-white">3. Fast Service</div>
                <div className="text-[9px] text-stone-400 leading-tight">Relax at table</div>
              </div>
            </div>

            {/* WiFi & Footer Notes */}
            <div className="pt-2 border-t border-stone-800/80 space-y-1 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] text-stone-300">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>WiFi Password: <strong className="text-white font-mono">sentosajuara2026</strong></span>
              </div>
              <p className="text-[9px] text-stone-500 pt-0.5">
                Sentosa Cafe &amp; Diner Digital Ordering &bull; Crafted by Zeno
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
