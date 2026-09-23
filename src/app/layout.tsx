import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warkop Sentosa | Warkop Vibe. Senopati Standard.",
  description:
    "Mendefinisikan ulang kultur warkop lokal dengan standar specialty coffee internasional. Ruang temaram estetik, vinyl lounge, slow bar, dan complimentary valet parking di Senopati.",
  keywords: [
    "warkop senopati",
    "specialty coffee jakarta",
    "kopi susu aren bakar",
    "vinyl lounge jakarta",
    "private room cafe senopati",
    "tempat nongkrong senopati",
    "warkop modern",
  ],
  openGraph: {
    title: "Warkop Sentosa | Warkop Vibe. Senopati Standard.",
    description: "Ruang Temaram Estetik, Specialty Coffee & Vinyl Lounge di Senopati.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0B0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0B0A] text-[#EDE6DD] selection:bg-[#C5A059] selection:text-[#0D0B0A] font-sans">
        {children}
      </body>
    </html>
  );
}
