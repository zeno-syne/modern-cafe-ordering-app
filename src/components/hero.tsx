'use client';

import Image from 'next/image';
import { Coffee, ArrowDown, Calendar, Sparkles, Star, Car, ShieldCheck } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

interface HeroProps {
  onScrollToMenu?: () => void;
  onScrollToReservation?: () => void;
}

export default function Hero({ onScrollToMenu, onScrollToReservation }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0D0B0A]">
      
      {/* Background with Dark Moody Lighting */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Warkop Sentosa Ruang Temaram Estetik"
          fill
          priority
          className="object-cover object-center scale-105 opacity-40 brightness-75 contrast-125"
        />
        {/* Multilayer Dark Vignette for True Temaram Vibe */}
        <div className="absolute inset-0 bg-[#0D0B0A]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/60 to-[#0D0B0A]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,11,10,0.9)_100%)]" />
      </div>

      {/* Atmospheric Gold / Espresso Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-gold rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 ambient-glow-espresso rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold backdrop-blur-xl shadow-xl shadow-black/60">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="tracking-wider uppercase text-[11px] font-bold">
            {CAFE_INFO.tagline}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-serif leading-[1.1] max-w-4xl mx-auto drop-shadow-xl">
          Nikmati Secangkir Kopi Terbaik di{' '}
          <span className="bg-gradient-to-r from-[#F5EFEB] via-[#E5C07B] to-[#C5A059] bg-clip-text text-transparent gold-glow">
            Ruang Temaram Estetik
          </span>
        </h1>

        {/* Sub-description */}
        <p className="text-base sm:text-lg md:text-xl text-[#EDE6DD]/80 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
          Mendefinisikan ulang kultur warkop lokal dengan racikan kopi specialty kelas dunia, alunan piringan hitam analog, dan kehangatan ruang temaram di kawasan Senopati.
        </p>

        {/* Action Buttons: Eksplorasi Menu & Reservasi Tempatmu */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full button-gold font-bold text-sm tracking-wide cursor-pointer group"
          >
            <Coffee className="w-4 h-4 text-[#0D0B0A] transition-transform group-hover:rotate-12" />
            <span>Eksplorasi Menu</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo('reservation')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel hover:border-[#C5A059] text-[#EDE6DD] hover:text-[#C5A059] text-sm font-semibold tracking-wide shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Reservasi Tempatmu</span>
          </button>
        </div>

        {/* Valet Parking & Senopati Highlight Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-[#EDE6DD]/70 border-t border-stone-800/80 max-w-2xl mx-auto">
          {/* Complimentary Valet */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059]">
            <Car className="w-3.5 h-3.5" />
            <span className="font-semibold text-xs">Complimentary Valet Parking</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
            <span className="font-semibold text-white">4.9/5.0</span>
            <span className="text-stone-400">(1,200+ Reviews)</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#EDE6DD]/80">Senopati, Jakarta Selatan</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-500 hover:text-[#C5A059] transition-colors cursor-pointer">
        <ArrowDown
          onClick={() => scrollTo('menu')}
          className="w-4 h-4 animate-bounce"
        />
      </div>
    </section>
  );
}
