'use client';

import Image from 'next/image';
import { Coffee, ArrowDown, Calendar, Sparkles, Star } from 'lucide-react';
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
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Aesthetic Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Warkop Sentosa Aesthetic Interior"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayer Dark Aesthetic Overlays for optimal contrast & ambiance */}
        <div className="absolute inset-0 bg-stone-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80" />
      </div>

      {/* Ambient Warm Amber Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/40 text-amber-400 text-xs font-semibold backdrop-blur-md shadow-lg shadow-black/40">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="tracking-wide uppercase text-[11px] font-bold">
            {CAFE_INFO.tagline}
          </span>
        </div>

        {/* Compelling Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-serif leading-[1.1] max-w-4xl mx-auto drop-shadow-md">
          Nikmati Secangkir Kopi Terbaik di{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Ruang Temaram Estetik
          </span>
        </h1>

        {/* Sub-description */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
          {CAFE_INFO.subheading}
        </p>

        {/* Action Buttons: View Menu & Reservation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D97706] hover:bg-[#b45309] text-stone-950 font-extrabold text-sm shadow-xl shadow-[#D97706]/30 hover:shadow-[#D97706]/50 transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95 border border-[#f59e0b]/40"
          >
            <Coffee className="w-4 h-4 text-stone-950 transition-transform group-hover:rotate-12" />
            <span>View Menu</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo('reservation')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-900/90 hover:bg-[#D97706]/15 text-stone-100 hover:text-[#f59e0b] border border-[#D97706]/60 hover:border-[#D97706] text-sm font-bold shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#D97706]" />
            <span>Reservation</span>
          </button>
        </div>

        {/* Quick Highlights / Social Proof */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-stone-300 border-t border-stone-800/60 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-white">4.9/5.0</span>
            <span className="text-stone-400">(1,200+ Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-stone-300">Buka: {CAFE_INFO.operatingHours.weekdays}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-semibold">📍 Senopati, Jakarta</span>
          </div>
        </div>

      </div>
    </section>
  );
}
