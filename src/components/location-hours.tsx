'use client';

import { MapPin, Clock, ExternalLink, Bike, Send, ShieldCheck, Wifi, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

export default function LocationHours() {
  return (
    <section id="lokasi" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Lokasi Kita</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Alamat &amp; Jam Buka
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed">
            Gampang dicari, parkiran motor luas dan aman, serta buka sampai larut malam buat nemenin waktu nongkrongmu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
            
            {/* Parking Highlight */}
            <div className="rounded-3xl bg-[#1C1612] border border-[#EA580C]/35 p-6 sm:p-7 space-y-2 shadow-lg">
              <div className="flex items-center gap-3 text-[#EA580C]">
                <div className="w-11 h-11 rounded-2xl bg-[#EA580C]/20 flex items-center justify-center">
                  <Bike className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Parkiran Motor Luas &amp; Aman
                  </h3>
                  <p className="text-[11px] text-[#F59E0B] font-semibold">
                    Aman &bull; Muat banyak motor &bull; Ada petugas jaga
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal pt-1">
                Gak perlu pusing rebutan parkir pas lagi nongkrong rame-rame bareng temen satu squad. Area parkiran langsung di depan warkop, terang, dan selalu diawasi.
              </p>
            </div>

            {/* Hours Card */}
            <div className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 space-y-4 shadow-md">
              <div className="flex items-center gap-3 text-[#EA580C]">
                <Clock className="w-5 h-5" />
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Jam Buka Warkop
                </h3>
              </div>
              
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300 font-normal">Senin &ndash; Jumat (Hari Kerja)</span>
                  <span className="font-extrabold text-[#F59E0B] font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300 font-normal">Sabtu &ndash; Minggu (Akhir Pekan)</span>
                  <span className="font-extrabold text-[#F59E0B] font-mono">{CAFE_INFO.operatingHours.weekends}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 font-normal">
                *Dapur Indomie, mendoan anget, dan kopi susu tetap melayani sampai jam tutup!
              </p>
            </div>

            {/* Address */}
            <div className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 space-y-3 shadow-md">
              <div className="flex items-center gap-3 text-[#EA580C]">
                <MapPin className="w-5 h-5" />
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Alamat Lengkap
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                {CAFE_INFO.address}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-[#EA580C]/25 hover:scale-105 active:scale-95"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Buka Petunjuk di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#201914] text-stone-200 hover:text-white border border-stone-700 hover:border-[#EA580C] text-xs font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Card: Cozy Atmosphere Highlights */}
          <div className="lg:col-span-6 rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-3 py-1 rounded-full border border-[#EA580C]/30">
                Paling Asyik &amp; Nyaman
              </span>
              <h3 className="text-2xl font-extrabold text-white font-display">
                Tempat Nongkrong Bebas Ribet
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                Mau ngerjain tugas mandiri, kerja remote, kejar deadline skripsi, atau sekadar mabar santai &mdash; semua fasilitas sudah disiapkan agar kamu betah berjam-jam tanpa perlu khawatir.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                  <span>Colokan listrik tersedia di setiap sudut dan meja</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                  <span>WiFi kencang anti lag bebas FUP kuota</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                  <span>Pilihan duduk meja kursi atau lesehan luas</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                  <span>Sirkulasi udara segar (area outdoor &amp; smoking ramah)</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Bar */}
            <div className="pt-6 border-t border-stone-800 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-xs font-bold text-white">Mau tanya ketersediaan tempat atau menu hari ini?</p>
                <p className="text-[11px] text-stone-400 font-normal">Hubungi admin WhatsApp kita, siap bantu.</p>
              </div>

              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-emerald-950/40"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
