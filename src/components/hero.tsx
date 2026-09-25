'use client';

import Image from 'next/image';
import { ArrowDown, MapPin, Wifi, Zap, Clock } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';
import { useOperationalStatus } from '@/hooks/use-operational-status';

interface HeroProps {
  onScrollToMenu?: () => void;
  onScrollToLocation?: () => void;
}

export default function Hero({ onScrollToMenu, onScrollToLocation }: HeroProps) {
  const { isOpen, statusLabel, detailLabel } = useOperationalStatus();
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="scroll-mt-28 relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#14110E]">
      
      {/* Background Image: Bright Warm-Tone Cafe Scene */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/warkop-hero.jpg"
          alt="Sentosa Cafe Ambiance and Dining"
          fill
          priority
          className="object-cover object-center scale-100 opacity-40 brightness-95 contrast-105"
        />
        {/* Soft atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/60 to-[#14110E]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#14110E]/40 to-[#14110E]" />
      </div>

      {/* Atmospheric Warm Ambient Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[720px] h-[320px] sm:h-[450px] md:h-[520px] bg-gradient-to-tr from-[#EA580C]/25 via-[#F59E0B]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content Container with spatial rhythm */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-7">
        
        {/* Eyebrow / Kicker & Live Status Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs sm:text-sm font-bold tracking-wide shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping" />
            <span>{CAFE_INFO.kicker}</span>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md backdrop-blur-md border transition-colors ${
              isOpen
                ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/70 border-rose-500/40 text-rose-300'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                isOpen
                  ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse'
                  : 'bg-rose-400'
              }`}
            />
            <span>{statusLabel} &bull; {detailLabel}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.18] sm:leading-[1.1] max-w-4xl mx-auto drop-shadow-sm px-1">
          Artisanal Brews, Fast Fiber,{' '}
          <span className="bg-gradient-to-r from-[#FDE047] via-[#F97316] to-[#EA580C] bg-clip-text text-transparent">
            Open Till Late.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-lg md:text-xl text-[#F5EDE4]/90 max-w-2xl mx-auto leading-relaxed font-normal px-2">
          {CAFE_INFO.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
          <button
            onClick={() => onScrollToMenu ? onScrollToMenu() : scrollTo('menu')}
            className="group w-full sm:w-auto inline-flex items-center justify-between gap-4 pl-7 pr-2.5 py-3 sm:py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white font-black text-sm tracking-wide shadow-xl shadow-[#EA580C]/30 hover:scale-[1.03] active:scale-[0.96] transition-all duration-200 cursor-pointer"
          >
            <span>Explore Menu &amp; Order</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-y-0.5">
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
          </button>

          <button
            onClick={() => onScrollToLocation ? onScrollToLocation() : scrollTo('location')}
            className="group w-full sm:w-auto inline-flex items-center justify-between gap-4 pl-6 pr-2.5 py-3 sm:py-2.5 rounded-full bg-[#201914]/90 hover:bg-[#2A211B] text-[#F5EDE4] hover:text-[#F59E0B] border border-stone-700/90 hover:border-[#EA580C]/50 text-sm font-bold tracking-wide shadow-md hover:scale-[1.03] active:scale-[0.96] transition-all duration-200 cursor-pointer"
          >
            <span>Location &amp; Hours</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-800/90 border border-stone-700 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EA580C]" />
            </div>
          </button>
        </div>

        {/* Feature Highlights Bar */}
        <div className="pt-6 sm:pt-8 max-w-3xl mx-auto w-full">
          <div className="bezel-shell">
            <div className="bezel-core !p-3 sm:!p-3.5 !flex-row flex-wrap items-center justify-center sm:justify-around gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#F5EDE4]/85">
              <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-white">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EA580C]/20 flex items-center justify-center text-[#F59E0B]">
                  <Wifi className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>150 Mbps Dedicated Fiber</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-stone-800" />

              <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-white">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EA580C]/20 flex items-center justify-center text-[#F59E0B]">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>Power Outlets at Every Booth</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-stone-800" />

              <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-white">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EA580C]/20 flex items-center justify-center text-[#F59E0B]">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>{isOpen ? detailLabel : 'Opens at 9:00 AM'}</span>
              </div>

              <div className="hidden md:block w-px h-4 bg-stone-800" />

              <div className="flex items-center gap-1 font-bold text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-800/40 text-[11px] sm:text-xs">
                <span>From IDR 8,000</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div 
        onClick={() => scrollTo('kenapa-kami')}
        className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 text-stone-500 hover:text-[#EA580C] active:scale-90 transition-all cursor-pointer p-2"
        aria-label="Scroll down to features"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
