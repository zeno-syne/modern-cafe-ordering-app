'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import MenuPreview from '@/components/menu-preview';
import ReservationSection from '@/components/reservation-section';
import Story from '@/components/story';
import Atmosphere from '@/components/atmosphere';
import Testimonials from '@/components/testimonials';
import LocationHours from '@/components/location-hours';
import Footer from '@/components/footer';

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans">
      {/* Top Sticky Navigation */}
      <Navbar onOpenReservation={() => scrollTo('reservation')} />

      {/* 1. Hero Section: Compelling title, tagline, aesthetic image background, View Menu & Reservation buttons */}
      <Hero
        onScrollToMenu={() => scrollTo('menu')}
        onScrollToReservation={() => scrollTo('reservation')}
      />

      {/* 2. Interactive Menu Section: Category filters (Coffee, Non-Coffee, Snacks) & Order buttons */}
      <MenuPreview />

      {/* 3. Table Reservation Form with Confirmation Pop-up Notification */}
      <ReservationSection />

      {/* Brand Story & Philosophy */}
      <Story />

      {/* Atmosphere & Space Amenities */}
      <Atmosphere />

      {/* Social Proof & Testimonials */}
      <Testimonials />

      {/* Location, Operating Hours & Direct Directions */}
      <LocationHours onOpenReservation={() => scrollTo('reservation')} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
