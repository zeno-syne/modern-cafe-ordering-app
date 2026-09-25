'use client';

import { useState, useEffect } from 'react';
import { Coffee, Menu, X, MapPin, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';
import { useCart } from '@/context/cart-context';
import { useOperationalStatus } from '@/hooks/use-operational-status';
import CurrencySelector from '@/components/currency-selector';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { isOpen, statusLabel } = useOperationalStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#beranda' },
    { label: 'Why Sentosa', href: '#kenapa-kami' },
    { label: 'Menu & Ordering', href: '#menu' },
    { label: 'Reviews', href: '#ulasan' },
    { label: 'Location & Hours', href: '#lokasi' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-[#18130F]/95 backdrop-blur-2xl border border-[#EA580C]/25 shadow-2xl shadow-black/80 py-2 sm:py-2.5 px-4 sm:px-5'
            : 'bg-[#18130F]/85 backdrop-blur-xl border border-stone-800/80 shadow-xl py-2.5 sm:py-3 px-4 sm:px-5'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleSmoothScroll(e, '#beranda')}
            className="flex items-center gap-2.5 sm:gap-3 group active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/30 group-hover:scale-105 transition-transform duration-250">
              <Coffee className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-white flex items-center gap-1.5 font-display">
                {CAFE_INFO.name}
                <span
                  className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${
                    isOpen
                      ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse'
                      : 'bg-rose-400'
                  }`}
                  title={statusLabel}
                />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#F59E0B] tracking-wide block -mt-0.5">
                Artisanal Coffee &bull; Diner &bull; Co-Working
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#120E0B]/80 border border-stone-800/80 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#F5EDE4]/80 hover:text-[#F59E0B] rounded-full hover:bg-white/5 active:scale-95 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Multi-Currency Selector */}
            <CurrencySelector />

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`View order cart (${totalItems} items selected)`}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#F5EDE4]/90 hover:text-white bg-[#221B16] hover:bg-[#2C231D] border border-stone-800 hover:border-[#EA580C]/50 active:scale-95 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:outline-none"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#EA580C] text-white font-mono text-[10px] font-black flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href="#menu"
              onClick={(e) => handleSmoothScroll(e, '#menu')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#F5EDE4]/90 hover:text-white hover:bg-white/5 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-[#EA580C]"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Menu</span>
            </a>

            <a
              href="#lokasi"
              onClick={(e) => handleSmoothScroll(e, '#lokasi')}
              className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#EA580C]/30 hover:scale-[1.03] active:scale-[0.97] transition-all focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Location</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <MapPin className="w-3 h-3" />
              </div>
            </a>
          </div>

          {/* Mobile Right Controls: Currency, Cart Icon & Hamburger Button */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <CurrencySelector compact />

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative min-w-[40px] min-h-[40px] rounded-xl bg-[#201A16] text-[#F5EDE4] border border-stone-800 hover:border-[#EA580C]/50 flex items-center justify-center active:scale-90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label={`View order cart (${totalItems} items selected)`}
            >
              <ShoppingBag className="w-4 h-4 text-[#EA580C]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#EA580C] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[40px] min-h-[40px] rounded-xl bg-[#201A16] text-[#F5EDE4] border border-stone-800 hover:border-[#EA580C]/50 flex items-center justify-center active:scale-90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#EA580C]" /> : <Menu className="w-5 h-5 text-[#F5EDE4]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-2 border-t border-stone-800 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#F5EDE4] hover:bg-white/5 hover:text-[#F59E0B] active:bg-white/10 active:scale-[0.98] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800/80">
              <a
                href="#menu"
                onClick={(e) => handleSmoothScroll(e, '#menu')}
                className="py-2.5 rounded-full bg-[#201914] hover:bg-[#2A211B] text-[#F5EDE4] text-xs font-bold text-center border border-stone-700 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>View Menu</span>
              </a>

              <a
                href="#lokasi"
                onClick={(e) => handleSmoothScroll(e, '#lokasi')}
                className="py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
