'use client';

import { Star, CheckCircle, MapPin } from 'lucide-react';
import { REVIEWS } from '@/data/coffee-menu';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            <span>Ulasan Google Maps Asli</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Kata Mereka yang Sering Nongkrong
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed">
            Review jujur tanpa rekayasa dari teman-teman mahasiswa dan karyawan yang udah langganan di Warkop Sentosa.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-black text-base font-display">4.9 / 5.0</span>
            <span className="text-stone-400 text-xs">(180+ Ulasan di Google Maps)</span>
          </div>
        </div>

        {/* Real Google Maps Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 flex flex-col justify-between hover:border-[#EA580C]/40 hover:bg-[#221A15] transition-all duration-200 relative group shadow-lg"
            >
              <div>
                {/* Header: User Avatar & Google Verified */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white font-black flex items-center justify-center text-sm shadow-md">
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
                  <span className="text-stone-400 text-[11px]">{rev.timeAgo}</span>
                </div>

                {/* Comment Content */}
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Verified Tag */}
              <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#EA580C]" />
                  <span>Google Review</span>
                </span>
                <span className="text-emerald-400 font-medium">Pengunjung Nyata</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
