'use client';

import { MapPin, Clock, ExternalLink, Bike, Send } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';
import { useOperationalStatus } from '@/hooks/use-operational-status';

export default function LocationHours() {
  const { isOpen, statusLabel, detailLabel, currentTimeWIB } = useOperationalStatus();
  return (
    <section id="location" className="scroll-mt-24 py-20 sm:py-28 md:py-32 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Visit Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Location &amp; Operating Hours
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed px-2">
            Conveniently situated with secure on-site parking and late-night opening hours to fuel your work and meetups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-between">
            
            {/* Parking Highlight with Double-Bezel */}
            <div className="bezel-shell">
              <div className="bezel-core !bg-[#1E1712] ring-1 ring-[#EA580C]/30 space-y-2 !p-5 sm:!p-6">
                <div className="flex items-center gap-3 text-[#EA580C]">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EA580C]/20 flex items-center justify-center flex-shrink-0">
                    <Bike className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      Spacious &amp; Secure Parking
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#F59E0B] font-semibold">
                      Secure &bull; Ample vehicle capacity &bull; Attendant on duty
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal pt-1">
                  Never worry about parking when visiting with your team or squad. Well-lit parking area directly in front of the cafe with constant supervision.
                </p>
              </div>
            </div>

            {/* Hours Card with Double-Bezel */}
            <div className="bezel-shell">
              <div className="bezel-core space-y-3 !p-5 sm:!p-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[#EA580C]">
                    <Clock className="w-5 h-5" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      Cafe Hours
                    </h3>
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      isOpen
                        ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                        : 'bg-rose-950/70 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isOpen
                          ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse'
                          : 'bg-rose-400'
                      }`}
                    />
                    <span>{statusLabel} ({currentTimeWIB})</span>
                  </div>
                </div>
                
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                    <span className="text-stone-300 font-normal">Monday &ndash; Friday</span>
                    <span className="font-extrabold text-[#F59E0B] font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                    <span className="text-stone-300 font-normal">Saturday &ndash; Sunday</span>
                    <span className="font-extrabold text-[#F59E0B] font-mono">{CAFE_INFO.operatingHours.weekends}</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 font-normal">
                  *{detailLabel}. Hot kitchen, signature ramen, and handcrafted coffee served right up to closing!
                </p>
              </div>
            </div>

            {/* Address with Double-Bezel */}
            <div className="bezel-shell">
              <div className="bezel-core space-y-3 !p-5 sm:!p-6">
                <div className="flex items-center gap-2.5 sm:gap-3 text-[#EA580C]">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Full Address
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                  {CAFE_INFO.address}
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center sm:justify-between gap-2.5 pl-4 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-[#EA580C]/25 hover:scale-[1.02] active:scale-[0.96]"
                  >
                    <span>Open Google Maps</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>

                  <a
                    href={CAFE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1410] hover:bg-[#251D18] text-stone-200 hover:text-white border border-stone-700 hover:border-[#EA580C] text-xs font-semibold active:scale-[0.96] transition-all"
                  >
                    <Send className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Card: Atmosphere Highlights in Double-Bezel Enclosure */}
          <div className="lg:col-span-6 bezel-shell">
            <div className="bezel-core space-y-4 !p-5 sm:!p-7">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-3 py-1 rounded-full border border-[#EA580C]/30">
                  Comfort &amp; Productivity
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  Hassle-Free Work &amp; Dine Space
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                  Whether you are tackling remote sprints, finishing academic deadlines, or relaxing with friends &mdash; our space is equipped with everything you need for productive comfort.
                </p>

                <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-3">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>Universal power outlets accessible from every table and corner</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>High-speed dedicated Wi-Fi with zero bandwidth throttling</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>Ergonomic work tables, cushioned chairs, and lounge seating</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>Fresh airflow with air-conditioned indoor &amp; designated smoking outdoor</span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Bar with Nested Action Button */}
              <div className="pt-5 border-t border-stone-800 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 mt-5">
                <div>
                  <p className="text-xs font-bold text-white">Questions or want to check table availability?</p>
                  <p className="text-[11px] text-stone-400 font-normal">Our team responds promptly on WhatsApp.</p>
                </div>

                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 pl-4 pr-1.5 py-2 sm:py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-emerald-950/40 active:scale-95 cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0">
                    <Send className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
