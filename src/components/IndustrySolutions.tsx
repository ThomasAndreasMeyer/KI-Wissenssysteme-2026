import React, { useState } from 'react';
import { INDUSTRY_CASES } from '../data/content';
import { IndustryKey } from '../types';
import { Building2, HeartPulse, Wrench, Scale, CheckCircle, ArrowRight, Quote } from 'lucide-react';

interface IndustrySolutionsProps {
  onOpenContact: () => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<IndustryKey>('kmu');

  const getIcon = (id: IndustryKey) => {
    switch (id) {
      case 'kmu': return <Building2 className="w-5 h-5" />;
      case 'pflege': return <HeartPulse className="w-5 h-5" />;
      case 'handwerk': return <Wrench className="w-5 h-5" />;
      case 'kanzlei': return <Scale className="w-5 h-5" />;
    }
  };

  const currentCase = INDUSTRY_CASES.find((c) => c.id === activeTab) || INDUSTRY_CASES[0];

  return (
    <section id="branchen" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Branchenspezifische Praxisanwendungen
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Lösungen zugeschnitten auf Ihre täglichen Arbeitsabläufe
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Keine theoretische Spielerei, sondern messbare Arbeitserleichterung für Fachkräfte im Büro, auf Station oder vor Ort auf der Baustelle.
          </p>
        </div>

        {/* Tab Selection Navigation (Touch-friendly & horizontal scrolling on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none border-b border-slate-850">
          {INDUSTRY_CASES.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-850'
                }`}
              >
                {getIcon(item.id)}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 lg:p-10 space-y-8 text-left">
          
          {/* Top Row: Title, Subtitle, & Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                {currentCase.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentCase.subtitle}
              </h3>
            </div>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg active:scale-[0.98] transition-all whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>Branchenberatung anfragen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Middle Grid: Problem vs Solution & Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Problem & Concrete Solution */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-850">
                  <div className="text-xs font-semibold text-rose-400 uppercase tracking-wide mb-1.5">
                    Herausforderung im Alltag
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentCase.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-850">
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-1.5">
                    Die KI-Wissenssystem Lösung
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Ihre konkreten Vorteile
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCase.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Photo & Testimonial Quote */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              
              {/* Photo Showcase */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] bg-slate-950">
                <img
                  src="/src/assets/images/showcase_industry_handwerk_pflege_1794458593870.jpg"
                  alt={`Einsatz von KI Wissenssystemen in ${currentCase.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 font-medium">
                  Mobiles Wissensmanagement im täglichen Praxiseinsatz
                </div>
              </div>

              {/* Attributable Quote */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 space-y-2">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Quote className="w-4 h-4" />
                  <span className="text-xs font-semibold">Praxisstimme</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  „{currentCase.quote.text}“
                </p>
                <div className="pt-1 text-[11px] text-slate-400 border-t border-slate-850 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{currentCase.quote.author}</span>
                  <span>{currentCase.quote.role} · {currentCase.quote.company}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom 3 Concrete Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            {currentCase.metrics.map((metric, mIdx) => (
              <div key={mIdx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-850 text-left">
                <div className="text-xl sm:text-2xl font-bold font-display text-white tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
