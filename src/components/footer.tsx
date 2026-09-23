'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Coffee, MessageCircle, MapPin, Send, Check, Car, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
    <footer className="bg-[#0A0807] border-t border-stone-800/80 pt-20 pb-12 relative overflow-hidden text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#beranda" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8C6D2D] flex items-center justify-center text-[#0D0B0A] shadow-lg shadow-[#C5A059]/20">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-serif">
                {CAFE_INFO.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Mendefinisikan ulang warkop lokal dengan standar specialty coffee internasional. Ruang temaram estetik, vinyl lounge analog, dan layanan valet gratis di Senopati.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#C5A059]">
              <Car className="w-4 h-4" />
              <span className="font-semibold">Complimentary Valet Parking Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Eksplorasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#menu" className="hover:text-[#C5A059] transition-colors">
                  Reserve Menu
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#C5A059] transition-colors">
                  Specialty Coffee
                </Link>
              </li>
              <li>
                <Link href="#filosofi" className="hover:text-[#C5A059] transition-colors">
                  Filosofi Kami
                </Link>
              </li>
              <li>
                <Link href="#suasana" className="hover:text-[#C5A059] transition-colors">
                  Vinyl Lounge
                </Link>
              </li>
              <li>
                <Link href="#reservation" className="hover:text-[#C5A059] transition-colors">
                  VIP Private Room
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Info &amp; Lokasi
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-stone-300 font-light">
                Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan
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
                  <span>WhatsApp Concierge</span>
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter / Exclusive Drops */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Sentosa Reserve Drops
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Dapatkan info rilisan biji lelang langka (Gesha / Geisha) dan jadwal kurasi vinyl live session.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Masukkan email Anda..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-[#181310] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-full button-gold text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-[#0D0B0A]" /> : <span>Join</span>}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-medium">
                  Terima kasih! Anda telah terdaftar di klub Sentosa Reserve.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center sm:text-left font-light">
          <p>
            &copy; {new Date().getFullYear()} {CAFE_INFO.name}. Hak cipta dilindungi.
          </p>
          <p className="text-stone-400">
            Warkop Vibe. Senopati Standard.
          </p>
        </div>
      </div>
    </footer>
  );
}
