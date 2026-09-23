'use client';

import { useState } from 'react';
import { Disc3, Music2, ExternalLink, Play, Pause, Volume2, Sparkles } from 'lucide-react';

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-8 rounded-3xl glass-panel border border-[#C5A059]/30 relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Spinning Vinyl Graphic */}
        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
            {/* Spinning Vinyl Record */}
            <div
              className={`w-full h-full rounded-full bg-stone-950 border-4 border-stone-800 flex items-center justify-center shadow-xl shadow-black/80 ${
                isPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '6s', animationTimingFunction: 'linear' }}
            >
              {/* Record Grooves */}
              <div className="w-16 h-16 rounded-full border border-stone-800/80 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#8C6D2D] flex items-center justify-center border border-amber-300/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-950" />
                </div>
              </div>
            </div>
            
            {/* Small Needle/Turntable Arm */}
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-stone-900 border border-[#C5A059]/40 flex items-center justify-center shadow">
              <Disc3 className="w-3.5 h-3.5 text-[#C5A059]" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Vinyl Lounge Live Ambience</span>
            </div>
            <h4 className="font-serif text-lg sm:text-xl text-white font-bold tracking-wide">
              Sentosa Vinyl Session Vol. 04
            </h4>
            <p className="text-xs text-stone-400 font-light mt-0.5">
              Kurasi Piringan Hitam: Japanese City Pop, Bossa Nova &amp; Midnight Jazz
            </p>
          </div>
        </div>

        {/* Right: Actions & Spotify Link */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059]/15 hover:bg-[#C5A059]/25 text-[#EDE6DD] border border-[#C5A059]/40 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Pause Vinyl</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                <span>Putar Musik</span>
              </>
            )}
          </button>

          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DXc8kgYqQLMfH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold tracking-wider uppercase transition-all"
          >
            <Music2 className="w-3.5 h-3.5" />
            <span>Open Spotify</span>
            <ExternalLink className="w-3 h-3 text-emerald-400/80" />
          </a>
        </div>
      </div>

      {/* Embedded Spotify Player Preview (when playing or expandable) */}
      {isPlaying && (
        <div className="mt-6 pt-6 border-t border-stone-800/80 animate-in fade-in duration-300">
          <iframe
            style={{ borderRadius: '16px' }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXc8kgYqQLMfH?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Warkop Sentosa Curated Spotify Playlist"
          />
        </div>
      )}
    </div>
  );
}
