'use client';

import Image from 'next/image';
import { Wifi, Zap, Wind, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Story() {
  const points = [
    {
      icon: Wifi,
      title: 'WiFi Dewa & Colokan Dimana-mana.',
      description: 'Nggak perlu takut baterai habis atau nge-lag pas lagi push rank / kejar deadline skripsi.',
      badge: 'Anti Lag & Full Power',
    },
    {
      icon: Wind,
      title: 'Area Lesehan & Smoking Luas.',
      description: 'Mau duduk di kursi atau selonjoran di lesehan, bebas! Ruang sirkulasi udara juga aman.',
      badge: 'Bisa Selonjoran Santai',
    },
    {
      icon: Clock,
      title: 'Buka Sampai Tengah Malam.',
      description: 'Otak baru encer pas malam hari? Tenang, kita temenin sampai jam 1 pagi.',
      badge: 'Teman Lembur & Begadang',
    },
  ];

  return (
    <section id="kenapa-kami" className="scroll-mt-24 py-20 sm:py-28 md:py-32 relative bg-[#17120E] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Kenapa Nongkrong di Sini?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Fasilitas Warkop Sentosa
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-stone-300 max-w-xl mx-auto leading-relaxed font-normal px-2">
            Bukan sekadar ngopi, tapi tempat nyaman buat nugas berjam-jam, mabar santai bareng squad, atau nongkrong seru tanpa canggung.
          </p>
        </div>

        {/* Content Layout: Candid Photo + 3 Main Youth Focus Points with Double-Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Candid Photo in Double-Bezel Framing */}
          <div className="lg:col-span-5 w-full">
            <div className="bezel-shell">
              <div className="relative rounded-[calc(1.75rem-0.375rem)] overflow-hidden border border-stone-800/80 aspect-[4/3] group">
                <Image
                  src="/warkop-candid.jpg"
                  alt="Suasana anak muda nongkrong dan nugas santai di Warkop Sentosa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#1C1612]/90 backdrop-blur-md border border-stone-800 text-xs">
                  <div className="flex items-center gap-2 text-white font-bold mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Paling Pewe Buat Nugas &amp; Mabar</span>
                  </div>
                  <p className="text-stone-300 font-normal text-[11px] leading-tight">
                    Suasana hidup, ramah, dan bebas tanpa batasan waktu duduk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Core Youth Focus Points with Double-Bezel Cards */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => {
              const MainIcon = pt.icon;
              return (
                <div key={idx} className="bezel-shell">
                  <div className="bezel-core !p-4 sm:!p-6 !flex-row items-start gap-3.5 sm:gap-5">
                    {/* Bold Casual Line Icon */}
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#120E0B] border-2 border-[#EA580C]/40 flex items-center justify-center text-[#F59E0B] flex-shrink-0 group-hover:border-[#EA580C] group-hover:scale-105 transition-all shadow-inner">
                      <MainIcon className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.2]" />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white font-display group-hover:text-[#F59E0B] transition-colors">
                          {pt.title}
                        </h3>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-2.5 py-0.5 rounded-full border border-[#EA580C]/30">
                          {pt.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
