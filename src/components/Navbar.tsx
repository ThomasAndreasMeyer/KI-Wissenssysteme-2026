import React, { useState } from 'react';
import { Menu, X, Sparkles, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Lösungen', href: '#loesungen' },
    { label: 'Branchen', href: '#branchen' },
    { label: 'Live-Demo', href: '#demo' },
    { label: 'ROI-Rechner', href: '#rechner' },
    { label: 'DSGVO & Sicherheit', href: '#sicherheit' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Brand Wordmark (Single Text Element with clean icon) */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-slate-100 group-hover:text-white transition-colors">
            KI Wissenssysteme
          </span>
        </a>

        {/* Zone 2: Clean 4–5 single-line navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Desktop) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-[0.98] transition-all shadow-sm shadow-blue-600/30 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Erstgespräch buchen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Trigger (48x48 touch hitbox) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation öffnen"
            className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-white rounded-lg active:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-3.5 py-3 text-base font-medium text-slate-200 rounded-lg hover:bg-slate-900 active:bg-slate-850 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-850 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <span>Kostenloses Erstgespräch anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-xl hover:bg-emerald-900/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-850 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_CONFIG.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
