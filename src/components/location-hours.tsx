'use client';

import { MapPin, Clock, Phone, ExternalLink, Calendar, Users, Send } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

interface LocationHoursProps {
  onOpenReservation?: () => void;
}

export default function LocationHours({ onOpenReservation }: LocationHoursProps) {
  return (
    <section id="lokasi" className="py-20 md:py-28 relative bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Kedai Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-100 font-serif">
            Lokasi & Jam Operasional
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Tempat yang strategis dan mudah diakses di jantung kota, lengkap dengan parkir luas untuk motor dan mobil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards: Hours & Contact */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Hours Card */}
            <div className="rounded-2xl bg-stone-900/70 border border-stone-800 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <Clock className="w-6 h-6" />
                <h3 className="text-lg font-bold text-stone-100 font-serif">
                  Jam Buka & Operasional
                </h3>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300">Senin - Jumat (Weekdays)</span>
                  <span className="font-semibold text-amber-400">{CAFE_INFO.operatingHours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-stone-800 text-xs sm:text-sm">
                  <span className="text-stone-300">Sabtu - Minggu (Weekend)</span>
                  <span className="font-semibold text-amber-400">{CAFE_INFO.operatingHours.weekends}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 pt-1">
                *Dapur makanan berat beroperasi sampai pukul 23.00 WIB, minuman & kudapan kopi tersedia hingga jam tutup.
              </p>
            </div>

            {/* Address & Direct Direction */}
            <div className="rounded-2xl bg-stone-900/70 border border-stone-800 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <MapPin className="w-6 h-6" />
                <h3 className="text-lg font-bold text-stone-100 font-serif">
                  Alamat Kedai
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {CAFE_INFO.address}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>

                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{CAFE_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Reservation Box */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-900/80 border border-stone-800 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Reservasi Meja & Community Space</span>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-100 font-serif">
                Rencanakan Kunjungan Anda
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Ingin mengadakan pertemuan tim, diskusi komunitas, atau sekadar memastikan meja ternyaman sebelum tiba? Anda dapat melakukan reservasi cepat lewat form kami atau langsung via WhatsApp.
              </p>

              <div className="space-y-3 pt-4">
                <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-stone-200 block">Meja Grup & Meeting Room</span>
                    <span className="text-stone-400">Tersedia area khusus hingga kapasitas 12 orang dengan layar monitor.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-stone-200 block">Konfirmasi Cepat</span>
                    <span className="text-stone-400">Barista kami akan mengonfirmasi ketersediaan meja dalam hitungan menit.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenReservation}
                className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-lg shadow-amber-500/20 text-center transition-all cursor-pointer"
              >
                Isi Formulir Reservasi
              </button>

              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-semibold text-xs border border-stone-700 text-center transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat WhatsApp Admin</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
