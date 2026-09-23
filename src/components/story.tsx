'use client';

import Image from 'next/image';
import { Wifi, Zap, Wind, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Story() {
  const points = [
    {
      icon: Wifi,
      accentIcon: Zap,
      title: 'WiFi Dewa & Colokan Dimana-mana.',
      description: 'Nggak perlu takut baterai habis atau nge-lag pas lagi push rank / kejar deadline skripsi.',
      badge: 'Anti Lag & Full Power',
    },
    {
      icon: Wind,
      accentIcon: null,
      title: 'Area Lesehan & Smoking Luas.',
      description: 'Mau duduk di kursi atau selonjoran di lesehan, bebas! Ruang sirkulasi udara juga aman.',
      badge: 'Bisa Selonjoran Santai',
    },
    {
      icon: Clock,
      accentIcon: null,
      title: 'Buka Sampai Tengah Malam.',
      description: 'Otak baru encer pas malam hari? Tenang, kita temenin sampai jam 1 pagi.',
      badge: 'Teman Lembur & Begadang',
    },
  ];

  return (
    <section id="kenapa-kami" className="py-20 md:py-28 relative bg-[#17120E] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Kenapa Nongkrong di Sini?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Fasilitas Warkop Sentosa
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed font-normal">
            Bukan sekadar ngopi, tapi tempat nyaman buat nugas berjam-jam, mabar santai bareng squad, atau nongkrong seru tanpa canggung.
          </p>
        </div>

        {/* Content Layout: Candid Photo + 3 Main Youth Focus Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Candid Real Tongkrongan Photo */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-stone-700/80 shadow-2xl group">
            <div className="aspect-[4/3] sm:aspect-[4/3] relative">
              <Image
                src="/warkop-candid.jpg"
                alt="Suasana anak muda nongkrong dan nugas santai di Warkop Sentosa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#1C1612]/90 backdrop-blur-md border border-stone-800 text-xs">
              <div className="flex items-center gap-2 text-white font-bold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Paling Pewe Buat Nugas &amp; Mabar</span>
              </div>
              <p className="text-stone-300 font-light text-[11px]">
                Suasana hidup, ramah, dan bebas tanpa batasan waktu duduk.
              </p>
            </div>
          </div>

          {/* Right: The 3 Main Points */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => {
              const MainIcon = pt.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#1F1813] border border-stone-800 p-6 sm:p-7 hover:border-[#EA580C]/50 hover:bg-[#251D17] transition-all duration-200 group shadow-lg"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Bold Casual Line Icon with rounded-2xl badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#14110E] border-2 border-[#EA580C]/40 flex items-center justify-center text-[#F59E0B] flex-shrink-0 group-hover:border-[#EA580C] group-hover:scale-105 transition-all shadow-inner">
                      <MainIcon className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-[#F59E0B] transition-colors">
                          {pt.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-2.5 py-0.5 rounded-full border border-[#EA580C]/30">
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
