import React, { useState } from 'react';
import { Sparkles, FileText, CheckCircle2, CornerDownLeft, Clock, ArrowRight, Layers, Search, ShieldCheck } from 'lucide-react';
import { DEMO_QUERIES } from '../data/content';
import { IndustryKey, DemoQuery } from '../types';

interface LiveAssistantDemoProps {
  onOpenContact: () => void;
}

export const LiveAssistantDemo: React.FC<LiveAssistantDemoProps> = ({ onOpenContact }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryKey>('kmu');
  const [activeQuery, setActiveQuery] = useState<DemoQuery>(DEMO_QUERIES[0]);
  const [customInput, setCustomInput] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  const industryTabs: { key: IndustryKey; label: string }[] = [
    { key: 'kmu', label: 'KMU & Verwaltung' },
    { key: 'pflege', label: 'Pflege & Gesundheit' },
    { key: 'handwerk', label: 'Handwerk & Außendienst' },
    { key: 'kanzlei', label: 'Kanzleien & Beratung' },
  ];

  const handleSelectIndustry = (ind: IndustryKey) => {
    setSelectedIndustry(ind);
    const found = DEMO_QUERIES.find((q) => q.industry === ind) || DEMO_QUERIES[0];
    triggerSimulation(found);
  };

  const triggerSimulation = (query: DemoQuery) => {
    setIsSimulating(true);
    setTimeout(() => {
      setActiveQuery(query);
      setIsSimulating(false);
    }, 280);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsSimulating(true);
    setTimeout(() => {
      setActiveQuery({
        id: 'custom-' + Date.now(),
        industry: selectedIndustry,
        question: customInput,
        answer: `Basierend auf den indizierten Unternehmensunterlagen (${selectedIndustry === 'pflege' ? 'Pflegestandards & Hygieneleitfaden' : selectedIndustry === 'handwerk' ? 'Herstellerhandbücher & Wartungsleitfäden' : selectedIndustry === 'kanzlei' ? 'Mandatsakten & Musterverträge' : 'Betriebsvereinbarungen & QM-Handbuch'}): Die Regelung besagt eindeutig, dass der Vorgang nach Prüfung der Freigabevoraussetzungen dokumentiert und gemäß Standardprozess ausgeführt werden muss. Für spezifische Sonderfälle ist die Freigabe des zuständigen Bereichsleiters erforderlich.`,
        sources: [
          {
            title: selectedIndustry === 'pflege' ? 'Einrichtungsstandard_SOP_Gesamt_2026.pdf' : selectedIndustry === 'handwerk' ? 'Technischer_Wartungsleitfaden_v4.pdf' : selectedIndustry === 'kanzlei' ? 'Kanzleihandbuch_Mandatsfuehrung.docx' : 'Organisationshandbuch_2026.pdf',
            type: 'Internes Verzeichnis / SharePoint',
            page: 'Seite 14, Punkt 2.3',
            snippet: '„Verbindliche Arbeitsanweisung: Jeder Bearbeitungsschritt muss im zentralen System nachvollziehbar mit Zeitstempel und Bearbeiter hinterlegt werden.“',
          },
        ],
        latencyMs: 154,
      });
      setIsSimulating(false);
    }, 400);
  };

  return (
    <section id="demo" className="py-16 lg:py-24 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interaktiver Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            So funktioniert Ihr eigener KI-Wissensassistent
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Testen Sie hier beispielhaft, wie ein Mitarbeiter eine fachspezifische Frage stellt. Der Assistent durchsucht die internen Dokumente semantisch und liefert sofort die Antwort mit exakter Fundstelle.
          </p>
        </div>

        {/* Interactive Sandbox Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
          
          {/* Top Bar of Sandbox: Industry Filter Tabs */}
          <div className="border-b border-slate-800/80 bg-slate-900/70 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {industryTabs.map((tab) => {
                const isActive = selectedIndustry === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleSelectIndustry(tab.key)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Geschützte Test-Sandbox</span>
            </div>
          </div>

          {/* Sandbox Body: Split Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            
            {/* Left Column: Preset Questions & Search Bar */}
            <div className="lg:col-span-5 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-5 bg-slate-950/60">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2.5">
                  Typische Mitarbeiterfragen ({industryTabs.find(t => t.key === selectedIndustry)?.label})
                </label>
                <div className="space-y-2">
                  {DEMO_QUERIES.filter(q => q.industry === selectedIndustry).map((q) => {
                    const isSelected = activeQuery.id === q.id;
                    return (
                      <button
                        key={q.id}
                        onClick={() => triggerSimulation(q)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-950/40 border-blue-500/50 text-white shadow-sm'
                            : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <Search className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                          <span className="font-medium leading-snug">{q.question}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Query Input */}
              <div className="pt-2">
                <label htmlFor="custom-query" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Eigene Frage testen
                </label>
                <form onSubmit={handleCustomSubmit} className="relative">
                  <input
                    id="custom-query"
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="z.B. Welche Fristen gelten für Mängelrügen?"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-3.5 pr-11 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Frage absenden"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors cursor-pointer"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Hint */}
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-850 text-xs text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">Wie das im echten Einsatz funktioniert:</span>
                <p>
                  Ihre Dokumente bleiben in Ihrem Netzwerk. Ein semantischer Vektorindex sucht nach Bedeutung, nicht nur nach reinen Schlagworten.
                </p>
              </div>
            </div>

            {/* Right Column: AI Assistant Answer & Source Evidence */}
            <div className="lg:col-span-7 p-4 sm:p-6 space-y-6 flex flex-col justify-between bg-slate-950">
              
              <div className="space-y-5">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-850">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-300">Intelligente Antwort generiert</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 tabular-nums">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeQuery.latencyMs} ms Such- & Synthesedauer</span>
                  </div>
                </div>

                {/* Active Question Re-Display */}
                <div className="text-sm font-semibold text-white bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 font-normal block text-xs mb-1">Gestellte Frage:</span>
                  „{activeQuery.question}“
                </div>

                {/* Simulated AI Answer Box */}
                {isSimulating ? (
                  <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 animate-pulse">
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded w-full"></div>
                    <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Synthese aus Ihren internen Dokumenten</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                      {activeQuery.answer}
                    </div>
                  </div>
                )}

                {/* Verified Sources & Citations */}
                <div className="space-y-2.5 text-left">
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>Verifizierte Quellennachweise (Auditierbar)</span>
                  </div>

                  <div className="space-y-2">
                    {activeQuery.sources.map((source, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/90 text-xs space-y-1.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 text-slate-300">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            {source.title}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{source.page}</span>
                        </div>
                        <div className="text-slate-400 italic bg-slate-950/60 p-2 rounded-lg border border-slate-850">
                          {source.snippet}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                {/* Bottom Conversion Prompt */}
              <div className="pt-4 border-t border-slate-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Möchten Sie diesen Assistenten mit Ihren eigenen PDFs und Word-Dateien testen?
                </span>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Test mit eigenen Daten anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
