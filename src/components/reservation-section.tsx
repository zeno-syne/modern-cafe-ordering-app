'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, User, CheckCircle2, X, Send, Sparkles, Laptop, Gamepad2, Coffee } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

const SEATING_OPTIONS = [
  {
    id: 'laptop-desk',
    name: 'Meja Nugas Laptop',
    icon: Laptop,
    desc: 'Dekat colokan ganda & meja ergonomis, cocok buat kerja solo atau berdua.',
  },
  {
    id: 'lesehan',
    name: 'Area Lesehan Santai',
    icon: Coffee,
    desc: 'Karpet & bean bag empuk, bisa selonjoran santai bareng teman.',
  },
  {
    id: 'mabar-squad',
    name: 'Meja Panjang Mabar',
    icon: Gamepad2,
    desc: 'Kapasitas 4-8 orang, WiFi sinyal kuat anti lag pas push rank game.',
  },
];

export default function ReservationSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [seatingType, setSeatingType] = useState('laptop-desk');
  const [people, setPeople] = useState('2-4 Orang');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [notes, setNotes] = useState('');

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmedData, setConfirmedData] = useState<{
    name: string;
    phone: string;
    seatingName: string;
    people: string;
    date: string;
    time: string;
    notes: string;
    code: string;
  } | null>(null);

  const selectedSeat = SEATING_OPTIONS.find((s) => s.id === seatingType) || SEATING_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomCode = `NUGAS-${Math.floor(1000 + Math.random() * 9000)}`;

    const data = {
      name,
      phone: phone || '-',
      seatingName: selectedSeat.name,
      people,
      date: date || new Date().toISOString().split('T')[0],
      time,
      notes: notes.trim() || 'Tidak ada catatan tambahan',
      code: randomCode,
    };

    setConfirmedData(data);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
    setName('');
    setPhone('');
    setDate('');
    setTime('19:00');
    setPeople('2-4 Orang');
    setNotes('');
  };

  const handleShareToWhatsApp = () => {
    if (!confirmedData) return;
    const msg = encodeURIComponent(
      `*BOOKING MEJA WARKOP SENTOSA [${confirmedData.code}]*\n\n` +
      `👤 Nama: ${confirmedData.name}\n` +
      `📱 No. WhatsApp: ${confirmedData.phone}\n` +
      `🪑 Area Dipilih: *${confirmedData.seatingName}*\n` +
      `👥 Jumlah: ${confirmedData.people}\n` +
      `📅 Tanggal: ${confirmedData.date}\n` +
      `⏰ Jam Datang: ${confirmedData.time} WIB\n` +
      `📝 Catatan: ${confirmedData.notes}\n\n` +
      `Halo Min, mau pastiin meja siap pas kita sampai ya. Makasih!`
    );
    window.open(`https://wa.me/6281289902026?text=${msg}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 md:py-28 relative bg-[#14110E] border-t border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Gratis &bull; Tanpa DP &bull; Anti Ribet</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Booking Meja Nugas &amp; Mabar
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Biar gak kehabisan tempat pas jam ramai, kamu bisa amankan meja dulu secara gratis tanpa biaya minimum.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-9 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Seating Type Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-white uppercase tracking-wider block">
                Pilih Suasana Duduk yang Kamu Mau:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SEATING_OPTIONS.map((seat) => {
                  const Icon = seat.icon;
                  const isSelected = seatingType === seat.id;

                  return (
                    <div
                      key={seat.id}
                      onClick={() => setSeatingType(seat.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#2E2219] border-[#E07A2A] shadow-md shadow-[#E07A2A]/20 ring-1 ring-[#E07A2A]'
                          : 'bg-[#14110E] border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E07A2A]' : 'text-stone-400'}`} />
                          <p className={`text-xs font-bold ${isSelected ? 'text-[#E07A2A]' : 'text-white'}`}>
                            {seat.name}
                          </p>
                        </div>
                        <p className="text-[11px] text-stone-400 leading-relaxed font-light">
                          {seat.desc}
                        </p>
                      </div>

                      <div className="pt-2 mt-2 border-t border-stone-800 text-[10px] text-emerald-400 font-semibold">
                        ✓ 100% Free Booking
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E07A2A]" />
                  <span>Nama Kamu *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Fikri Haikal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#14110E] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#E07A2A] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-[#E07A2A]" />
                  <span>No. WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812-xxxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#14110E] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#E07A2A] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E07A2A]" />
                  <span>Tanggal Nongkrong *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#14110E] border border-stone-800 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-[#E07A2A] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E07A2A]" />
                  <span>Jam Kedatangan *</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#14110E] border border-stone-800 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-[#E07A2A] transition-colors cursor-pointer"
                >
                  <option value="10:00">10:00 WIB (Pagi Nugas)</option>
                  <option value="13:00">13:00 WIB (Siang Santai)</option>
                  <option value="16:00">16:00 WIB (Sore Kumpul)</option>
                  <option value="19:00">19:00 WIB (Malam Seru)</option>
                  <option value="21:00">21:00 WIB (Begadang Mabar)</option>
                  <option value="23:00">23:00 WIB (Midnight Chill)</option>
                </select>
              </div>
            </div>

            {/* People and Request */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#E07A2A]" />
                  <span>Berapa Orang? *</span>
                </label>
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#14110E] border border-stone-800 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-[#E07A2A] transition-colors cursor-pointer"
                >
                  <option value="1 Orang (Solo Nugas)">1 Orang (Solo Nugas)</option>
                  <option value="2 Orang (Duet Nugas)">2 Orang (Duet Nugas)</option>
                  <option value="3-4 Orang (Group Santai)">3 - 4 Orang (Group Santai)</option>
                  <option value="5-8 Orang (Squad Mabar)">5 - 8 Orang (Squad Mabar)</option>
                  <option value="8+ Orang (Rombongan)">8+ Orang (Rombongan Acara)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Request Khusus (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Butuh colokan banyak, pinjam kartu Uno..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#14110E] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#E07A2A] transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-full button-warm font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Simpan &amp; Amankan Tempat Duduk (Gratis)</span>
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirmationOpen && confirmedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#1C1612] border border-[#E07A2A]/40 p-6 sm:p-8 shadow-2xl space-y-5">
            
            <button
              onClick={handleCloseConfirmation}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-1.5 pt-1">
              <div className="w-12 h-12 rounded-full bg-[#E07A2A]/20 text-[#E07A2A] border border-[#E07A2A]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Tempat Berhasil Dipesankan!
              </h3>
              <p className="text-xs text-stone-400">
                Kode Booking: <span className="font-mono font-bold text-[#E29D52]">{confirmedData.code}</span>
              </p>
            </div>

            <div className="rounded-2xl bg-[#14110E] border border-stone-800 p-4 space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Nama:</span>
                <span className="font-semibold text-white">{confirmedData.name}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Area:</span>
                <span className="font-semibold text-[#E07A2A]">{confirmedData.seatingName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Jumlah:</span>
                <span className="font-semibold text-white">{confirmedData.people}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Waktu:</span>
                <span className="font-semibold text-white">{confirmedData.date} &bull; {confirmedData.time} WIB</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleShareToWhatsApp}
                className="w-full py-3.5 rounded-full button-warm font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Bukti Booking ke WhatsApp</span>
              </button>

              <button
                onClick={handleCloseConfirmation}
                className="w-full py-2.5 rounded-full bg-transparent hover:bg-stone-900 text-stone-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
