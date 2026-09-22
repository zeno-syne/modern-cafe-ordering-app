'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, User, FileText, CheckCircle2, X, Send, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

export default function ReservationSection() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [notes, setNotes] = useState('');

  // Confirmation Pop-up state
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmedData, setConfirmedData] = useState<{
    name: string;
    people: string;
    date: string;
    time: string;
    notes: string;
    code: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate confirmation code
    const randomCode = `WS-${Math.floor(1000 + Math.random() * 9000)}`;

    const data = {
      name,
      people,
      date: date || new Date().toISOString().split('T')[0],
      time,
      notes: notes.trim() || 'Tidak ada catatan khusus',
      code: randomCode,
    };

    setConfirmedData(data);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
    // Reset form after successful submission
    setName('');
    setDate('');
    setTime('19:00');
    setPeople('2');
    setNotes('');
  };

  const handleShareToWhatsApp = () => {
    if (!confirmedData) return;
    const msg = encodeURIComponent(
      `*KONFIRMASI RESERVASI MEJA [${confirmedData.code}]*\n\n` +
      `👤 Nama: ${confirmedData.name}\n` +
      `👥 Jumlah Orang: ${confirmedData.people} Orang\n` +
      `📅 Tanggal: ${confirmedData.date}\n` +
      `⏰ Waktu: ${confirmedData.time} WIB\n` +
      `📝 Catatan: ${confirmedData.notes}\n\n` +
      `Halo Warkop Sentosa, mohon konfirmasi reservasi dengan kode ini.`
    );
    window.open(`https://wa.me/6281289902026?text=${msg}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 md:py-28 relative bg-stone-900/40 border-t border-stone-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
            Reservasi Meja
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pastikan meja terbaik Anda tersedia sebelum tiba. Tanpa biaya uang muka untuk reservasi harian.
          </p>
        </div>

        {/* Reservation Form Card */}
        <div className="rounded-3xl bg-stone-900/90 border border-stone-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  <span>Nama Lengkap *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              {/* Number of People Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  <span>Jumlah Orang *</span>
                </label>
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                >
                  <option value="1">1 Orang (Solo Work)</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                  <option value="4">4 Orang</option>
                  <option value="5">5 Orang</option>
                  <option value="6">6 Orang</option>
                  <option value="8+">Grup Besar (&gt; 8 Orang)</option>
                </select>
              </div>

              {/* Date Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tanggal Kunjungan *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              {/* Time Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Waktu / Jam Datang *</span>
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>
            </div>

            {/* Notes Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>Catatan Tambahan (Notes)</span>
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Butuh meja dekat stopkontak, area non-smoking, perayaan ulang tahun..."
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#D97706] hover:bg-[#b45309] text-stone-950 font-extrabold text-sm shadow-xl shadow-[#D97706]/30 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] border border-[#f59e0b]/40"
              >
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>Kirim Permintaan Reservasi</span>
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Confirmation Pop-up Notification Modal */}
      {isConfirmationOpen && confirmedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-stone-900 border border-stone-700 p-6 sm:p-8 shadow-2xl text-center space-y-6">
            
            {/* Close Icon */}
            <button
              onClick={handleCloseConfirmation}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Success Icon Badge */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            {/* Title & Status */}
            <div>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                Kode: {confirmedData.code}
              </span>
              <h3 className="text-2xl font-bold text-white font-serif mt-2">
                Reservasi Berhasil Diajukan!
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Terima kasih, <strong>{confirmedData.name}</strong>. Tim barista kami telah mencatat jadwal kedatangan Anda.
              </p>
            </div>

            {/* Reservation Summary Details */}
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-left space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Tamu</span>
                <span className="font-semibold text-stone-200">{confirmedData.name}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Jumlah Orang</span>
                <span className="font-semibold text-amber-400">{confirmedData.people} Orang</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Jadwal</span>
                <span className="font-semibold text-stone-200">{confirmedData.date} • {confirmedData.time} WIB</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-stone-400">Catatan</span>
                <span className="font-medium text-stone-300 text-right max-w-[200px] truncate">{confirmedData.notes}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleShareToWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Salinan ke WhatsApp Kedai</span>
              </button>

              <button
                onClick={handleCloseConfirmation}
                className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-all cursor-pointer"
              >
                Tutup Notifikasi
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
