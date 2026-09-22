'use client';

import { Sparkles, HeartHandshake, Flame, Globe } from 'lucide-react';

export default function Story() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Kemitraan Petani Nusantara',
      description: 'Kami bekerja sama langsung dengan kelompok tani di Gayo, Kintamani, dan Bajawa dengan sistem direct trade yang adil untuk keberlanjutan kebun kopi.',
    },
    {
      icon: Flame,
      title: 'Micro-Batch Roasting In-House',
      description: 'Kopi disangrai dalam kuantitas kecil setiap minggunya untuk memastikan profil rasa, tingkat kematangan, dan kesegaran senyawa aromatik tetap di puncaknya.',
    },
    {
      icon: Globe,
      title: 'Esensi Warkop, Standar Dunia',
      description: 'Menghormati jiwa warkop Indonesia yang egaliter dan santai, dipadukan dengan teknik seduh dan mesin espresso presisi modern.',
    },
  ];

  return (
    <section id="filosofi" className="py-20 md:py-28 relative bg-stone-900/40 border-y border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Filosofi & Akar Budaya</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-100 font-serif leading-tight">
              Lebih dari Sekadar Kafe, Ini Ruang Temu Cerita.
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              Bagi masyarakat Indonesia, warkop bukan sekadar tempat menenggak kafein. Warkop adalah ruang dialektika, tempat lahirnya ide-ide besar, obrolan santai tanpa kasta, dan persinggahan setelah seharian bergelut dengan rutinitas kota.
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-light">
              <strong className="text-amber-400 font-medium">Warkop Sentosa</strong> lahir dari kerinduan akan suasana hangat tersebut, disandingkan dengan dedikasi penuh terhadap kualitas kopi *specialty grade*. Tidak ada pretensi, hanya secangkir kopi jujur dengan cita rasa mendalam.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">100%</div>
                <div className="text-xs text-stone-400 mt-0.5">Biji Asli Indonesia</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">8+</div>
                <div className="text-xs text-stone-400 mt-0.5">Proses Fermentasi Unik</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">7 Hari</div>
                <div className="text-xs text-stone-400 mt-0.5">Maksimal Umur Sangrai</div>
              </div>
            </div>
          </div>

          {/* Right: Value Pillars in Sleek Dark Cards */}
          <div className="lg:col-span-6 space-y-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-stone-900/80 border border-stone-800 p-6 backdrop-blur-md hover:border-amber-500/30 hover:bg-stone-850 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-stone-100 font-serif">
                        {v.title}
                      </h3>
                      <p className="text-xs text-stone-400 leading-relaxed">
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
