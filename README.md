# ☕ Warkop Sentosa — Modern F&B Digital Ordering & QR Table Experience

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-emerald?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **Live Production URL:** [https://warkop-modern-app.vercel.app](https://warkop-modern-app.vercel.app)  
> **Product Builder & QA:** Agung Ota  

---

## 📌 Business Overview & Problem Statement

Di industri F&B kasual Indonesia (khususnya warkop modern dan kedai kopi tongkrongan), tantangan operasional terbesar adalah:
1. **Antrean Kasir & Catatan Manual yang Rawan Salah:** Barista dan kasir sering kewalahan saat jam sibuk (*rush hour* malam), menyebabkan salah antar meja atau salah racik pesanan khusus (*misal: "kopi less sugar", "mie setengah matang cabai rawit 5"*).
2. **Biaya Langganan POS Mahal:** Sistem POS/mesin kasir cloud komersial umumnya membebankan biaya langganan bulanan (Rp 300.000 – Rp 1.000.000+/bulan) yang membebani margin laba UMKM.
3. **Friksi Pelanggan:** Pelanggan enggan mengunduh aplikasi native hanya untuk memesan 1-2 menu saat nongkrong.

### 💡 Solusi Produk:
**Warkop Sentosa Modern App** adalah platform web ordering yang **ringan, instan tanpa registrasi, dan mobile-first**:
* Pelanggan cukup memindai stiker QR di meja menggunakan kamera smartphone biasa.
* Memilih menu dengan catatan khusus, subtotal dihitung otomatis.
* Mengirimkan rekap pesanan siap proses langsung ke WhatsApp kasir/barista dalam format nota digital yang rapi.
* **Nol Biaya Langganan Bulanan (Zero SaaS Fee)** untuk pemilik usaha.

---

## 🚀 Fitur Unggulan & Arsitektur Teknis

### 1. Smart QR Table Detection (`?meja=XX`)
* **Dine-in Tracking:** Sistem membaca parameter URL (contoh: `?meja=05`) dan otomatis mengunci nomor meja pelanggan ke dalam state pemesanan.
* **Interactive Client Demo Switcher:** Dilengkapi widget pengalih nomor meja (`DemoTableSwitcher`) agar calon klien/investor dapat langsung menguji simulasi pergantian meja dari laptop maupun smartphone.

### 2. Multi-Item Cart & State Persistence
* Menggunakan **React Context API** (`CartContext`) dengan sinkronisasi cerdas ke `localStorage`.
* Pesanan pelanggan tidak akan hilang meskipun browser tidak sengaja di-refresh atau kuota internet sempat terputus.

### 3. POS-Ready WhatsApp Order Generator
* Menghasilkan struktur payload pesan teks berstandar nota kasir:
  * Tipe pesanan (Makan di Tempat / Bungkus).
  * Nomor meja & nama pemesan.
  * Rincian menu, kuantitas, harga, dan instruksi racikan (*custom cooking instructions*).
  * Total tagihan yang akurat tanpa celah salah hitung manual.

### 4. Real-Time Operational Logic (WIB Timezone)
* Algoritma `useOperationalStatus` menghitung waktu operasional berdasarkan zona waktu lokal `Asia/Jakarta`:
  * **Senin – Jumat:** 09.00 s/d 01.00 WIB dini hari.
  * **Sabtu – Minggu:** 09.00 s/d 02.00 WIB dini hari.
* Otomatis memperbarui indikator status di Header, Navbar, dan Jam Buka tanpa perlu update manual dari pemilik toko.

### 5. Sub-Second Instant Search & Category Filtering
* Filter pencarian instan sisi klien (*zero-latency search*) yang mencocokkan kata kunci pada nama menu, komposisi, rasa, dan badge promo.

### 6. Accessibility & Mobile Ergonomics (WCAG 2.2 AA)
* **Keyboard Flow:** Drawer dan modal dialog pemesanan dapat ditutup seketika dengan tombol `Escape`.
* **Touch Target Standard:** Mematuhi pedoman Apple HIG & Android WCAG 2.5.5 dengan target sentuh tombol minimal 44x44px untuk kenyamanan navigasi satu tangan di smartphone.
* **Semantic ARIA:** Dilengkapi atribut `role="dialog"`, `aria-modal="true"`, dan label screen reader lengkap.

---

## 🛡️ Jaminan Kualitas & QA Verification

Sebagai bukti komitmen terhadap reliabilitas software tingkat produksi, proyek ini dilengkapi dengan dokumen pengujian eksplorasi sistematis berstandar **test.io**:

📄 **[Lihat Checklist QA Lengkap (TESTING_CHECKLIST.md)](./TESTING_CHECKLIST.md)**
* **Priority 1:** Core Cart, WhatsApp URL Encoding, QR Dine-in Sync.
* **Priority 2:** Boundary Values, Extreme Character Notes (`!@#$%^&*()_+`), subuh session tracking.
* **Priority 3:** Mobile Ergonomics (iPhone SE 375px hingga layar lebar) & Zero Horizontal Overflow.
* **Priority 4:** OpenGraph WhatsApp Card Preview & Web Share API.
* **Priority 5:** Accessibility, Focus Trapping, Screen Reader VoiceOver/TalkBack.

---

## 🛠️ Tech Stack & Library

| Layer | Teknologi | Alasan Pemilihan |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Server-side rendering, performa tinggi, zero-bundle overhead |
| **UI Library** | React 19 | State management modern, hooks native |
| **Styling** | Tailwind CSS v4 | Utility-first, performa CSS engine super cepat, responsif |
| **Icons** | Lucide React | Ikon modern, tajam, dan ringan |
| **Deployment** | Vercel Edge Network | CDN global berkecepatan tinggi dengan auto-deployment CI/CD |

---

## 💻 Menjalankan Proyek Secara Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/zeno-syne/warkop-modern-app.git
   cd warkop-modern-app
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka di browser:**
   ```text
   http://localhost:3000
   ```

---

## 👤 Product Builder & Contact

Dikembangkan dengan dedikasi tinggi oleh:
* **Nama:** Agung Ota
* **Spesialisasi:** Product Builder, Frontend Engineer & QA Specialist (Freelance Tester di test.io)
* **GitHub:** [@zeno-syne](https://github.com/zeno-syne)
* **Demo Aplikasi:** [warkop-modern-app.vercel.app](https://warkop-modern-app.vercel.app)
