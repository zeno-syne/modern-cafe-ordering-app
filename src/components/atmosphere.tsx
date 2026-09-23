'use client';

import { Wifi, Zap, Dices, Coffee, Clock, Armchair, Sparkles } from 'lucide-react';
import { AMENITIES } from '@/data/coffee-menu';
import VinylPlayer from './vinyl-player';

export default function Atmosphere() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'plug':
        return <Zap className="w-6 h-6 text-[#E07A2A]" />;
      case 'wifi':
        return <Wifi className="w-6 h-6 text-[#E07A2A]" />;
      case 'couch':
        return <Armchair className="w-6 h-6 text-[#E07A2A]" />;
      case 'game':
        return <Dices className="w-6 h-6 text-[#E07A2A]" />;
      case 'coffee':
        return <Coffee className="w-6 h-6 text-[#E07A2A]" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-[#E07A2A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E07A2A]" />;
    }
  };

  return (
    <section id="suasana" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Fasilitas Bintang Lima, Harga Kaki Lima</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Fasilitas Nugas &amp; Mabar Paling Komplit
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            Dirancang khusus buat kamu yang butuh tempat nyaman buat kerja tugas, push rank game bareng squad, atau sekadar ngobrol santai tanpa diburu-buru.
          </p>
        </div>

        {/* 6 Amenities Grid with Bold Highlight on Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#1C1612] border border-stone-800 p-7 hover:border-[#E07A2A]/50 hover:bg-[#221B16] transition-all duration-200 group shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#14110E] border border-stone-800 flex items-center justify-center group-hover:border-[#E07A2A]/40 group-hover:scale-105 transition-all">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E29D52] bg-[#E07A2A]/15 px-3 py-1 rounded-full border border-[#E07A2A]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-[#E07A2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Music Lounge Section */}
        <div className="pt-2">
          <VinylPlayer />
        </div>

      </div>
    </section>
  );
}
