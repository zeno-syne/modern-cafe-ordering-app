'use client';

import { Sparkles, HeartHandshake, Flame, Globe } from 'lucide-react';

export default function Story() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Kemitraan Petani Mikro Nusantara',
      description: 'Bekerja sama langsung dengan petani kopi di Takengon Gayo, Kintamani, dan Bajawa Flores lewat direct trade berkeadilan.',
    },
    {
      icon: Flame,
      title: 'Micro-Batch Specialty Roasting',
      description: 'Disangrai segar in-house setiap pekan dalam kuantitas terbatas untuk mempertahankan profil aromatik dan sweetness alami biji.',
    },
    {
      icon: Globe,
      title: 'Warkop Vibe. Senopati Standard.',
      description: 'Menjaga jiwa warkop yang akrab dan egaliter, dieksekusi dengan standar racikan barista kompetisi serta estetika ruang temaram mewah.',
    },
  ];

  return (
    <section id="filosofi" className="py-24 md:py-32 relative bg-[#120F0E] border-y border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Filosofi &amp; Akar Budaya</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif leading-tight">
              Mendefinisikan Ulang Makna Warkop di Jantung Senopati.
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              Bagi masyarakat Indonesia, warkop adalah ruang dialektika &mdash; tempat lahirnya ide-ide berani, diskusi bisnis santai, dan sanctuary melepas penat setelah seharian beraktivitas di ibukota.
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-light">
              <strong className="text-[#C5A059] font-medium">Warkop Sentosa</strong> mengangkat kultur tersebut ke level tertinggi: memadukan kehangatan sapaan khas warkop dengan mesin espresso La Marzocco, biji specialty lelang internasional, sistem vinyl audio analog, dan kemudahan fasilitas valet gratis.
            </p>

            <div className="pt-4 flex items-center gap-8 border-t border-stone-800/80">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#E5C07B] font-serif">100%</div>
                <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-light">Specialty Grade</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#E5C07B] font-serif">Senopati</div>
                <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-light">Jakarta Selatan</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#E5C07B] font-serif">Valet</div>
                <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-light">Complimentary</div>
              </div>
            </div>
          </div>

          {/* Right: 3 Core Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#181310] border border-stone-800/80 p-6 sm:p-7 hover:border-[#C5A059]/40 hover:bg-[#1E1714] transition-all duration-300 group shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D0B0A] border border-stone-800 flex items-center justify-center text-[#C5A059] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-serif group-hover:text-[#C5A059] transition-colors mb-1.5">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                        {v.description}
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
