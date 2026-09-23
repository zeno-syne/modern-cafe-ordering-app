'use client';

import { MapPin, Clock, Phone, ExternalLink, Calendar, Bike, Send, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

interface LocationHoursProps {
  onOpenReservation?: () => void;
}

export default function LocationHours({ onOpenReservation }: LocationHoursProps) {
  return (
    <section id="lokasi" className="py-20 md:py-28 relative bg-[#14110E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Lokasi Mudah Dijangkau</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Lokasi &amp; Jam Buka Tongkrongan
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Strategis di pinggir jalan utama, parkiran motor luas dan aman, serta buka sampai subuh buat yang mau begadang santai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
            
            {/* Parking Highlight */}
            <div className="rounded-3xl bg-[#1C1612] border border-[#E07A2A]/35 p-6 sm:p-7 space-y-2 shadow-lg">
              <div className="flex items-center gap-3 text-[#E07A2A]">
                <div className="w-10 h-10 rounded-2xl bg-[#E07A2A]/20 flex items-center justify-center">
                  <Bike className="w-5 h-5 text-[#E07A2A]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    Parkiran Motor Luas &amp; Aman
                  </h3>
                  <p className="text-[11px] text-[#E29D52] font-medium">
                    Ada petugas jaga &bull; Akses masuk mudah
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light pt-1">
                Gak perlu pusing parkir motor pas ramean bareng temen satu tongkrongan. Area parkir luas, terang, dan ada CCTV 24 jam.
              </p>
            </div>

            {/* Hours Card */}
            <div className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 space-y-4 shadow-md">
              <div className="flex items-center gap-3 text-[#E07A2A]">
                <Clock className="w-5 h-5" />
                <h3 className="text-base font-bold text-white font-display">
                  Jam Operasional Buka
                </h3>
              </div>
              
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300 font-light">Senin &ndash; Jumat (Weekdays)</span>
                  <span className="font-bold text-[#E29D52] font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300 font-light">Sabtu &ndash; Minggu (Weekend)</span>
                  <span className="font-bold text-[#E29D52] font-mono">{CAFE_INFO.operatingHours.weekends}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 font-light">
                *Dapur Indomie &amp; snack gorengan siap melayani sampai jam tutup!
              </p>
            </div>

            {/* Address */}
            <div className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 space-y-4 shadow-md">
              <div className="flex items-center gap-3 text-[#E07A2A]">
                <MapPin className="w-5 h-5" />
                <h3 className="text-base font-bold text-white font-display">
                  Alamat Lengkap
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                {CAFE_INFO.address}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-stone-900 text-stone-200 hover:text-white border border-stone-800 hover:border-[#E07A2A] text-xs font-semibold tracking-wide transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E07A2A]" />
                </a>

                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full button-warm text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Booking Meja Nugas</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Card: Cozy Vibe Map / Highlights */}
          <div className="lg:col-span-6 rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E07A2A] bg-[#E07A2A]/15 px-3 py-1 rounded-full border border-[#E07A2A]/30">
                Akses &amp; Kenyamanan
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Tempat Nongkrong Anti-Ribet
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Mau ngerjain tugas mandiri, kerja remote, skripsian, atau kumpul komunitas seru &mdash; semua fasilitas sudah disiapkan agar kamu betah berjam-jam tanpa khawatir kuota internet atau baterai drop.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#E07A2A]" />
                  <span>Stop kontak / colokan di setiap meja &amp; area lesehan</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#E07A2A]" />
                  <span>WiFi dedicated 150 Mbps stabil tanpa batas kuota</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#E07A2A]" />
                  <span>Tersedia area indoor AC dan outdoor smoking santai</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#E07A2A]" />
                  <span>Gratis pinjam aneka board games &amp; kartu seru</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Bar */}
            <div className="pt-6 border-t border-stone-800 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-xs font-bold text-white">Ada pertanyaan atau mau tanya ketersediaan meja?</p>
                <p className="text-[11px] text-stone-400 font-light">Admin WhatsApp kami langsung balas cepat.</p>
              </div>

              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-md"
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
