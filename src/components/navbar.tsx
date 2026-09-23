'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, Car, Calendar } from 'lucide-react';
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
    { label: 'Menu & Reserve', href: '#menu' },
    { label: 'Filosofi', href: '#filosofi' },
    { label: 'Fasilitas & Valet', href: '#suasana' },
    { label: 'Ulasan', href: '#ulasan' },
    { label: 'Lokasi & Jam', href: '#lokasi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0B0A]/92 backdrop-blur-2xl border-b border-[#C5A059]/20 shadow-2xl shadow-black/80 py-3'
          : 'bg-[#0D0B0A]/75 backdrop-blur-md border-b border-stone-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8C6D2D] flex items-center justify-center text-[#0D0B0A] shadow-lg shadow-[#C5A059]/20 group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-serif">
                {CAFE_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
                Senopati &bull; Specialty &amp; Vinyl
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1A1512]/80 border border-[#C5A059]/15 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#EDE6DD]/75 hover:text-[#C5A059] rounded-full hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA: Valet Tag & Reservation Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
              <Car className="w-3.5 h-3.5" />
              <span>Free Valet</span>
            </span>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full button-gold text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservasi Meja</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#1A1512] text-[#EDE6DD] border border-stone-800 hover:border-[#C5A059]/50 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0D0B0A]/95 border-b border-[#C5A059]/20 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#EDE6DD] hover:bg-white/5 hover:text-[#C5A059] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#C5A059] px-2 py-1">
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                Valet Parking Complimentary
              </span>
              <span className="text-stone-400">Senopati No. 42</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenReservation) onOpenReservation();
              }}
              className="w-full py-3 rounded-full button-gold font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservasi Meja Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
