import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warkop Sentosa | Kultur Kopi Otentik, Racikan Masa Kini",
  description:
    "Kedai kopi warkop modern dengan standar specialty grade. Menghadirkan single origin nusantara, signature aren bakar, suasana temaram hangat, dan ruang kerja nyaman.",
  keywords: [
    "warkop",
    "coffee shop",
    "specialty coffee",
    "kopi susu aren",
    "manual brew",
    "v60",
    "warkop modern",
    "tempat kerja jakarta",
    "cafe senopati",
  ],
  openGraph: {
    title: "Warkop Sentosa | Artisan Coffee & Modern Warkop",
    description: "Kultur Kopi Otentik, Diracik Presisi Masa Kini.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
