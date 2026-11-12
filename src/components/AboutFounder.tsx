import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { MessageCircle, Phone, Mail, MapPin, CheckCircle, Shield } from 'lucide-react';

interface AboutFounderProps {
  onOpenContact: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenContact }) => {
  return (
    <section id="ueber-uns" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Founder Persona & Trust Profile */}
          <div className="lg:col-span-5 text-left">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg shadow-blue-600/30">
                  TM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {SITE_CONFIG.founder}
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">
                    Gründer & KI-Lösungsarchitekt
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{SITE_CONFIG.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                „Künstliche Intelligenz darf im deutschen Mittelstand keine Blackbox sein. Mein Anspruch ist es, Unternehmen praxisnahe Werkzeuge an die Hand zu geben, die sofort Zeit sparen, verlässliche Antworten liefern und den strengen deutschen Datenschutz zu 100% einhalten.“
              </p>

              {/* Direct Contact Buttons */}
              <div className="pt-2 border-t border-slate-850 space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Direkter Kontakt ohne Vermittlungsbüro:
                </span>
                
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 text-emerald-300 text-xs font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    WhatsApp Direktchat
                  </span>
                  <span>{SITE_CONFIG.phoneFormatted}</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    Telefon
                  </span>
                  <span>{SITE_CONFIG.phoneFormatted}</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    E-Mail
                  </span>
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Values & Regional Focus */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Persönlich · Nahbar · Kompetent
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ihr verlässlicher Technologiepartner für sichere Unternehmens-KI
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Bei KI Wissenssysteme sprechen Sie direkt mit dem Umsetzer. Keine anonymen Agenturstrukturen, keine wechselnden Ansprechpartner. Wir begleiten Sie von der ersten Idee über die datenschutzkonforme Einrichtung bis hin zum laufenden Betrieb und Praxistraining Ihres Teams.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sitz in Solnhofen (Altmühltal / Bayern)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Regional verankert, deutschlandweit im Einsatz für Mittelstand, Handwerksbetriebe und Einrichtungen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pragmatische Lösungen statt Buzzwords</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Wir konzentrieren uns auf das, was im Geschäftsalltag tatsächlich Zeit und Geld spart: Schnelle Auffindbarkeit, Fehlervermeidung und Entlastung Ihrer Fachkräfte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transparente, faire Projektmodelle</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Klare Festpreise oder transparente monatliche Betreuung ohne versteckte Kosten oder Vendor-Lock-in.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-blue-600/30"
              >
                <span>Direktes Erstgespräch mit Thomas Meyer anfragen</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
