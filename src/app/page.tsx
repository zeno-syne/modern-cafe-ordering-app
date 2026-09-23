'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Story from '@/components/story';
import MenuPreview from '@/components/menu-preview';
import Testimonials from '@/components/testimonials';
import LocationHours from '@/components/location-hours';
import Footer from '@/components/footer';
import CartDrawer from '@/components/cart-drawer';
import DemoTableSwitcher from '@/components/demo-table-switcher';
import { useCart } from '@/context/cart-context';
import { QrCode } from 'lucide-react';

export default function Home() {
  const { qrDetectedTable } = useCart();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#14110E] text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans relative">
      {/* Table QR Mode Notification Banner */}
      {qrDetectedTable && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40 max-w-sm w-[92%] sm:w-auto px-4 py-2 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 text-xs font-medium shadow-xl flex items-center justify-center gap-2 backdrop-blur-md animate-in fade-in slide-in-from-top-2">
          <QrCode className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>
            Mode Nongkrong Aktif: <strong>Meja {qrDetectedTable}</strong>
          </span>
        </div>
      )}

      {/* Client Demo Quick Table Switcher */}
      <DemoTableSwitcher />

      {/* 1. Navbar with Brand & Cart Counter */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero
        onScrollToMenu={() => scrollTo('menu')}
        onScrollToLocation={() => scrollTo('lokasi')}
      />

      {/* 3. Fasilitas Warkop Sentosa */}
      <Story />

      {/* 4. Menu Warkop Kekinian with Multi-Item Cart */}
      <MenuPreview />

      {/* 5. Ulasan Google Maps Asli */}
      <Testimonials />

      {/* 6. Lokasi & Jam Buka */}
      <LocationHours />

      {/* 7. Footer */}
      <Footer />

      {/* 8. Interactive Cart Drawer & Floating Bar */}
      <CartDrawer />
    </main>
  );
}
