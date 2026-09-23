# 📋 Test.io Exploratory Testing Checklist — Warkop Sentosa Modern App

> **Test Cycle Target:** Warkop Sentosa (https://warkop-modern-app.vercel.app)  
> **Platform Scope:** Web Mobile Responsive (iOS Safari, Android Chrome), Desktop (Chrome, Safari, Firefox)  
> **Tester Focus:** Usability, Cart & Checkout, QR Dine-in, Split Bill, QRIS Payment, Edge Cases, Real Devices Only  
> **Author & QA Lead:** Zeno  

---

## ⚡ Priority 1 — Core Functionality (High Severity Potential ★)

### 1.1 Multi-Item Cart & WhatsApp Checkout Flow
- [ ] **Tambah Item Berulang:** Tambah item yang sama beberapa kali dari katalog menu. Pastikan kuantitas terakumulasi dengan benar di badge kartu, navbar, dan floating cart bar. ★
- [ ] **Modifikasi Kuantitas di Drawer:** Ubah kuantitas menggunakan tombol `+` dan `-` di dalam keranjang. Pastikan subtotal per item dan total akhir dihitung ulang secara real-time tanpa delay.
- [ ] **Batas Minimum Item:** Kurangi kuantitas item hingga mencapai 0. Pastikan item terhapus otomatis dari daftar keranjang tanpa crash.
- [ ] **Tombol Hapus Item (Trash):** Klik ikon tempat sampah pada salah satu item di keranjang. Pastikan item tersebut langsung hilang dan total harga berkurang proporsional.
- [ ] **Kosongkan Keranjang (Clear All):** Klik ikon kosongkan keranjang di header drawer. Pastikan state kembali ke empty state dan floating bar hilang.
- [ ] **Checkout WhatsApp Message Encoding:** Klik tombol "Kirim Pesanan ke WhatsApp Kasir". Pastikan:
  - Nomor tujuan WhatsApp adalah `+62 812-8990-2026`.
  - Karakter khusus, enter baris, emoji, dan spasi ter-encode secara sempurna (`%20`, `%0A`) tanpa URL breaking. ★

### 1.2 QR Code Dine-in vs Takeaway Flow
- [ ] **Deteksi Otomatis URL QR Meja:** Buka website dengan parameter URL `?meja=05` atau `?table=12`. Pastikan:
  - Banner hijau "Mode Nongkrong Aktif: Meja XX" muncul di atas layar. ★
  - Nomor meja di form checkout otomatis terisi "05".
  - Tipe pesanan otomatis terkunci ke "Makan di Tempat".
- [ ] **Validasi Wajib Nomor Meja (Dine-in):** Kosongkan field nomor meja lalu tekan tombol WhatsApp Checkout saat mode "Makan di Tempat" aktif. Pastikan sistem menolak proses dan meminta nomor meja diisi. ★
- [ ] **Mode Bungkus / Take Away:** Pilih opsi "Bungkus / Take Away". Pastikan field nomor meja disembunyikan dan pesan WhatsApp mencantumkan keterangan "Bungkus / Take Away".

### 1.3 Kalkulator Patungan (Split Bill Warkop) Flow
- [ ] **Toggle Split Bill:** Aktifkan toggle "Kalkulator Patungan". Pastikan panel pembagian biaya muncul dengan animasi transisi yang mulus.
- [ ] **Boundary Jumlah Orang (Min 2, Max 20):** 
  - Uji tombol minus saat jumlah orang = 2. Pastikan tombol nonaktif (disabled) dan angka tidak bisa berkurang ke 1 atau negatif. ★
  - Uji tombol plus hingga 20 orang. Pastikan tombol nonaktif di angka 20.
- [ ] **Perhitungan Pembagian Rupiah (Rounding Check):** Masukkan pesanan dengan total ganjil (contoh: Rp 47.000) dibagi 3 orang. Pastikan pembagian menggunakan pembulatan ke atas yang wajar (`Math.ceil`) agar kasir tidak rugi pecahan receh.
- [ ] **Salin Rincian ke Clipboard:** Klik tombol "Salin ke Grup WA". Pastikan toast notifikasi "Tersalin!" muncul dan format teks di clipboard berisi rincian meja, jumlah orang, total tagihan, dan nominal per orang yang rapi.
- [ ] **Integrasi Pesan WhatsApp Kasir:** Saat split bill aktif, pastikan pesan checkout WhatsApp kasir menyertakan keterangan `👥 Patungan: X Orang (@ Rp XX.XXX/orang)`. ★

### 1.4 Metode Pembayaran & Modal QRIS Interaktif Flow
- [ ] **Pilihan Pembayaran (Radio Group):** Klik antara "Tunai di Kasir" dan "QRIS (Scan Kasir)". Pastikan outline aktif berubah warna dan status terupdate di ringkasan footer.
- [ ] **Pembukaan Modal QRIS:** Pilih QRIS atau klik tombol "Lihat QRIS". Pastikan modal popup muncul di tengah layar dengan backdrop blur yang pekat.
- [ ] **Aksesibilitas Modal QRIS:** Tekan tombol `Escape` di keyboard atau klik area backdrop hitam. Pastikan modal tertutup tanpa menutup drawer di baliknya.
- [ ] **Tombol Salin Nominal QRIS:** Di dalam modal QRIS, klik tombol "Salin Nominal". Pastikan angka total tagihan murni tersalin ke clipboard sehingga customer mudah paste di aplikasi m-Banking.
- [ ] **Status Pembayaran di WhatsApp:** Pastikan WhatsApp checkout mencantumkan `💳 Pembayaran: *Scan QRIS Kasir (Non-Tunai)*` bila opsi QRIS dipilih, atau `💵 Pembayaran: *Bayar Tunai di Kasir*` bila opsi Tunai dipilih. ★

---

## 🔢 Priority 2 — Edge Cases & Boundary Conditions (High Bug Bounty Potential ★)

- [ ] **Catatan Khusus Karakter Ekstrem:** Masukkan catatan pesanan dengan karakter non-standar: `!@#$%^&*()_+{}|:"<>?~` dan teks panjang (150+ karakter). Pastikan teks tidak merusak layout kartu dan terbaca utuh di WhatsApp. ★
- [ ] **Input Nomor Meja Huruf & Simbol:** Masukkan input nomor meja seperti `VIP-01`, `Meja 99B`, atau angka 0. Pastikan tidak terjadi crash validasi.
- [ ] **Refresh & Persistensi Keranjang:** Isi keranjang dengan 3 menu dan catatan khusus, lalu lakukan hard reload (`Cmd+R` / `F5`) atau tutup tab dan buka kembali. Pastikan seluruh isi keranjang tetap tersimpan (via `localStorage`). ★
- [ ] **Pencarian Menu Tidak Ditemukan:** Ketik kata kunci yang tidak ada di menu (contoh: "pizza", "sushi", "xoxoxo"). Pastikan komponen *Empty State* muncul rapi dengan tombol "Reset Pencarian" yang berfungsi normal.
- [ ] **Simulasi Jam Tutup Subuh (03.00 WIB):** Ubah jam lokal perangkat ke jam 04.00 subuh WIB. Pastikan status operasional berubah menjadi *"🔴 Sedang Istirahat • Buka jam 09.00 WIB"*. ★

---

## 📱 Priority 3 — Mobile UI/UX & Responsiveness (95% User Traffic)

- [ ] **Narrow Viewport (iPhone SE / 375px):** Buka di layar 375px. Pastikan tidak ada horizontal scrolling tak diinginkan (*horizontal overflow / white gap* di kanan).
- [ ] **Touch Target Size (Ergonomi Jari):** Pastikan tombol `+`, `-`, tombol tutup modal `X`, dan tombol navigasi mobile mudah ditekan dengan ibu jari satu tangan tanpa salah memencet elemen sekitarnya (min. 44x44px).
- [ ] **Floating Cart Bar Positioning:** Pastikan floating cart bar di bagian bawah tidak menutupi tombol penting atau terpotong oleh virtual keyboard saat mengetik di form catatan/nomor meja.
- [ ] **Animasi Drawer di Mobile:** Buka dan tutup drawer beberapa kali secara cepat di HP nyata. Pastikan animasi slide-in dan backdrop blur berjalan mulus (60fps) tanpa stutter.

---

## 📲 Priority 4 — Social Share & Link Preview

- [ ] **OpenGraph Link Preview di WhatsApp:** Salin link website dan tempel di chat WhatsApp. Pastikan thumbnail gambar warkop, judul menarik, dan deskripsi muncul dengan sempurna.
- [ ] **Native Web Share:** Klik tombol "Ajak Squad Nongkrong" di footer. Pastikan dialog native share perangkat terbuka (atau langsung mengarahkan ke WhatsApp dengan teks ajakan terisi).
- [ ] **Favicon Icon:** Pastikan tab browser menampilkan ikon logo cangkir kopi warkop dengan jelas.

---

## ♿ Priority 5 — Accessibility (WCAG 2.2 AA) & Keyboard Navigation

- [ ] **Escape Key Modal Dismiss:** Buka modal pemesanan menu, QRIS, atau Cart Drawer, lalu tekan tombol `Escape` di keyboard. Pastikan modal tertutup seketika.
- [ ] **Tab Key Focus Flow:** Gunakan tombol `Tab` dan `Shift+Tab` untuk menavigasi seluruh halaman. Pastikan setiap elemen interaktif memiliki focus ring yang terlihat jelas (`focus-visible:ring-2`).
- [ ] **Screen Reader Labels (VoiceOver / TalkBack):** Aktifkan screen reader di smartphone. Pastikan tombol icon-only (keranjang, hapus menu, tutup modal) dibacakan fungsinya dengan jelas dan bukan hanya suara "button".

---

## 💡 Tips Menulis Bug Report di Test.io untuk Aplikasi Ini
1. **Title Formula:** `[Area/Fitur] - Tindakan - Hasil Aktual Error`  
   *Contoh:* `[Cart Drawer] - Clicking remove button on last item does not clear empty state message`
2. **Device Info:** Sertakan device fisik nyata (contoh: *iPhone 13 iOS 17.4 Safari* atau *Samsung Galaxy S22 Android 14 Chrome*).
3. **Attachments:** Lampirkan screen recording video (maks. 15–20 detik) yang menunjukkan langkah reproduksi secara jelas.
