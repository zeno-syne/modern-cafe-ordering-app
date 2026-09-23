'use client';

import Image from 'next/image';
import { ArrowDown, Flame, MapPin, Wifi, Zap, Clock, UtensilsCrossed } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

interface HeroProps {
  onScrollToMenu?: () => void;
  onScrollToLocation?: () => void;
}

export default function Hero({ onScrollToMenu, onScrollToLocation }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#18130F]">
      
      {/* Background Image: Bright Warm-Tone Warkop Scene */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/warkop-hero.jpg"
          alt="Suasana Warkop Sentosa Nongkrong dan Nugas"
          fill
          priority
          className="object-cover object-center scale-100 opacity-45 brightness-95 contrast-105"
        />
        {/* Warm Golden Glow Overlays - keeping it warm, inviting, not overly dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/65 to-[#14110E]/75" />
        <div className="absolute inset-0 bg-[#EA580C]/5 mix-blend-color-burn" />
      </div>

      {/* Atmospheric Warm Ambient Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-[#EA580C]/20 via-[#F59E0B]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Kicker: Teks kecil di atas judul */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs sm:text-sm font-bold tracking-wide shadow-md backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping" />
          <span>{CAFE_INFO.kicker}</span>
        </div>

        {/* Judul Utama (Headline) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1] max-w-4xl mx-auto drop-shadow-md">
          Kopi Enak, WiFi Kencang,{' '}
          <span className="bg-gradient-to-r from-[#FDE047] via-[#F97316] to-[#EA580C] bg-clip-text text-transparent">
            Nongkrong Sampai Pagi.
          </span>
        </h1>

        {/* Deskripsi (Sub-headline) */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5EDE4]/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Tempat pelarian paling pas buat nugas, mabar, atau sekadar ngobrol ngalor-ngidul sama teman. Harga merakyat, rasa tetap pejabat.
        </p>

        {/* Tombol CTA: Ubah dari "Reservasi" menjadi "Lihat Menu" dan "Lokasi Kita" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
          <button
            onClick={() => onScrollToMenu ? onScrollToMenu() : scrollTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white font-extrabold text-sm tracking-wide shadow-lg shadow-[#EA580C]/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-white" />
            <span>Lihat Menu</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => onScrollToLocation ? onScrollToLocation() : scrollTo('lokasi')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#241D17]/90 hover:bg-[#2F261F] text-[#F5EDE4] hover:text-[#F59E0B] border border-stone-700/80 hover:border-[#EA580C]/50 text-sm font-bold tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#EA580C]" />
            <span>Lokasi Kita</span>
          </button>
        </div>

        {/* Quick Badges: WiFi Dewa, Colokan, Buka s/d 01.00 Pagi, Menu Mulai 8rb */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#F5EDE4]/80 border-t border-stone-800/80 max-w-3xl mx-auto">
          <div className="flex items-center gap-1.5 font-medium text-white">
            <Wifi className="w-4 h-4 text-[#F59E0B]" />
            <span>WiFi Dewa &bull; Bebas FUP</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-white">
            <Zap className="w-4 h-4 text-[#F59E0B]" />
            <span>Colokan Di Mana-mana</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-white">
            <Clock className="w-4 h-4 text-[#F59E0B]" />
            <span>Buka s/d 01.00 Pagi</span>
          </div>

          <div className="flex items-center gap-1.5 font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
            <span>Menu Mulai Rp 8.000</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div 
        onClick={() => scrollTo('kenapa-kami')}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-stone-400 hover:text-[#EA580C] transition-colors cursor-pointer"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
