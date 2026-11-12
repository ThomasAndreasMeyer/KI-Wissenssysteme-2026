import React from 'react';
import { ArrowRight, Play, Shield, Server, Zap, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-800/80">
      {/* Background ambient glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-900/15 via-indigo-900/10 to-transparent pointer-events-none -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left">
            
            {/* Clean unboxed editorial kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-blue-400 font-semibold tracking-wide uppercase">DSGVO-First</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Deutsche Rechenzentren</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Für den deutschen Mittelstand</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Firmenwissen auf Knopfdruck.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
                Nie wieder Dokumente suchen.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Verbinden Sie SharePoint, Netzlaufwerke, Handbücher und PDFs mit einem intelligenten, sicheren KI-Wissensassistenten. Ihre Mitarbeiter erhalten in Sekunden fundierte Antworten mit exakten Quellenangaben.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/25 whitespace-nowrap cursor-pointer"
              >
                <span>Potenzialanalyse anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
              >
                <Play className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                <span>Interaktive Demo testen</span>
              </button>
            </div>

            {/* Trust bullet markers */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400 border-t border-slate-850">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kein Modelltraining mit Ihren Daten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Fundstellen mit genauer Seitenzahl</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bereitstellung in unter 14 Tagen</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Glass Scrim */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-950/40 bg-slate-900 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_ai_knowledge_system_1794458595236.jpg"
                alt="Moderne Arbeitsumgebung für KI-Wissenssysteme und Enterprise Wissensmanagement"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              {/* Overlay card for real-world proof */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    Enterprise RAG-Architektur
                  </span>
                  <span className="text-emerald-400 font-mono">DSGVO-Verifiziert</span>
                </div>
                <p className="text-xs text-slate-200 line-clamp-2">
                  Verknüpft Netzlaufwerke, SharePoint & PDFs zu einer sicheren, internen Wissenszentrale für Ihr Team.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 3-Metric Proof Strip below hero */}
        <div className="mt-14 pt-8 border-t border-slate-850 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
              -78 %
            </div>
            <div className="text-xs font-medium text-slate-400 mt-1">
              Such- & Nachfragezeit nach internen Richtlinien und Verfahrensanweisungen
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
              100 % DSGVO
            </div>
            <div className="text-xs font-medium text-slate-400 mt-1">
              Hosting in Deutschland / EU oder On-Premise auf Ihrer eigenen IT-Infrastruktur
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
              &lt; 14 Tage
            </div>
            <div className="text-xs font-medium text-slate-400 mt-1">
              Schlüsselfertiger Rollout ohne Unterbrechung Ihrer laufenden Betriebsprozesse
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
