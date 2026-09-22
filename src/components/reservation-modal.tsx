'use client';

import { useState } from 'react';
import { X, Calendar, Clock, Users, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp pre-filled message
    const message = encodeURIComponent(
      `*RESERVASI MEJA WARKOP SENTOSA*\n\n` +
      `👤 Nama: ${name}\n` +
      `📱 No. HP/WA: ${phone}\n` +
      `📅 Tanggal: ${date || 'Hari ini'}\n` +
      `⏰ Waktu: ${time} WIB\n` +
      `👥 Jumlah Tamu: ${guests} Orang\n` +
      `📝 Catatan Khusus: ${notes || '-'}\n\n` +
      `Mohon konfirmasi ketersediaan meja. Terima kasih!`
    );

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/6281289902026?text=${message}`, '_blank');
      setIsSubmitted(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-stone-900 border border-stone-700/80 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Reservasi Cepat
          </span>
          <h3 className="text-2xl font-bold text-stone-100 font-serif">
            Pesan Meja / Ruang Temu
          </h3>
          <p className="text-xs text-stone-400">
            Lengkapi data singkat di bawah ini. Kami akan memproses konfirmasi langsung ke nomor WhatsApp Anda.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-300">Nama Lengkap</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Dimas Aditya"
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-300">Nomor WhatsApp</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contoh: 08123456789"
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Tanggal</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Waktu Kedatangan</label>
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Jumlah Orang</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-all"
              >
                <option value="1">1 Orang (Solo Work)</option>
                <option value="2">2 Orang</option>
                <option value="4">3 - 4 Orang</option>
                <option value="6">5 - 6 Orang</option>
                <option value="8+">Grup Besar (&gt; 8 Orang)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Preferensi Area</label>
              <select
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-all"
              >
                <option>Indoor AC (Non-Smoking)</option>
                <option>Outdoor Smoking Garden</option>
                <option>Slow Bar Counter (Depan Barista)</option>
                <option>Meeting Room</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-300">Catatan Tambahan (Opsional)</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Dekat colokan, butuh proyektor, dsb."
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-stone-950 animate-bounce" />
                  <span>Membuka WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan Reservasi</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-stone-500 mt-2">
              Tidak dipungut biaya uang muka untuk reservasi reguler.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
