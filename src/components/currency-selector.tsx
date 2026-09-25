'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCart, Currency, CURRENCY_CONFIG } from '@/context/cart-context';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface CurrencySelectorProps {
  compact?: boolean;
}

export default function CurrencySelector({ compact = false }: CurrencySelectorProps) {
  const { currency, setCurrency } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const currencies: Currency[] = ['IDR', 'USD', 'SGD', 'EUR'];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current currency: ${CURRENCY_CONFIG[currency].label}. Click to switch currency`}
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-1.5 rounded-full border border-stone-800 hover:border-[#EA580C]/50 bg-[#1D1713] hover:bg-[#251D18] text-[#F5EDE4] text-xs font-semibold shadow-sm transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:outline-none ${
          compact ? 'px-2.5 py-1.5' : 'px-3 py-1.5'
        }`}
      >
        <span className="text-sm leading-none">{CURRENCY_CONFIG[currency].flag}</span>
        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#F59E0B]">
          {currency}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Currency selection"
          className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#1C1612] border border-stone-800 shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-stone-400 border-b border-stone-800/80 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#EA580C]" />
            <span>Select Currency</span>
          </div>

          <div className="pt-1 space-y-0.5">
            {currencies.map((c) => {
              const config = CURRENCY_CONFIG[c];
              const isSelected = currency === c;

              return (
                <button
                  key={c}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setCurrency(c);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#EA580C]/20 text-[#F59E0B] font-bold'
                      : 'text-stone-300 hover:bg-stone-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{config.flag}</span>
                    <span>{config.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#F59E0B]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
