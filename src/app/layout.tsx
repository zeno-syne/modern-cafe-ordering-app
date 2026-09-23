import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warkop Sentosa | Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi",
  description:
    "Tempat nongkrong asik di Senopati. Pas buat nugas, mabar, atau sekadar ngobrol ngalor-ngidul sama teman. Harga merakyat, rasa tetap pejabat!",
  keywords: [
    "warkop sentosa",
    "warkop senopati",
    "tempat nugas senopati",
    "kopi susu murah jakarta",
    "tempat mabar jakarta selatan",
    "warkop murah senopati",
  ],
  openGraph: {
    title: "Warkop Sentosa | Tempat Nongkrong Asik di Senopati",
    description: "Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi. Harga Merakyat, Rasa Tetap Pejabat.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1512",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#1A1512] text-[#F9F5F0] selection:bg-[#E65100] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
