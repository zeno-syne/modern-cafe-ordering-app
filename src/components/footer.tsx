'use client';

import Link from 'next/link';
import { Coffee, MessageCircle, MapPin, Heart, Wifi, Zap, Clock } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

export default function Footer() {
  return (
    <footer className="bg-[#0D0A08] border-t border-stone-800/90 pt-16 pb-12 relative overflow-hidden text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#beranda" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/25">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-display">
                {CAFE_INFO.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed max-w-sm">
              Tempat pelarian paling pas buat nugas, mabar, atau sekadar ngobrol ngalor-ngidul sama teman. Harga merakyat, rasa tetap pejabat.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#F59E0B] font-semibold">
              <span className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                WiFi Kencang
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Colokan Melimpah
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Buka s/d 01.00 Pagi
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#beranda" className="hover:text-[#F59E0B] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#kenapa-kami" className="hover:text-[#F59E0B] transition-colors">
                  Kenapa Nongkrong di Sini?
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#F59E0B] transition-colors">
                  Menu &amp; Harga Merakyat
                </Link>
              </li>
              <li>
                <Link href="#ulasan" className="hover:text-[#F59E0B] transition-colors">
                  Ulasan Google Maps
                </Link>
              </li>
              <li>
                <Link href="#lokasi" className="hover:text-[#F59E0B] transition-colors">
                  Lokasi &amp; Jam Operasional
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Lokasi &amp; Kontak WhatsApp
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-stone-300 font-normal">
                {CAFE_INFO.address}
              </p>
              <p className="text-stone-400">
                Senin &ndash; Jumat: <span className="text-white font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
              </p>
              <p className="text-stone-400">
                Sabtu &ndash; Minggu: <span className="text-white font-mono">{CAFE_INFO.operatingHours.weekends}</span>
              </p>
              <div className="pt-2">
                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-400 border border-emerald-600/40 font-bold transition-all text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {CAFE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center sm:text-left font-normal">
          <p>
            &copy; {new Date().getFullYear()} {CAFE_INFO.name}. Tempat Nongkrong Asik di Senopati.
          </p>
          <p className="text-stone-400 flex items-center justify-center sm:justify-end gap-1">
            Dibuat untuk anak muda, mahasiswa &amp; teman se-tongkrongan.
          </p>
        </div>
      </div>
    </footer>
  );
}
