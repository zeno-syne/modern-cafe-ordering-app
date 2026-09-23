import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";

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
  metadataBase: new URL("https://warkop-modern-app.vercel.app"),
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
    "warkop jakarta wifi kencang",
  ],
  authors: [{ name: "Warkop Sentosa" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Warkop Sentosa | Tempat Nongkrong Asik di Senopati",
    description:
      "Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi. Harga Merakyat, Rasa Tetap Pejabat.",
    url: "https://warkop-modern-app.vercel.app",
    siteName: "Warkop Sentosa",
    images: [
      {
        url: "/warkop-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Warkop Sentosa Senopati",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warkop Sentosa | Tempat Nongkrong Asik di Senopati",
    description:
      "Kopi Enak, WiFi Kencang, Nongkrong Sampai Pagi. Harga Merakyat, Rasa Tetap Pejabat.",
    images: ["/warkop-hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#14110E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <body className="min-h-full flex flex-col bg-[#14110E] text-[#F9F5F0] selection:bg-[#E65100] selection:text-white font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
