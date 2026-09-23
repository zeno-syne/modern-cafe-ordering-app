'use client';

import { MapPin, Clock, Phone, ExternalLink, Calendar, Users, Send, Car, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

interface LocationHoursProps {
  onOpenReservation?: () => void;
}

export default function LocationHours({ onOpenReservation }: LocationHoursProps) {
  return (
    <section id="lokasi" className="py-24 md:py-32 relative bg-[#0D0B0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Kedai Kami di Senopati</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            Lokasi, Jam &amp; Valet Parking
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Berada di kawasan premium Senopati dengan akses mudah dan layanan valet gratis untuk kenyamanan tanpa beban parkir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards: Hours & Contact */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Valet Parking Callout Card */}
            <div className="rounded-3xl bg-gradient-to-r from-[#241C16] to-[#140F0D] border-2 border-[#C5A059]/40 p-6 sm:p-8 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#C5A059]">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif">
                      Complimentary Valet Parking
                    </h3>
                    <p className="text-[11px] text-[#C5A059] font-medium uppercase tracking-wider">
                      Gratis untuk Setiap Pengunjung
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Always Available
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light pt-2">
                Tidak perlu membuang waktu berputar-putar mencari parkir di area Senopati. Driver profesional kami akan memarkirkan dan menjaga kendaraan Anda di area basement yang aman.
              </p>
            </div>

            {/* Hours Card */}
            <div className="rounded-3xl bg-[#140F0D] border border-stone-800/80 p-6 md:p-8 space-y-4 shadow-lg">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white font-serif">
                  Jam Buka &amp; Operasional
                </h3>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300 font-light">Senin &ndash; Jumat (Weekdays)</span>
                  <span className="font-semibold text-[#E5C07B] font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300 font-light">Sabtu &ndash; Minggu (Weekend)</span>
                  <span className="font-semibold text-[#E5C07B] font-mono">{CAFE_INFO.operatingHours.weekends}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-500 font-light pt-1">
                *Dapur gourmet beroperasi hingga pukul 23.30 WIB; kopi, dessert &amp; vinyl bar tersedia hingga waktu tutup.
              </p>
            </div>

            {/* Address & Direct Direction */}
            <div className="rounded-3xl bg-[#140F0D] border border-stone-800/80 p-6 md:p-8 space-y-4 shadow-lg">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white font-serif">
                  Alamat &amp; Akses
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
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-900 text-stone-200 hover:text-white border border-stone-800 hover:border-[#C5A059] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>

                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full button-gold text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservasi Meja / VIP</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Card: Aesthetic Map / Visual Card */}
          <div className="lg:col-span-6 rounded-3xl bg-[#140F0D] border border-stone-800/80 p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Ambient Background Graphic */}
            <div className="absolute top-0 right-0 w-80 h-80 ambient-glow-gold rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/30">
                Peta &amp; Suasana Lokasi
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Sanctuary Temaram di Jantung Senopati
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Hanya 3 menit dari SCBD &amp; Gunawarman. Nikmati peralihan dari hiruk pikuk jalanan Jakarta ke atmosfer tenang beraroma kopi sangrai dan alunan piringan hitam analog.
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-3">
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Complimentary Valet Parking di lobi depan</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Tersedia Smoking Lounge &amp; Non-Smoking Indoor AC</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>VIP Private Room dengan peredam suara profesional</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Dedicated Gigabit WiFi 200 Mbps untuk remote work</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Contact Bar */}
            <div className="pt-8 border-t border-stone-800/80 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-white">Butuh bantuan arah atau reservasi rombongan?</p>
                <p className="text-[11px] text-stone-400 font-light">Concierge kami siap membantu via WhatsApp.</p>
              </div>

              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat Concierge</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
