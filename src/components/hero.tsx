'use client';

import Image from 'next/image';
import { Coffee, ArrowDown, Calendar, Sparkles, Wifi, Zap, GraduationCap, Flame, Users } from 'lucide-react';
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
    <section id="beranda" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#14110E]">
      
      {/* Background Image with Warm Cozy Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Suasana Nongkrong Nugas Warkop Sentosa"
          fill
          priority
          className="object-cover object-center scale-105 opacity-35 brightness-90 contrast-110"
        />
        {/* Warm Vignette Overlay */}
        <div className="absolute inset-0 bg-[#14110E]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/60 to-[#14110E]/90" />
      </div>

      {/* Atmospheric Warm Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] ambient-glow-warm rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241D17] border border-[#E07A2A]/40 text-[#E29D52] text-xs font-semibold backdrop-blur-md shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#E07A2A]" />
          <span className="tracking-wide uppercase text-[11px] font-bold">
            {CAFE_INFO.tagline}
          </span>
        </div>

        {/* Catchy Relatable Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1] max-w-4xl mx-auto">
          Tempat Pelarian Paling Nyaman Buat{' '}
          <span className="bg-gradient-to-r from-[#F5EDE4] via-[#F97316] to-[#E07A2A] bg-clip-text text-transparent">
            Nugas &amp; Mabar
          </span>
        </h1>

        {/* Sub-description */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5EDE4]/85 max-w-2xl mx-auto leading-relaxed font-normal">
          Warkop kekinian yang ramah di kantong mahasiswa, fresh graduate, dan anak muda. Colokan melimpah, WiFi 150 Mbps anti-lag, area lesehan empuk, dan buka sampai jam 2 pagi!
        </p>

        {/* Student Promo Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-xs sm:text-sm text-[#F5EDE4] font-medium max-w-xl mx-auto">
          <GraduationCap className="w-4 h-4 text-[#E07A2A] flex-shrink-0" />
          <span><strong>Promo Mahasiswa:</strong> Tunjukkan KTM aktif dan dapatkan diskon 10% setiap hari!</span>
        </div>

        {/* Action Buttons: Menu & Booking Meja */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => scrollTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full button-warm font-extrabold text-sm tracking-wide cursor-pointer group"
          >
            <Flame className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
            <span>Lihat Menu &amp; Paket Combo</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo('reservation')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full cozy-card hover:border-[#E07A2A] text-[#F5EDE4] hover:text-[#E07A2A] text-sm font-bold tracking-wide shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#E07A2A]" />
            <span>Booking Meja Santai</span>
          </button>
        </div>

        {/* Quick Highlights: Colokan, WiFi, Harga */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-[#F5EDE4]/75 border-t border-stone-800/80 max-w-3xl mx-auto">
          <div className="flex items-center gap-1.5 font-semibold text-white">
            <Zap className="w-4 h-4 text-[#E07A2A]" />
            <span>Colokan di Setiap Meja</span>
          </div>

          <div className="flex items-center gap-1.5 font-semibold text-white">
            <Wifi className="w-4 h-4 text-[#E07A2A]" />
            <span>WiFi 150 Mbps Bebas FUP</span>
          </div>

          <div className="flex items-center gap-1.5 font-semibold text-white">
            <Coffee className="w-4 h-4 text-[#E07A2A]" />
            <span>Menu Mulai Rp10.000</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#F5EDE4]/90">Buka Sampai 02.00 Subuh</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-500 hover:text-[#E07A2A] transition-colors cursor-pointer">
        <ArrowDown
          onClick={() => scrollTo('menu')}
          className="w-4 h-4 animate-bounce"
        />
      </div>
    </section>
  );
}
