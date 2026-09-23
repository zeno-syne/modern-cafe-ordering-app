'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, User, FileText, CheckCircle2, X, Send, Sparkles, Car, Shield, DoorClosed } from 'lucide-react';
import { CAFE_INFO } from '@/data/coffee-menu';

const ROOM_OPTIONS = [
  {
    id: 'main-hall',
    name: 'Main Dining & Vinyl Counter',
    capacity: '1 - 4 Orang',
    minSpend: 0,
    desc: 'Area temaram utama dekat barista slow bar dan vinyl turntable.',
  },
  {
    id: 'mezzanine',
    name: 'Mezzanine Lounge (Semi-Private)',
    capacity: '4 - 8 Orang',
    minSpend: 250000,
    desc: 'Lantai dua bernuansa hangat dan tenang untuk diskusi atau kerja kelompok.',
  },
  {
    id: 'vip-room',
    name: 'VIP Private & Listening Salon',
    capacity: '6 - 12 Orang',
    minSpend: 500000,
    desc: 'Ruangan eksklusif kedap suara dengan smart display 4K, turntable privat, dan dedicated host.',
  },
];

export default function ReservationSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('main-hall');
  const [people, setPeople] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [notes, setNotes] = useState('');

  // Confirmation Pop-up state
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmedData, setConfirmedData] = useState<{
    name: string;
    phone: string;
    roomName: string;
    minSpend: number;
    people: string;
    date: string;
    time: string;
    notes: string;
    code: string;
  } | null>(null);

  const selectedRoom = ROOM_OPTIONS.find((r) => r.id === roomType) || ROOM_OPTIONS[0];

  const formatRupiah = (val: number) => {
    if (val === 0) return 'Tanpa Min. Charge';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomCode = `SENOPATI-${Math.floor(1000 + Math.random() * 9000)}`;

    const data = {
      name,
      phone: phone || '-',
      roomName: selectedRoom.name,
      minSpend: selectedRoom.minSpend,
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
    setName('');
    setPhone('');
    setDate('');
    setTime('19:00');
    setPeople('2');
    setNotes('');
  };

  const handleShareToWhatsApp = () => {
    if (!confirmedData) return;
    const msg = encodeURIComponent(
      `*KONFIRMASI RESERVASI WARKOP SENTOSA [${confirmedData.code}]*\n\n` +
      `👤 Nama: ${confirmedData.name}\n` +
      `📱 Telepon/WA: ${confirmedData.phone}\n` +
      `📍 Area: *${confirmedData.roomName}*\n` +
      `💰 Ketentuan: ${formatRupiah(confirmedData.minSpend)}\n` +
      `👥 Jumlah: ${confirmedData.people} Orang\n` +
      `📅 Tanggal: ${confirmedData.date}\n` +
      `⏰ Waktu: ${confirmedData.time} WIB\n` +
      `📝 Catatan: ${confirmedData.notes}\n\n` +
      `🚗 Mohon info ketersediaan slot valet parking juga. Terima kasih!`
    );
    window.open(`https://wa.me/6281289902026?text=${msg}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 md:py-32 relative bg-[#0D0B0A] border-t border-stone-800/80">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] ambient-glow-gold rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table &amp; VIP Room Booking</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            Reservasi Meja &amp; Private VIP Room
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Amankan area pilihan Anda untuk ngopi santai, pertemuan bisnis privat, maupun kumpul tertutup di Senopati.
          </p>
        </div>

        {/* Valet Feature Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#1A1512] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Complimentary Valet Parking
              </p>
              <p className="text-[11px] text-stone-400 font-light">
                Parkir bebas repot. Tim valet profesional kami siap menyambut kendaraan Anda langsung di lobi.
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            Free Service
          </span>
        </div>

        {/* Reservation Form Card */}
        <div className="rounded-3xl bg-[#140F0D] border border-stone-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Area Choice Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#EDE6DD] uppercase tracking-wider flex items-center gap-1.5">
                <DoorClosed className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Pilih Tipe Ruangan / Area *</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ROOM_OPTIONS.map((room) => {
                  const isSelected = roomType === room.id;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setRoomType(room.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#241C16] border-[#C5A059] shadow-lg shadow-[#C5A059]/20 ring-1 ring-[#C5A059]'
                          : 'bg-[#181310] border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <p className={`text-xs font-bold ${isSelected ? 'text-[#C5A059]' : 'text-white'}`}>
                            {room.name}
                          </p>
                        </div>
                        <p className="text-[11px] text-stone-400 font-light leading-relaxed mb-3">
                          {room.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[10px]">
                        <span className="text-stone-400">{room.capacity}</span>
                        <span className="font-bold text-[#E5C07B]">{formatRupiah(room.minSpend)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Nama Lengkap *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Adrian Pratama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0B0A] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Nomor WhatsApp Aktif *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812-xxxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0B0A] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Date Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Tanggal Kedatangan *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0B0A] border border-stone-800 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {/* Time Field */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Waktu / Jam *</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0B0A] border border-stone-800 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                >
                  <option value="09:00">09:00 WIB (Pagi Santai)</option>
                  <option value="11:30">11:30 WIB (Lunch Meeting)</option>
                  <option value="14:00">14:00 WIB (Afternoon Coffee)</option>
                  <option value="16:30">16:30 WIB (Golden Hour Sunset)</option>
                  <option value="19:00">19:00 WIB (Evening Vinyl Session)</option>
                  <option value="21:00">21:00 WIB (Late Night Sanctuary)</option>
                  <option value="22:30">22:30 WIB (Midnight Chill)</option>
                </select>
              </div>

              {/* People Count */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Jumlah Tamu *</span>
                </label>
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0B0A] border border-stone-800 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                >
                  <option value="1">1 Orang (Solo Work / Slow Bar)</option>
                  <option value="2">2 Orang (Casual Catch-up)</option>
                  <option value="3-4">3 - 4 Orang (Small Group)</option>
                  <option value="5-8">5 - 8 Orang (Lounge Discussion)</option>
                  <option value="8+">8+ Orang (VIP Private Exclusive)</option>
                </select>
              </div>

              {/* Minimum Spend Notice Badge */}
              <div className="space-y-2 flex flex-col justify-end">
                <div className="p-3 rounded-xl bg-[#1A1512] border border-[#C5A059]/30 text-xs">
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                    Ketentuan Area Dipilih:
                  </span>
                  <span className="font-bold text-[#E5C07B] font-mono text-sm">
                    {formatRupiah(selectedRoom.minSpend)}
                  </span>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Permintaan Khusus / Kebutuhan Rapat (Opsional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Contoh: Butuh colokan dekat sofa, request lagu piringan hitam, atau butuh konektor HDMI untuk TV VIP Room..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0D0B0A] border border-stone-800 text-stone-100 placeholder-stone-600 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full button-gold font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Konfirmasi &amp; Amankan Tempat Sekarang</span>
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Pop-up Modal */}
      {isConfirmationOpen && confirmedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#181310] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={handleCloseConfirmation}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="text-center space-y-2 pt-2">
              <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#C5A059]/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Reservasi Berhasil Diajukan!
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Kode Booking: <span className="font-mono font-bold text-[#E5C07B]">{confirmedData.code}</span>
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="rounded-2xl bg-[#0D0B0A] border border-stone-800 p-5 space-y-3 text-xs">
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Nama Pemesan:</span>
                <span className="font-semibold text-white">{confirmedData.name}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Area / Ruangan:</span>
                <span className="font-semibold text-[#C5A059]">{confirmedData.roomName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Ketentuan Min. Spend:</span>
                <span className="font-mono text-[#E5C07B] font-bold">{formatRupiah(confirmedData.minSpend)}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Jumlah Tamu:</span>
                <span className="font-semibold text-white">{confirmedData.people} Orang</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Waktu Kedatangan:</span>
                <span className="font-semibold text-white">{confirmedData.date} &bull; {confirmedData.time} WIB</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-400">Fasilitas Parkir:</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <Car className="w-3.5 h-3.5" />
                  Free Valet Parking
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleShareToWhatsApp}
                className="w-full py-3.5 rounded-full button-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Detail ke WhatsApp Warkop Sentosa</span>
              </button>

              <button
                onClick={handleCloseConfirmation}
                className="w-full py-2.5 rounded-full bg-transparent hover:bg-stone-900 text-stone-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
