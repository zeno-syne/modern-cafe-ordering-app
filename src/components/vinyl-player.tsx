'use client';

import { useState } from 'react';
import { Disc3, Music2, ExternalLink, Play, Pause, Headphones, Sparkles } from 'lucide-react';

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-[#1C1612] border border-[#E07A2A]/25 relative overflow-hidden shadow-xl">
      {/* Warm ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 ambient-glow-warm rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Vinyl Record Illustration */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto">
            <div
              className={`w-full h-full rounded-full bg-stone-950 border-4 border-stone-800 flex items-center justify-center shadow-lg shadow-black/60 ${
                isPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '6s', animationTimingFunction: 'linear' }}
            >
              <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#E07A2A] to-[#B8530C] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-stone-950" />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-stone-900 border border-[#E07A2A]/50 flex items-center justify-center">
              <Headphones className="w-3.5 h-3.5 text-[#E07A2A]" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E07A2A]/15 border border-[#E07A2A]/30 text-[#E07A2A] text-[10px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Curated Audio Vibe</span>
            </div>
            <h4 className="font-display text-lg sm:text-xl text-white font-bold tracking-wide">
              Playlist Teman Nugas &amp; Mabar
            </h4>
            <p className="text-xs text-stone-300 font-light mt-0.5">
              Alunan Lo-Fi Chill Beats, Indo Indie &amp; Japanese City Pop anti-distraksi
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#E07A2A]/15 hover:bg-[#E07A2A]/25 text-[#F5EDE4] border border-[#E07A2A]/40 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#E07A2A]" />
                <span>Pause Musik</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#E07A2A] fill-[#E07A2A]" />
                <span>Dengarkan Vibe</span>
              </>
            )}
          </button>

          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DXc8kgYqQLMfH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold tracking-wider uppercase transition-all"
          >
            <Music2 className="w-3.5 h-3.5" />
            <span>Open Spotify</span>
            <ExternalLink className="w-3 h-3 text-emerald-400" />
          </a>
        </div>
      </div>

      {/* Embedded Player */}
      {isPlaying && (
        <div className="mt-5 pt-5 border-t border-stone-800/80 animate-in fade-in duration-300">
          <iframe
            style={{ borderRadius: '16px' }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXc8kgYqQLMfH?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Warkop Sentosa Teman Nugas Spotify Playlist"
          />
        </div>
      )}
    </div>
  );
}
