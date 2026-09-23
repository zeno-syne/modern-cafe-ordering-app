'use client';

import { Star, CheckCircle, MapPin } from 'lucide-react';
import { REVIEWS } from '@/data/coffee-menu';

export default function Testimonials() {
  return (
    <section id="ulasan" className="scroll-mt-24 py-20 sm:py-28 md:py-32 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            <span>Ulasan Google Maps Asli</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Kata Mereka yang Sering Nongkrong
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed px-2">
            Review jujur tanpa rekayasa dari teman-teman mahasiswa dan karyawan yang udah langganan di Warkop Sentosa.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="pt-2 sm:pt-3 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#1C1612] border border-stone-800 shadow-md">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-extrabold text-xs sm:text-sm font-display">4.9 / 5.0</span>
            <span className="text-stone-400 text-[11px] sm:text-xs">(180+ Ulasan Google Maps)</span>
          </div>
        </div>

        {/* Double-Bezel Google Maps Review Cards Grid - 1 Col on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bezel-shell group active:scale-[0.99] transition-all"
            >
              <div className="bezel-core !p-5 sm:!p-6">
                <div>
                  {/* Header: User Avatar & Google Verified Badge */}
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white font-black flex items-center justify-center text-sm shadow-md flex-shrink-0">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white font-display">
                          {rev.name}
                        </h4>
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                      </div>
                      <p className="text-[11px] text-[#F59E0B] font-semibold">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars + Time Ago */}
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-stone-400 text-[11px] font-normal">{rev.timeAgo}</span>
                  </div>

                  {/* Comment Content */}
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Verified Tag Footer */}
                <div className="mt-5 pt-3.5 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#EA580C]" />
                    <span>Google Review</span>
                  </span>
                  <span className="text-emerald-400 font-medium">Pengunjung Nyata</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
