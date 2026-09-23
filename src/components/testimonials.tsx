'use client';

import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/coffee-menu';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-24 md:py-32 relative bg-[#0D0B0A] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            <span>Kesan Para Penikmat &amp; Tastemaker</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Dari founder startup, kurator musik, hingga Q-Grader yang mempercayakan momen temu dan ritual ngopi mereka di Senopati.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-[#140F0D] border border-stone-800/80 p-7 flex flex-col justify-between hover:border-[#C5A059]/40 hover:bg-[#1C1613] transition-all duration-300 relative group shadow-lg"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-stone-700 group-hover:text-[#C5A059]/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-stone-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8C6D2D] text-[#0D0B0A] font-bold flex items-center justify-center text-xs shadow-md">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#C5A059] font-light">
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
