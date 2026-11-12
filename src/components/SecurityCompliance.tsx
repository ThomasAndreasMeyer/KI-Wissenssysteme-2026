import React from 'react';
import { ShieldCheck, Lock, KeyRound, FileCheck, Server, Check } from 'lucide-react';
import { SECURITY_PILLARS } from '../data/content';

export const SecurityCompliance: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-emerald-400" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5 text-indigo-400" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-sky-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="sicherheit" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            DSGVO-First & Datenschutz
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Kompromisslose Sicherheit für Ihr Firmenwissen
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Als deutscher Dienstleister aus Bayern kennen wir die strengen Anforderungen an Betriebsgeheimnisse, Berufsgeheimnisse (§ 203 StGB) und die europäische Datenschutz-Grundverordnung.
          </p>
        </div>

        {/* Top Split: 4 Pillars & High-Res Infrastructure Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {SECURITY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-base font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Visual Showcase of Infrastructure */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-[16/11]">
              <img
                src="/src/assets/images/showcase_enterprise_rag_1794458595122.jpg"
                alt="Sichere Serverinfrastruktur in deutschen Rechenzentren für KI Wissenssysteme"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <span>Dedizierte Enterprise-Instanzen</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Verschlüsselt nach AES-256 (Ruhezustand) & TLS 1.3 (Übertragung). Auftragsverarbeitungsvertrag (AVV) inklusive.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Security Comparison Strip */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Der Unterschied im Vergleich zu US-Standard-KI (z.B. öffentliche Chat-Tools)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 space-y-1.5">
              <span className="font-semibold text-white block">Datenhoheit & Standort</span>
              <p className="text-slate-400">
                Daten verlassen den deutschen / europäischen Rechtsraum nicht. Keine Datenübermittlung nach US-Cloud-Act.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 space-y-1.5">
              <span className="font-semibold text-white block">Fakten & Nachprüfbarkeit</span>
              <p className="text-slate-400">
                Antworten basieren ausschließlich auf Ihren hinterlegten Dateien. Jede Aussage ist mit Dateiname und Seitenzahl belegt.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 space-y-1.5">
              <span className="font-semibold text-white block">IT-Integration & Berechtigungen</span>
              <p className="text-slate-400">
                Nahtlose Einbindung in SharePoint, Windows Server oder Intranet mit Übernahme bestehender Zugriffsrechte.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
