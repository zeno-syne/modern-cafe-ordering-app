import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warkop Sentosa | Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi",
  description:
    "Warkop modern paling asyik buat nugas, mabar, dan nongkrong santai. Harga ramah mahasiswa mulai Rp10 ribuan, colokan di tiap meja, WiFi 150 Mbps, board games gratis, dan buka sampai subuh!",
  keywords: [
    "warkop jakarta",
    "tempat nugas jakarta selatan",
    "cafe murah wifi kencang",
    "warkop modern",
    "tempat mabar jakarta",
    "kopi susu murah",
    "warkop 24 jam",
  ],
  openGraph: {
    title: "Warkop Sentosa | Tempat Pelarian Paling Nyaman Buat Nugas & Mabar",
    description: "Kopi Enak, WiFi Kencang, Colokan Melimpah, Buka Sampai Subuh!",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#181411",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#14110E] text-[#F5EDE4] selection:bg-[#E07A2A] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
