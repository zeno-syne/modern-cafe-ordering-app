'use client';

import { Wifi, Zap, Disc3, Coffee, Clock, Sparkles } from 'lucide-react';
import { AMENITIES } from '@/data/coffee-menu';

export default function Atmosphere() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'wifi':
        return <Wifi className="w-5 h-5" />;
      case 'plug':
        return <Zap className="w-5 h-5" />;
      case 'music':
        return <Disc3 className="w-5 h-5" />;
      case 'coffee':
        return <Coffee className="w-5 h-5" />;
      case 'clock':
        return <Clock className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="suasana" className="py-20 md:py-28 relative bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenyamanan Ruang Kerja & Temu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-100 font-serif">
            Didesain untuk Fokus dan Santai
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Pencahayaan temaram hangat, tata akustik yang ramah konsentrasi, dan fasilitas modern yang memanjakan remote worker maupun penikmat obrolan santai.
          </p>
        </div>

        {/* 6 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-stone-900/50 border border-stone-800/80 p-6 hover:border-amber-500/30 hover:bg-stone-900/90 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-800 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-base font-bold text-stone-100 font-serif mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Atmosphere Highlight Feature Box */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/90 to-amber-950/20 border border-stone-800 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Kultur Kerja & Kreasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-100 font-serif">
              WFC (*Work From Cafe*) Tanpa Rasa Canggung
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Kami menyambut Anda yang ingin bekerja sepanjang hari. Tidak ada batasan waktu duduk yang kaku, stopkontak melimpah, dan barisan kudapan lezat pengganjal lapar saat *deadline* mengejar.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-amber-300 font-medium">
              <span>✓ Non-Smoking AC Indoor</span>
              <span>•</span>
              <span>✓ Outdoor Smoking Garden</span>
              <span>•</span>
              <span>✓ Musholla & Restroom Bersih</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
