import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenImpressum,
  onOpenDatenschutz,
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-850 pt-12 pb-24 md:pb-12 text-slate-400 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-display">KI Wissenssysteme</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Sichere, DSGVO-konforme KI-Assistenten und Enterprise RAG für KMU, Handwerk, Kanzleien und Pflege. Firmenwissen sekundenschnell abrufbar.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Inhaber: {SITE_CONFIG.founder} · Sitz: {SITE_CONFIG.location}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-slate-200 font-semibold uppercase tracking-wider text-[11px] block">
              Navigation
            </span>
            <ul className="space-y-1.5">
              <li><a href="#loesungen" className="hover:text-white transition-colors">Lösungen & Ablauf</a></li>
              <li><a href="#branchen" className="hover:text-white transition-colors">Branchenübersicht</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interaktiver Simulator</a></li>
              <li><a href="#rechner" className="hover:text-white transition-colors">ROI-Rechner</a></li>
              <li><a href="#sicherheit" className="hover:text-white transition-colors">DSGVO & Datenschutz</a></li>
            </ul>
          </div>

          {/* Direct Contact Channels */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="text-slate-200 font-semibold uppercase tracking-wider text-[11px] block">
              Direktkontakt
            </span>
            <div className="space-y-1.5 text-xs text-slate-300">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.phoneFormatted}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Telefon: {SITE_CONFIG.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. Alle Rechte vorbehalten.
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenImpressum}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Impressum
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onOpenDatenschutz}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Datenschutz
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Made in Germany 🇩🇪</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
