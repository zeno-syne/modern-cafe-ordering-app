'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Coffee, MessageCircle, MapPin, Send, Check, GraduationCap, Flame } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0E0C0A] border-t border-stone-800/80 pt-16 pb-12 relative overflow-hidden text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#beranda" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E07A2A] to-[#B8530C] flex items-center justify-center text-white shadow-md shadow-[#E07A2A]/20">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {CAFE_INFO.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Tempat nongkrong, nugas, dan mabar paling nyaman dan ramah kantong. Kopi mantap, WiFi kencang tanpa lemot, colokan melimpah, dan buka sampai subuh!
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#E07A2A] font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Diskon Mahasiswa 10% Setiap Hari</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Menu &amp; Promo
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#menu" className="hover:text-[#E07A2A] transition-colors">
                  Paket Combo Nugas
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#E07A2A] transition-colors">
                  Es Kopi Susu Aren
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#E07A2A] transition-colors">
                  Indomie &amp; Roti Bakar
                </Link>
              </li>
              <li>
                <Link href="#suasana" className="hover:text-[#E07A2A] transition-colors">
                  Fasilitas &amp; Colokan
                </Link>
              </li>
              <li>
                <Link href="#reservation" className="hover:text-[#E07A2A] transition-colors">
                  Booking Meja
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Lokasi &amp; Jam
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-stone-300 font-light">
                {CAFE_INFO.address}
              </p>
              <p className="text-stone-400">
                Weekdays: <span className="text-white font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
              </p>
              <p className="text-stone-400">
                Weekend: <span className="text-white font-mono">{CAFE_INFO.operatingHours.weekends}</span>
              </p>
              <p className="pt-1">
                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {CAFE_INFO.phone}</span>
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter / Promo Updates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Info Promo &amp; Event
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Daftar email kamu buat dapetin info promo paket diskon akhir bulan dan jadwal mini turnamen game/mabar!
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Ketik email kamu..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-[#1A1410] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#E07A2A] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-full button-warm text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-white" /> : <span>Gabung</span>}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-medium">
                  Sip! Kamu bakal dapet info promo pertama kali.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center sm:text-left font-light">
          <p>
            &copy; {new Date().getFullYear()} {CAFE_INFO.name}. Tempat nongkrong asyik buat semua.
          </p>
          <p className="text-stone-400">
            Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi.
          </p>
        </div>
      </div>
    </footer>
  );
}
