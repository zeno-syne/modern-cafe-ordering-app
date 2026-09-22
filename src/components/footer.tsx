'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Coffee, MessageCircle, MapPin, Send, Check } from 'lucide-react';
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
    <footer className="bg-stone-950 border-t border-stone-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#beranda" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-600/20">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-100 font-serif">
                {CAFE_INFO.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Menghadirkan kehangatan warkop nusantara dengan racikan kopi specialty berstandar tinggi. Tempat pulang, kerja, dan bercengkerama.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`https://instagram.com/${CAFE_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#beranda" className="hover:text-amber-400 transition-colors">Beranda</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Menu Kopi & Kudapan</a></li>
              <li><a href="#filosofi" className="hover:text-amber-400 transition-colors">Filosofi Warkop</a></li>
              <li><a href="#suasana" className="hover:text-amber-400 transition-colors">Suasana & Fasilitas</a></li>
              <li><a href="#ulasan" className="hover:text-amber-400 transition-colors">Ulasan Pengunjung</a></li>
              <li><a href="#lokasi" className="hover:text-amber-400 transition-colors">Lokasi & Jam Buka</a></li>
            </ul>
          </div>

          {/* Jam Buka */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Waktu Buka
            </h4>
            <div className="text-xs text-stone-400 space-y-2">
              <div>
                <span className="text-stone-300 font-medium block">Senin - Jumat</span>
                <span>{CAFE_INFO.operatingHours.weekdays}</span>
              </div>
              <div>
                <span className="text-stone-300 font-medium block">Sabtu - Minggu</span>
                <span>{CAFE_INFO.operatingHours.weekends}</span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                Melayani dine-in, takeaway, dan beans delivery.
              </p>
            </div>
          </div>

          {/* Newsletter / Bean Drops */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Special Roast Drops
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Dapatkan kabar saat kami merilis biji kopi sangrai edisi terbatas & promo khusus member.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ketik email Anda..."
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-xs placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-all pr-9"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Daftar newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Terima kasih! Anda telah terdaftar dalam daftar rilisan kami.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 {CAFE_INFO.name}. All rights reserved. Bangga Kopi Asli Indonesia.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privasi</span>
            <span>•</span>
            <span>Syarat & Ketentuan</span>
            <span>•</span>
            <span>Kemitraan</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
