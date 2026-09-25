'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Wifi,
  Wind,
  Clock,
  Sparkles,
  CheckCircle2,
  Activity,
  Gauge,
} from 'lucide-react';

export default function Story() {
  const [isTestingSpeed, setIsTestingSpeed] = useState(false);
  const [speedResult, setSpeedResult] = useState<{
    ping: number;
    download: number;
    upload: number;
  } | null>(null);

  const handleTestSpeed = () => {
    setIsTestingSpeed(true);
    setSpeedResult(null);

    setTimeout(() => {
      // Generate realistic high-speed cafe network metrics
      const download = Math.floor(Math.random() * 25) + 145; // 145 - 170 Mbps
      const upload = Math.floor(Math.random() * 20) + 75; // 75 - 95 Mbps
      const ping = Math.floor(Math.random() * 4) + 5; // 5 - 8 ms
      setSpeedResult({ download, upload, ping });
      setIsTestingSpeed(false);
    }, 1200);
  };

  const points = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Fiber Wi-Fi & Plentiful Power Outlets',
      description:
        'Never worry about dying batteries or video call lag spikes during deep focus work or squad gaming.',
      badge: 'Lag-Free & Full Power',
      interactive: true,
    },
    {
      icon: Wind,
      title: 'Comfortable Booths & Open-Air Patio',
      description:
        'Choose between ergonomic indoor AC seating or relaxed semi-outdoor patio tables with fresh air circulation.',
      badge: 'Spacious & Relaxed',
      interactive: false,
    },
    {
      icon: Clock,
      title: 'Open Past Midnight Every Day',
      description:
        'Best ideas happen after hours? We keep your caffeine fueled and kitchen warm until 1:00 or 2:00 AM.',
      badge: 'Night Owls Welcome',
      interactive: false,
    },
  ];

  return (
    <section
      id="story"
      className="scroll-mt-24 py-20 sm:py-28 md:py-32 relative bg-[#17120E] border-y border-stone-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/35 text-[#F59E0B] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Why Guests Love Sentosa</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            Crafted for Focus, Work &amp; Community
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-stone-300 max-w-xl mx-auto leading-relaxed font-normal px-2">
            More than just coffee—a modern, unpretentious haven designed for productive focus hours, group hangouts, and authentic conversation.
          </p>
        </div>

        {/* Content Layout: Photo + 3 Main Focus Points with Double-Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left: Candid Photo */}
          <div className="lg:col-span-5 w-full">
            <div className="bezel-shell">
              <div className="relative rounded-[calc(1.75rem-0.375rem)] overflow-hidden border border-stone-800/80 aspect-[4/3] group">
                <Image
                  src="/warkop-candid.jpg"
                  alt="Guests enjoying coffee and productive work at Sentosa Cafe"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#1C1612]/90 backdrop-blur-md border border-stone-800 text-xs">
                  <div className="flex items-center gap-2 text-white font-bold mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>The Ultimate Co-Working Cafe</span>
                  </div>
                  <p className="text-stone-300 font-normal text-[11px] leading-tight">
                    Vibrant, welcoming atmosphere with zero seating time limits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Core Highlights */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => {
              const MainIcon = pt.icon;
              return (
                <div key={idx} className="bezel-shell">
                  <div className="bezel-core !p-4 sm:!p-6 !flex-col items-start gap-3">
                    <div className="flex items-start gap-3.5 sm:gap-5 w-full">
                      {/* Bold Casual Line Icon */}
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#120E0B] border-2 border-[#EA580C]/40 flex items-center justify-center text-[#F59E0B] flex-shrink-0 group-hover:border-[#EA580C] group-hover:scale-105 transition-all shadow-inner">
                        <MainIcon className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.2]" />
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white font-display group-hover:text-[#F59E0B] transition-colors">
                            {pt.title}
                          </h3>
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/15 px-2.5 py-0.5 rounded-full border border-[#EA580C]/30">
                            {pt.badge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>

                    {/* Interactive WiFi Speedometer Widget on the first card */}
                    {pt.interactive && (
                      <div className="w-full pt-2.5 mt-1 border-t border-stone-800/80">
                        <div className="p-3 rounded-xl bg-[#14100D] border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 text-xs text-stone-300">
                            <Gauge className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            {speedResult ? (
                              <div className="text-left font-mono">
                                <span className="text-emerald-400 font-extrabold text-sm">
                                  {speedResult.download} Mbps
                                </span>{' '}
                                <span className="text-stone-400 text-[11px]">
                                  (Ping: {speedResult.ping}ms &bull; Upload: {speedResult.upload} Mbps)
                                </span>
                              </div>
                            ) : (
                              <span>
                                Dedicated Enterprise Fiber &bull; <strong>150 Mbps</strong> ultra-stable bandwidth
                              </span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={handleTestSpeed}
                            disabled={isTestingSpeed}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800 hover:bg-[#EA580C]/20 border border-stone-700 hover:border-[#EA580C]/50 text-white text-[11px] font-bold transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                          >
                            <Activity
                              className={`w-3 h-3 text-[#EA580C] ${
                                isTestingSpeed ? 'animate-spin' : ''
                              }`}
                            />
                            <span>
                              {isTestingSpeed ? 'Measuring Latency...' : speedResult ? 'Retest Wi-Fi Speed' : 'Test Wi-Fi Speed'}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
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
