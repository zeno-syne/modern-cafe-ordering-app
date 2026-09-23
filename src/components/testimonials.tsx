'use client';

import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/coffee-menu';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#E07A2A]" />
            <span>Kata Teman Tongkrongan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Pengalaman Nugas &amp; Mabar di Sini
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Cerita jujur dari teman-teman mahasiswa, fresh graduate, dan remote worker yang rutin nongkrong di Warkop Sentosa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 flex flex-col justify-between hover:border-[#E07A2A]/40 hover:bg-[#221B16] transition-all duration-200 relative group shadow-md"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E07A2A] text-[#E07A2A]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-stone-700 group-hover:text-[#E07A2A]/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E07A2A] to-[#B8530C] text-white font-bold flex items-center justify-center text-xs shadow-md">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#E29D52] font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
