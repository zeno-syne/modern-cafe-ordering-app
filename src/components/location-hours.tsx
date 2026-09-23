'use client';

import { MapPin, Clock, ExternalLink, Bike, Send } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

export default function LocationHours() {
  return (
    <section id="lokasi" className="scroll-mt-24 py-20 sm:py-28 md:py-32 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Lokasi Kita</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Alamat &amp; Jam Buka
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed px-2">
            Gampang dicari, parkiran motor luas dan aman, serta buka sampai larut malam buat nemenin waktu nongkrongmu.
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
                      Parkiran Motor Luas &amp; Aman
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#F59E0B] font-semibold">
                      Aman &bull; Muat banyak motor &bull; Ada petugas jaga
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal pt-1">
                  Gak perlu pusing rebutan parkir pas lagi nongkrong rame-rame bareng temen satu squad. Area parkiran langsung di depan warkop, terang, dan selalu diawasi.
                </p>
              </div>
            </div>

            {/* Hours Card with Double-Bezel */}
            <div className="bezel-shell">
              <div className="bezel-core space-y-3 !p-5 sm:!p-6">
                <div className="flex items-center gap-2.5 sm:gap-3 text-[#EA580C]">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Jam Buka Warkop
                  </h3>
                </div>
                
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                    <span className="text-stone-300 font-normal">Senin &ndash; Jumat</span>
                    <span className="font-extrabold text-[#F59E0B] font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                    <span className="text-stone-300 font-normal">Sabtu &ndash; Minggu</span>
                    <span className="font-extrabold text-[#F59E0B] font-mono">{CAFE_INFO.operatingHours.weekends}</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 font-normal">
                  *Dapur Indomie, mendoan anget, dan kopi susu tetap melayani sampai jam tutup!
                </p>
              </div>
            </div>

            {/* Address with Double-Bezel */}
            <div className="bezel-shell">
              <div className="bezel-core space-y-3 !p-5 sm:!p-6">
                <div className="flex items-center gap-2.5 sm:gap-3 text-[#EA580C]">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Alamat Lengkap
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
                    <span>Buka Google Maps</span>
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
                    <span>Chat WhatsApp</span>
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
                  Paling Asyik &amp; Nyaman
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  Tempat Nongkrong Bebas Ribet
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                  Mau ngerjain tugas mandiri, kerja remote, kejar deadline skripsi, atau sekadar mabar santai &mdash; semua fasilitas sudah disiapkan agar kamu betah berjam-jam tanpa perlu khawatir.
                </p>

                <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-3">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>Colokan listrik tersedia di setiap sudut dan meja</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>WiFi kencang anti lag bebas FUP kuota</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>Pilihan duduk meja kursi atau lesehan luas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                    <span>Sirkulasi udara segar (area outdoor &amp; smoking ramah)</span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Bar with Nested Action Button */}
              <div className="pt-5 border-t border-stone-800 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 mt-5">
                <div>
                  <p className="text-xs font-bold text-white">Ada pertanyaan atau mau cek meja kosong?</p>
                  <p className="text-[11px] text-stone-400 font-normal">Admin WhatsApp kami langsung balas cepat.</p>
                </div>

                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 pl-4 pr-1.5 py-2 sm:py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-emerald-950/40 active:scale-95 cursor-pointer"
                >
                  <span>Chat WhatsApp</span>
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
