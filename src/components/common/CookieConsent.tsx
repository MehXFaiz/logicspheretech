'use client';

import React, { useEffect, useState } from 'react';
import { Cookie, Shield } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('logicsphere_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('logicsphere_cookie_consent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem('logicsphere_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-24 sm:max-w-md z-40 p-5 rounded-3xl bg-[#0B0E14]/95 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-xl text-white animate-in fade-in slide-in-from-bottom-3 duration-300 font-mono shadow-[#D4AF37]/20">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2.5 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37]">
          <Cookie className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-sm font-bold flex items-center gap-1.5 text-white">
            <span>Atelier Privacy & Cookies</span>
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
            We use essential and performance telemetry cookies to optimize edge response speed and secure your digital experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2.5 pt-1">
        <button
          onClick={declineCookies}
          className="px-4 py-2 rounded-xl bg-[#050608] hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors border border-white/10"
        >
          Essential Only
        </button>
        <button
          onClick={acceptCookies}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] hover:opacity-95 text-xs font-black text-slate-950 uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 transition-all"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
