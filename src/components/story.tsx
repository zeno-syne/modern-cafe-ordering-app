'use client';

import { Sparkles, HeartHandshake, Coffee, Zap, Users, GraduationCap } from 'lucide-react';

export default function Story() {
  const values = [
    {
      icon: Users,
      title: 'Tongkrongan Nyaman Tanpa Kasta',
      description: 'Mau nugas skripsi sampai subuh, mabar game bareng squad, atau sekadar cerita curhat santai, semua disambut hangat tanpa tatapan sinis.',
    },
    {
      icon: Coffee,
      title: 'Rasa Kafe Enak, Harga Warkop',
      description: 'Kopi susu aren racikan mantap, Indomie telur kornet lezat, dan aneka snack gurih dengan harga ramah kantong anak kos dan fresh graduate.',
    },
    {
      icon: Zap,
      title: 'Fasilitas Wajib Nugas & Remote Work',
      description: 'Colokan di setiap meja gak pake rebutan, WiFi ngebut 150 Mbps, dan gratis pinjam aneka board games saat suntuk.',
    },
  ];

  return (
    <section id="filosofi" className="py-20 md:py-28 relative bg-[#17120E] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cerita &amp; Suasana Kami</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
              Warkop Nyaman Tempat Pulang &amp; Bertemu Teman.
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              Kami percaya tempat nongkrong yang asyik gak harus mahal atau bikin canggung. Di <strong className="text-[#E07A2A] font-semibold">Warkop Sentosa</strong>, kamu bebas berlama-lama buka laptop buat nugas, diskusi project sampingan, atau teriak seru pas push rank bareng squad.
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-light">
              Pelayanannya ramah, kopinya beneran bikin melek, makanannya porsi kenyang, dan yang terpenting: tagihannya gak bikin dompet menangis di akhir bulan.
            </p>

            <div className="pt-4 flex items-center gap-8 border-t border-stone-800">
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold text-[#E29D52] font-display">100%</div>
                <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-medium">Bebas FUP WiFi</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold text-[#E29D52] font-display">10rb-an</div>
                <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-medium">Mulai Harga Menu</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold text-[#E29D52] font-display">02.00</div>
                <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-medium">Buka Sampai Subuh</div>
              </div>
            </div>
          </div>

          {/* Right 3 Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#1C1612] border border-stone-800 p-6 sm:p-7 hover:border-[#E07A2A]/40 hover:bg-[#221B16] transition-all duration-200 group shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#14110E] border border-stone-800 flex items-center justify-center text-[#E07A2A] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-[#E07A2A] transition-colors mb-1">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
