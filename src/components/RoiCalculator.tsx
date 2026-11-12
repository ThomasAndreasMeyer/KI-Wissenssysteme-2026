import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, Euro, CheckCircle2, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [employees, setEmployees] = useState<number>(20);
  const [searchTimeMin, setSearchTimeMin] = useState<number>(35);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // Business calculations
  // Working days per year ~ 220, per month ~ 18.3
  const workingDaysPerMonth = 18.3;
  const workingDaysPerYear = 220;
  
  // Conservative efficiency gain of 70% reduction in document search time
  const efficiencyRate = 0.70;

  const currentSearchHoursPerDayPerEmployee = searchTimeMin / 60;
  const currentTotalHoursYear = employees * currentSearchHoursPerDayPerEmployee * workingDaysPerYear;
  
  const savedHoursYear = Math.round(currentTotalHoursYear * efficiencyRate);
  const savedHoursMonth = Math.round((currentTotalHoursYear * efficiencyRate) / 12);
  
  const savedCostYear = Math.round(savedHoursYear * hourlyRate);
  const savedCostMonth = Math.round(savedCostYear / 12);

  return (
    <section id="rechner" className="py-16 lg:py-24 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Wirtschaftlichkeitsrechner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Berechnen Sie Ihr jährliches Einsparpotenzial
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In deutschen Unternehmen verbringen Mitarbeiter durchschnittlich 30 bis 60 Minuten täglich mit dem Suchen nach Dokumenten, Richtlinien und Vorlagen. Berechnen Sie hier Ihren Hebel.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 text-left shadow-xl">
            <div className="text-sm font-semibold text-white uppercase tracking-wider pb-2 border-b border-slate-850">
              Ihre Unternehmensdaten
            </div>

            {/* Slider 1: Employees */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Betroffene Mitarbeiter</span>
                <span className="font-mono text-base font-bold text-blue-400 tabular-nums bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800/50">
                  {employees} Mitarbeiter
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="150"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                aria-label="Anzahl betroffener Mitarbeiter"
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>3 Pers.</span>
                <span>50 Pers.</span>
                <span>150 Pers.</span>
              </div>
            </div>

            {/* Slider 2: Search Time */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Bisherige Suchzeit pro Tag & Person</span>
                <span className="font-mono text-base font-bold text-blue-400 tabular-nums bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800/50">
                  {searchTimeMin} Minuten
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={searchTimeMin}
                onChange={(e) => setSearchTimeMin(Number(e.target.value))}
                aria-label="Bisherige Suchzeit in Minuten"
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>10 Min (gering)</span>
                <span>35 Min (Mittelwert)</span>
                <span>90 Min (hoch)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Durchschnittlicher interner Stundensatz</span>
                <span className="font-mono text-base font-bold text-blue-400 tabular-nums bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800/50">
                  {hourlyRate} € / Stunde
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="120"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                aria-label="Durchschnittlicher interner Stundensatz"
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>25 €</span>
                <span>60 €</span>
                <span>120 €</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Berechnung basiert auf 220 Arbeitstagen & 70% Suchzeitreduktion</span>
            </div>

          </div>

          {/* Right Column: Calculated Results Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-800/40 space-y-6 text-left flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Mögliche Jahreswirkung
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/60">
                  Amortisation in ca. 4–8 Wochen
                </span>
              </div>

              {/* Main Euro Big Metric */}
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">
                  Geschätzte jährliche Kosteneinsparung:
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tabular-nums tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
                  {savedCostYear.toLocaleString('de-DE')} €
                </div>
                <div className="text-xs text-slate-400">
                  entspricht ca. <span className="text-slate-200 font-semibold font-mono tabular-nums">{savedCostMonth.toLocaleString('de-DE')} €</span> pro Monat
                </div>
              </div>

              {/* Time Savings Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Eingesparte Arbeitszeit</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-white tabular-nums">
                    {savedHoursYear.toLocaleString('de-DE')} Std.
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    ca. {savedHoursMonth} Std. / Monat
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Euro className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hebel pro Mitarbeiter</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-white tabular-nums">
                    {Math.round(savedCostYear / employees).toLocaleString('de-DE')} €
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Wertschöpfung / Person / Jahr
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Diese Zeit fließt direkt in wertschöpfende Tätigkeiten: Kundenbetreuung, Fehlervermeidung und schnellere Auftragsabwicklung statt zäher Dateisuche.
              </p>
            </div>

            {/* Bottom Conversion Button */}
            <div className="pt-4 border-t border-slate-800 relative">
              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap cursor-pointer"
              >
                <span>Individuelle Potenzialanalyse anfordern</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
