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
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-24 sm:max-w-md z-40 p-5 rounded-3xl bg-[#343e39]/95 border border-[#116466]/40 shadow-2xl backdrop-blur-xl text-[#D1E8E2] animate-in fade-in slide-in-from-bottom-3 duration-300 font-mono shadow-[#116466]/20">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2.5 rounded-2xl bg-[#116466]/15 border border-[#116466]/35 text-[#116466]">
          <Cookie className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-sm font-bold flex items-center gap-1.5 text-[#D1E8E2]">
            <span>Atelier Privacy & Cookies</span>
            <Shield className="w-3.5 h-3.5 text-[#116466]" />
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
            We use essential and performance telemetry cookies to optimize edge response speed and secure your digital experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2.5 pt-1">
        <button
          onClick={declineCookies}
          className="px-4 py-2 rounded-xl bg-[#2C3531] hover:bg-[#D1E8E2]/10 text-xs text-slate-300 hover:text-[#D1E8E2] transition-colors border border-[#D1E8E2]/10"
        >
          Essential Only
        </button>
        <button
          onClick={acceptCookies}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] hover:opacity-95 text-xs font-black text-slate-950 uppercase tracking-wider shadow-lg shadow-[#116466]/25 transition-all"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
