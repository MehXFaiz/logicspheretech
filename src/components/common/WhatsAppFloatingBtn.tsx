'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppFloatingBtn: React.FC = () => {
  const [openPrompt, setOpenPrompt] = useState(false);
  const [message, setMessage] = useState('Hi LogicSphere Atelier! I would like to inquire about a bespoke engineering project.');

  const handleSend = () => {
    const phone = '14155550199'; // Official business support WhatsApp line
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {openPrompt && (
        <div className="mb-3 w-72 sm:w-80 p-4 rounded-3xl bg-[#343e39]/95 border border-[#116466]/40 text-[#D1E8E2] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 shadow-[#116466]/20 font-mono">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D1E8E2]/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#116466] animate-pulse" />
              <span className="text-xs font-black text-[#116466] uppercase tracking-wider">Priority Executive Chat</span>
            </div>
            <button
              onClick={() => setOpenPrompt(false)}
              className="p-1 text-slate-400 hover:text-[#D1E8E2] transition-colors"
              aria-label="Close prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Direct connection to our Principal Systems Architect. Typical SLA reply within 5 minutes.
          </p>
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] focus:outline-none focus:border-[#116466] mb-3"
          />
          <button
            onClick={handleSend}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#116466]/30 transition-all"
          >
            <span>Initiate WhatsApp Desk</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <button
        onClick={() => setOpenPrompt(!openPrompt)}
        className="group relative p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 shadow-xl hover:shadow-[#116466]/50 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 stroke-[2.5]" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#116466] border-2 border-[#2C3531] rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#116466] border-2 border-[#2C3531] rounded-full" />
      </button>
    </div>
  );
};
