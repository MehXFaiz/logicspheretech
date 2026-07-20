'use client';

import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to LogicSphere Atelier. How can our Principal Engineering team assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Thanks for inquiring! You can click "Get Free Quote" at the top or leave your work email right here, and our Principal Systems Architect will connect with you within 15 minutes.',
        },
      ]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 left-20 z-40">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#343e39]/95 border border-[#116466]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-96 animate-in fade-in slide-in-from-bottom-2 duration-200 shadow-[#116466]/20">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] flex items-center justify-between text-slate-950 font-mono">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-950/20 flex items-center justify-center">
                <Bot className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-sm font-black flex items-center gap-1">
                  LogicSphere AI Desk <Sparkles className="w-3 h-3 text-slate-950 animate-spin" />
                </h4>
                <p className="text-[10px] font-bold tracking-widest uppercase">Always Online • 24/7 SLA</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-slate-950/20 transition-colors"
              aria-label="Close live chat"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#2C3531]/90 text-sm font-mono">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 font-bold rounded-br-none shadow-md'
                      : 'bg-[#343e39] text-slate-200 border border-[#116466]/35 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#343e39] border-t border-[#116466]/35 flex items-center justify-between gap-2">
            <input
              type="text"
              placeholder="Ask anything or leave your email..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-xs focus:outline-none focus:border-[#116466] font-mono"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 font-black hover:opacity-95 transition-opacity"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="hidden sm:flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#343e39]/95 hover:bg-[#116466]/20 border border-[#116466]/40 text-[#D1E8E2] text-xs font-mono font-bold uppercase tracking-wider shadow-lg hover:shadow-[#116466]/30 transition-all scale-105"
        >
          <Bot className="w-4 h-4 text-[#116466]" />
          <span>AI Concierge</span>
        </button>
      )}
    </div>
  );
};
