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
  metadataBase: new URL("https://modern-cafe-ordering-app.vercel.app"),
  title: "Sentosa Cafe & Diner | Modern QR Table Ordering & Digital POS",
  description:
    "Next-generation digital dining and contactless QR table ordering experience. High-speed fiber Wi-Fi, handcrafted specialty coffee, fair-share bill splitting, and instant POS checkout.",
  keywords: [
    "sentosa cafe",
    "digital dining ordering system",
    "qr table ordering web app",
    "cafe pos software",
    "fair share split bill calculator",
    "specialty coffee shop web app",
    "restaurant table ordering ux",
  ],
  authors: [
    { name: "Zeno - Product Builder & QA Specialist", url: "https://github.com/zeno-syne" },
    { name: "Sentosa Cafe & Diner" },
  ],
  creator: "Zeno",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Sentosa Cafe & Diner | Modern QR Table Ordering & Digital POS",
    description:
      "Order seamlessly straight from your table, split bills with your team, and enjoy zero-wait checkout.",
    url: "https://modern-cafe-ordering-app.vercel.app",
    siteName: "Sentosa Cafe & Diner",
    images: [
      {
        url: "/warkop-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sentosa Cafe & Diner Ambiance and Digital Ordering",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentosa Cafe & Diner | Modern QR Table Ordering & Digital POS",
    description:
      "Order seamlessly straight from your table, split bills with your team, and enjoy zero-wait checkout.",
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
      lang="en"
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
