'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, Wifi, Calendar, GraduationCap } from 'lucide-react';
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
    { label: 'Menu & Promo', href: '#menu' },
    { label: 'Fasilitas Nugas', href: '#suasana' },
    { label: 'Tentang Kami', href: '#filosofi' },
    { label: 'Ulasan Teman', href: '#ulasan' },
    { label: 'Lokasi & Jam', href: '#lokasi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14110E]/95 backdrop-blur-xl border-b border-[#E07A2A]/20 shadow-xl shadow-black/60 py-3'
          : 'bg-[#14110E]/80 backdrop-blur-md border-b border-stone-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E07A2A] to-[#B8530C] flex items-center justify-center text-white shadow-md shadow-[#E07A2A]/30 group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                {CAFE_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#E29D52] font-semibold block">
                Nugas &bull; Mabar &bull; Nongkrong
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1F1915]/90 border border-stone-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#F5EDE4]/80 hover:text-[#E07A2A] rounded-full hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA: Student Promo Tag & Booking Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#E07A2A] bg-[#E07A2A]/10 px-3 py-1 rounded-full border border-[#E07A2A]/25">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Diskon KTM 10%</span>
            </span>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full button-warm text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Booking Meja</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#201A16] text-[#F5EDE4] border border-stone-800 hover:border-[#E07A2A]/50 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E07A2A]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#18130F]/98 border-b border-[#E07A2A]/20 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-1.5 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#F5EDE4] hover:bg-white/5 hover:text-[#E07A2A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#E07A2A] px-2 py-1 font-medium">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Promo Mahasiswa: Diskon 10%
              </span>
              <span className="text-stone-400">Tunjukkan KTM</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenReservation) onOpenReservation();
              }}
              className="w-full py-3 rounded-full button-warm font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Booking Meja Nugas / Mabar</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
