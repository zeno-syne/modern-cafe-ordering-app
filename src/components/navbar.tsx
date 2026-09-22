'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, Clock, MessageSquareQuote } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Menu Kopi', href: '#menu' },
    { label: 'Filosofi', href: '#filosofi' },
    { label: 'Suasana & Fasilitas', href: '#suasana' },
    { label: 'Ulasan', href: '#ulasan' },
    { label: 'Lokasi & Jam', href: '#lokasi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-2xl border-b border-stone-800/80 shadow-2xl shadow-black/60 py-3'
          : 'bg-stone-950/70 backdrop-blur-lg border-b border-stone-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D97706] to-[#b45309] flex items-center justify-center text-stone-950 shadow-lg shadow-[#D97706]/25 group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-100 flex items-center gap-1.5 font-serif">
                {CAFE_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D97706] font-semibold block">
                Artisan Coffee & Eatery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-900/60 border border-stone-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-[#D97706] rounded-full hover:bg-stone-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action & Live Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock className="w-3.5 h-3.5" />
              <span>Buka • s/d 24:00</span>
            </div>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-[#D97706] hover:bg-[#b45309] text-stone-950 shadow-lg shadow-[#D97706]/25 hover:shadow-[#D97706]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-[#f59e0b]/40"
            >
              <MessageSquareQuote className="w-3.5 h-3.5 text-stone-950" />
              <span>Reservasi Meja</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-stone-900/95 border border-stone-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs font-medium mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Buka Hari Ini: {CAFE_INFO.operatingHours.weekdays}</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-stone-800 mt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenReservation) onOpenReservation();
                }}
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-[#D97706] hover:bg-[#b45309] text-stone-950 shadow-md shadow-[#D97706]/20 transition-all border border-[#f59e0b]/40"
              >
                Reservasi Meja Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
