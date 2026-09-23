'use client';

import { Wifi, Zap, Disc3, Coffee, Clock, Sparkles, Car, DoorClosed } from 'lucide-react';
import { AMENITIES } from '@/data/coffee-menu';
import VinylPlayer from './vinyl-player';

export default function Atmosphere() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'car':
        return <Car className="w-5 h-5 text-[#C5A059]" />;
      case 'door':
        return <DoorClosed className="w-5 h-5 text-[#C5A059]" />;
      case 'wifi':
        return <Wifi className="w-5 h-5 text-[#C5A059]" />;
      case 'plug':
        return <Zap className="w-5 h-5 text-[#C5A059]" />;
      case 'music':
        return <Disc3 className="w-5 h-5 text-[#C5A059]" />;
      case 'coffee':
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="suasana" className="py-24 md:py-32 relative bg-[#0D0B0A] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenyamanan Ruang &amp; Fasilitas Eksklusif</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            Didesain untuk Fokus, Temu, dan Eksklusivitas
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            Pencahayaan temaram hangat, peredam akustik alami, sofa kulit empuk, serta layanan valet bebas biaya di kawasan Senopati.
          </p>
        </div>

        {/* 6 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#140F0D] border border-stone-800/80 p-7 hover:border-[#C5A059]/50 hover:bg-[#1C1613] transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0D0B0A] border border-stone-800 flex items-center justify-center mb-5 group-hover:border-[#C5A059]/40 group-hover:scale-105 transition-all">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-[#C5A059] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Curated Vinyl Lounge & Spotify Player Integration */}
        <div className="pt-4">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Live Atmosphere &bull; Vinyl Audio
            </span>
          </div>
          <VinylPlayer />
        </div>

      </div>
    </section>
  );
}
