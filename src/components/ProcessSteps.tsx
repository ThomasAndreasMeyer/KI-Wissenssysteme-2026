import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessStepsProps {
  onOpenContact: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenContact }) => {
  return (
    <section id="loesungen" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Einführung ohne IT-Kopfschmerz
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            In drei klaren Schritten zu Ihrem KI-Wissenssystem
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Keine monatelangen IT-Großprojekte. Wir liefern schlüsselfertige, praxiserprobte Lösungen, die sich nahtlos in Ihre bestehende Systemlandschaft einfügen.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-blue-500/80 tabular-nums">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 flex items-center gap-2 text-xs text-blue-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Ohne Unterbrechung Ihres Betriebs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/40 border border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Haben Sie bereits konkrete Dokumente oder Fragen?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Gerne führen wir Ihnen das System in einem unverbindlichen 20-minütigen Teams- oder Zoom-Gespräch vor.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-blue-600/25"
          >
            <span>Kostenloses Gespräch vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
