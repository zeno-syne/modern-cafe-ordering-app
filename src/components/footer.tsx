'use client';

import React, { useState } from 'react';
import { Coffee, MessageCircle, Wifi, Zap, Clock, Share2, Printer } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';
import TableQrGeneratorModal from '@/components/table-qr-generator-modal';

export default function Footer() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShareSquad = async () => {
    const shareData = {
      title: 'Sentosa Cafe & Diner - Artisanal Coffee & Work Haven in Senopati',
      text: 'Check out Sentosa Cafe! Handcrafted coffee, 150 Mbps high-speed fiber Wi-Fi, open late until 1:00 AM. Explore the live menu & digital table ordering:',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://modern-cafe-ordering-app.vercel.app',
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to WhatsApp if share dismissed or unsupported
      }
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://modern-cafe-ordering-app.vercel.app';
    const waText = encodeURIComponent(
      `*Meet up at Sentosa Cafe & Diner!*\n\n` +
      `Great artisanal coffee, 150 Mbps dedicated fiber Wi-Fi, power outlets at every desk, and open late until 1:00 AM in Senopati.\n\n` +
      `Check out their live menu & location: ${shareUrl}`
    );
    window.open(`https://wa.me/?text=${waText}`, '_blank');
  };

  return (
    <footer className="bg-[#0D0A08] border-t border-stone-800/90 pt-16 pb-12 relative overflow-hidden text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#beranda"
              onClick={(e) => handleSmoothScroll(e, '#beranda')}
              className="flex items-center gap-3 active:scale-95 transition-transform"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/25">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-display">
                {CAFE_INFO.name}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed max-w-sm">
              The premier neighborhood destination for deep work, team sprints, and late-night unwinding. Premium taste at everyday honest prices.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 text-xs text-[#F59E0B] font-semibold">
              <span className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                150 Mbps Fiber
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Charging Bays
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Open Till 1:00 AM
              </span>
            </div>

            {/* Share to Squad Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleShareSquad}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1612] hover:bg-[#251D18] border border-stone-700 hover:border-[#EA580C]/50 text-stone-200 hover:text-[#F59E0B] text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Invite Team (Share via WhatsApp)</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => handleSmoothScroll(e, '#beranda')}
                  className="hover:text-[#F59E0B] transition-colors active:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#kenapa-kami"
                  onClick={(e) => handleSmoothScroll(e, '#kenapa-kami')}
                  className="hover:text-[#F59E0B] transition-colors active:text-white"
                >
                  Why Sentosa
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleSmoothScroll(e, '#menu')}
                  className="hover:text-[#F59E0B] transition-colors active:text-white"
                >
                  Menu &amp; Ordering
                </a>
              </li>
              <li>
                <a
                  href="#ulasan"
                  onClick={(e) => handleSmoothScroll(e, '#ulasan')}
                  className="hover:text-[#F59E0B] transition-colors active:text-white"
                >
                  Guest Reviews
                </a>
              </li>
              <li>
                <a
                  href="#lokasi"
                  onClick={(e) => handleSmoothScroll(e, '#lokasi')}
                  className="hover:text-[#F59E0B] transition-colors active:text-white"
                >
                  Location &amp; Hours
                </a>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsQrModalOpen(true)}
                  className="hover:text-[#F59E0B] transition-colors active:text-white flex items-center gap-1.5 text-xs text-stone-400 hover:underline cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Print Table Stand QR (Store Tool)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
              Location &amp; WhatsApp Concierge
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-stone-300 font-normal">
                {CAFE_INFO.address}
              </p>
              <p className="text-stone-400">
                Monday &ndash; Friday: <span className="text-white font-mono">{CAFE_INFO.operatingHours.weekdays}</span>
              </p>
              <p className="text-stone-400">
                Saturday &ndash; Sunday: <span className="text-white font-mono">{CAFE_INFO.operatingHours.weekends}</span>
              </p>
              <div className="pt-2">
                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-400 border border-emerald-600/40 font-bold active:scale-95 transition-all text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge: {CAFE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-stone-800/60 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3 text-center sm:text-left font-normal">
          <p>
            &copy; {new Date().getFullYear()} {CAFE_INFO.name}. Senopati&apos;s Premier Neighborhood Work Cafe &amp; Diner.
          </p>
          <p className="text-stone-400 flex items-center justify-center sm:justify-end gap-1.5">
            <span>Crafted with precision by</span>
            <strong className="font-bold text-[#F59E0B]">Zeno</strong>
            <span>&bull; Product Builder &amp; QA Specialist</span>
          </p>
        </div>
      </div>

      {/* Modal Generator Stand Meja QR (Khusus Pemilik) */}
      <TableQrGeneratorModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </footer>
  );
}
