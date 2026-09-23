'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, MapPin, UtensilsCrossed } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

export default function Navbar() {
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
    { label: 'Fasilitas Warkop', href: '#kenapa-kami' },
    { label: 'Menu & Harga', href: '#menu' },
    { label: 'Ulasan Google', href: '#ulasan' },
    { label: 'Lokasi Kita', href: '#lokasi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14110E]/95 backdrop-blur-xl border-b border-[#EA580C]/20 shadow-xl shadow-black/60 py-3'
          : 'bg-[#14110E]/85 backdrop-blur-md border-b border-stone-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/30 group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 font-display">
                {CAFE_INFO.name}
              </span>
              <span className="text-[11px] font-bold text-[#F59E0B] block">
                Nongkrong &bull; Nugas &bull; Mabar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1F1813]/90 border border-stone-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-bold text-[#F5EDE4]/85 hover:text-[#F59E0B] rounded-full hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs: Lihat Menu & Lokasi */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="#menu"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#241D17] hover:bg-[#2F261F] text-[#F5EDE4] hover:text-[#F59E0B] border border-stone-700/70 text-xs font-bold transition-all"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Lihat Menu</span>
            </Link>

            <Link
              href="#lokasi"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#EA580C]/25 hover:scale-105 active:scale-95 transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Lokasi Kita</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-[#201A16] text-[#F5EDE4] border border-stone-800 hover:border-[#EA580C]/50 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#EA580C]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#18130F]/98 border-b border-[#EA580C]/20 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#F5EDE4] hover:bg-white/5 hover:text-[#F59E0B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2">
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-full bg-[#241D17] text-[#F5EDE4] text-xs font-bold text-center border border-stone-700 flex items-center justify-center gap-1.5"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Lihat Menu</span>
            </Link>

            <Link
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Lokasi Kita</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
