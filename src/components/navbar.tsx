'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, MapPin, UtensilsCrossed, ArrowRight } from 'lucide-react';
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
    <header className="fixed top-3 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-[#18130F]/95 backdrop-blur-2xl border border-[#EA580C]/25 shadow-2xl shadow-black/80 py-2.5 px-5'
            : 'bg-[#18130F]/85 backdrop-blur-xl border border-stone-800/80 shadow-xl py-3 px-5'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with concentric icon container */}
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/30 group-hover:scale-105 transition-transform duration-250">
              <Coffee className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1 font-display">
                {CAFE_INFO.name}
              </span>
              <span className="text-[10px] font-bold text-[#F59E0B] tracking-wide block -mt-0.5">
                Nongkrong &bull; Nugas &bull; Mabar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#120E0B]/80 border border-stone-800/80 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#F5EDE4]/80 hover:text-[#F59E0B] rounded-full hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs: Button-in-Button Trailing Icon */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="#menu"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#F5EDE4]/90 hover:text-white hover:bg-white/5 transition-colors"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Lihat Menu</span>
            </Link>

            <Link
              href="#lokasi"
              className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#EA580C]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Lokasi Kita</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <MapPin className="w-3 h-3" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#201A16] text-[#F5EDE4] border border-stone-800 hover:border-[#EA580C]/50 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#EA580C]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-2 border-t border-stone-800 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 mb-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F5EDE4] hover:bg-white/5 hover:text-[#F59E0B] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800/80">
              <Link
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 rounded-full bg-[#201914] text-[#F5EDE4] text-xs font-bold text-center border border-stone-700 flex items-center justify-center gap-1.5"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Lihat Menu</span>
              </Link>

              <Link
                href="#lokasi"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Lokasi Kita</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
