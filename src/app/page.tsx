'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Story from '@/components/story';
import MenuPreview from '@/components/menu-preview';
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
    <main className="min-h-screen bg-[#14110E] text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans">
      {/* 1. Navbar: Clean warkop branding, nav links, CTA Lihat Menu & Lokasi */}
      <Navbar />

      {/* 2. Hero Section:
          - Bright warm tone warkop photo background
          - Kicker: Tempat Nongkrong Asik di Senopati
          - Headline: Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi.
          - Sub-headline: Tempat pelarian paling pas buat nugas, mabar, atau sekadar ngobrol ngalor-ngidul sama teman. Harga merakyat, rasa tetap pejabat.
          - CTAs: "Lihat Menu" & "Lokasi Kita"
      */}
      <Hero
        onScrollToMenu={() => scrollTo('menu')}
        onScrollToLocation={() => scrollTo('lokasi')}
      />

      {/* 3. Kenapa Nongkrong di Sini? / Fasilitas Warkop Sentosa:
          - WiFi Dewa & Colokan Dimana-mana
          - Area Lesehan & Smoking Luas
          - Buka Sampai Tengah Malam (s/d 01.00 WIB)
          - Candid youth hangout photo
      */}
      <Story />

      {/* 4. Menu Warkop Kekinian:
          - Es Kopi Susu Sentosa (Rp 20.000)
          - Indomie Telur Kornet / Internet (Rp 18.000)
          - Roti Bakar Coklat Keju (Rp 15.000)
          - Mendoan Anget (Rp 12.000)
          - Organic vibrant labels: BEST SELLER, GORENGAN DADAKAN, PAKET AKHIR BULAN
      */}
      <MenuPreview />

      {/* 5. Ulasan Google Maps Asli:
          - Budi, Mahasiswa ("Pewe banget buat nugas akhir pekan...")
          - Dimas, Karyawan ("Sering mabar Mobile Legends di sini...")
          - Siti, Mahasiswi & Rian, Freelancer
      */}
      <Testimonials />

      {/* 6. Lokasi & Jam Buka:
          - Senopati location, parkiran motor luas, Google Maps & WhatsApp
      */}
      <LocationHours />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
