'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Share, Smartphone, Sparkles } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if already in standalone (installed PWA) mode
    const isStandaloneMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      ('standalone' in window.navigator && (window.navigator as unknown as { standalone: boolean }).standalone);

    if (isStandaloneMode) {
      setIsStandalone(true);
      return;
    }

    // Check if user previously dismissed banner in this session
    const dismissed = sessionStorage.getItem('warkop_pwa_dismissed');
    if (!dismissed) {
      setIsDismissed(false);
    }

    // Check for iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for Chrome/Android install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsDismissed(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setIsDismissed(true);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('warkop_pwa_dismissed', 'true');
  };

  // Do not show if running installed or dismissed or no eligible trigger
  if (isStandalone || isDismissed) {
    return null;
  }

  // Only show if Chrome deferredPrompt is ready OR device is iOS
  if (!deferredPrompt && !isIOS) {
    return null;
  }

  return (
    <aside
      aria-label="Pasang Aplikasi Warkop Sentosa"
      className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-40 max-w-sm w-[calc(100%-1.5rem)] sm:w-auto animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-[#1C1612]/95 backdrop-blur-xl border border-[#EA580C]/40 p-3 sm:p-3.5 rounded-2xl shadow-2xl shadow-black/80 ring-1 ring-white/10 text-stone-100 space-y-2.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-[#EA580C]/30 flex-shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Pasang Aplikasi Warkop
                </h4>
                <Sparkles className="w-3 h-3 text-[#F59E0B]" />
              </div>
              <p className="text-[11px] text-stone-300">
                Pesan menu warkop lebih cepat langsung dari layar HP-mu.
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Tutup promo aplikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action button based on platform */}
        {deferredPrompt && (
          <button
            onClick={handleInstallClick}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install Sekarang (Gratis)</span>
          </button>
        )}

        {isIOS && !deferredPrompt && (
          <div className="space-y-1.5">
            <button
              onClick={() => setShowIOSGuide(!showIOSGuide)}
              className="w-full py-2 px-3 rounded-xl bg-[#251D18] hover:bg-[#2F241E] border border-stone-700 text-[#F59E0B] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Share className="w-3.5 h-3.5" />
              <span>{showIOSGuide ? 'Tutup Panduan' : 'Cara Pasang di iPhone'}</span>
            </button>

            {showIOSGuide && (
              <div className="p-2.5 rounded-xl bg-[#14110E] border border-stone-800 text-[11px] text-stone-300 space-y-1 animate-in fade-in duration-200">
                <p>1. Ketuk ikon <strong>Share</strong> (kotak panah ke atas) di Safari.</p>
                <p>2. Gulir ke bawah lalu pilih <strong>&ldquo;Add to Home Screen&rdquo;</strong> (Tambah ke Layar Utama).</p>
                <p>3. Ketuk <strong>Add</strong>. Warkop Sentosa siap dibuka kapan saja!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
