'use client';

import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/coffee-menu';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-20 md:py-28 relative bg-stone-900/30 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Kesan Para Penikmat Kopi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-100 font-serif">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Dari penikmat kopi harian hingga Q-Grader bersertifikat yang mempercayakan ritual ngopi mereka di Warkop Sentosa.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-stone-900/70 border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 relative group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-stone-700 group-hover:text-amber-500/50 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-stone-950 font-bold flex items-center justify-center text-xs shadow-md">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100 font-serif">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-stone-400">
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
