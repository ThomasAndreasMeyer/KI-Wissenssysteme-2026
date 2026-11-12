import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/content';
import { MessageCircle, Phone, Mail, Send, CheckCircle2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'KMU / Fertigung',
    employees: '10–49',
    message: '',
    preferredChannel: 'whatsapp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Bitte füllen Sie mindestens Name und E-Mail-Adresse aus.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift server response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <section id="kontakt" className="py-16 lg:py-24 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context, Trust & Direct Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Erstberatung & Potenzialanalyse
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Lassen Sie uns über Ihr Firmenwissen sprechen
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In einem unverbindlichen 20-minütigen Gespräch analysieren wir gemeinsam, welche Datenquellen in Ihrem Betrieb vorhanden sind und wie viel Zeit ein KI-Wissenssystem in Ihrer Praxis einsparen kann.
            </p>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Schneller Direktkontakt:
              </span>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 text-emerald-300 text-xs sm:text-sm font-semibold transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-white font-medium">WhatsApp Sofort-Nachricht</div>
                  <div className="text-[11px] text-emerald-400/90">{SITE_CONFIG.phoneFormatted} (Thomas Meyer)</div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-white font-medium">Telefonischer Rückruf</div>
                  <div className="text-[11px] text-slate-400">{SITE_CONFIG.phoneFormatted}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-white font-medium">E-Mail Anfrage</div>
                  <div className="text-[11px] text-slate-400">{SITE_CONFIG.email}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ihre Angaben werden vertraulich gemäß DSGVO behandelt.</span>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl text-left">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Vielen Dank für Ihre Anfrage, {formData.name}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Herr Thomas Meyer wird sich innerhalb von maximal 24 Stunden persönlich bei Ihnen melden, um einen passenden Termin für Ihre Potenzialanalyse zu vereinbaren.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          industry: 'KMU / Fertigung',
                          employees: '10–49',
                          message: '',
                          preferredChannel: 'whatsapp',
                        });
                      }}
                      className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer"
                    >
                      Weitere Anfrage senden
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                    <span className="text-sm font-bold text-white">Termin- & Informationsanfrage</span>
                    <span className="text-[11px] font-mono text-slate-400">Kostenlos & unverbindlich</span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Vor- & Nachname *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="z.B. Stefan Meier"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Geschäftliche E-Mail *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.meier@unternehmen.de"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-company" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Unternehmen / Organisation
                      </label>
                      <input
                        id="form-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Meier Präzision GmbH"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Telefon / Mobilnummer
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0171 1234567"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-industry" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Branche
                      </label>
                      <select
                        id="form-industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="KMU / Fertigung">KMU, Industrie & Fertigung</option>
                        <option value="Pflege & Gesundheit">Pflege, Klinik & Gesundheit</option>
                        <option value="Handwerk & Kundendienst">Handwerk & Technischer Außendienst</option>
                        <option value="Kanzlei & Beratung">Kanzlei, Steuern & Beratung</option>
                        <option value="Verwaltung & Sonstige">Öffentlicher Sektor / Sonstige</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="form-employees" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Unternehmensgröße
                      </label>
                      <select
                        id="form-employees"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="1–9">1 bis 9 Mitarbeiter</option>
                        <option value="10–49">10 bis 49 Mitarbeiter</option>
                        <option value="50–249">50 bis 249 Mitarbeiter</option>
                        <option value="250+">250+ Mitarbeiter</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred contact channel */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Bevorzugte Rückmeldung über:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredChannel: 'whatsapp' })}
                        className={`min-h-[44px] px-3 py-2 text-xs font-medium rounded-xl border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          formData.preferredChannel === 'whatsapp'
                            ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredChannel: 'call' })}
                        className={`min-h-[44px] px-3 py-2 text-xs font-medium rounded-xl border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          formData.preferredChannel === 'call'
                            ? 'bg-blue-950/60 border-blue-500/70 text-blue-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-400" />
                        <span>Telefon</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredChannel: 'email' })}
                        className={`min-h-[44px] px-3 py-2 text-xs font-medium rounded-xl border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          formData.preferredChannel === 'email'
                            ? 'bg-slate-850 border-slate-600 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>E-Mail</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Ihre Ausgangslage oder Fragen (optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="z.B. Wir haben ca. 2.000 PDFs im SharePoint und möchten die Suchzeit für unsere Projektleiter senken..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-[0.98] disabled:opacity-50 transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Wird gesendet...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Kostenlose Potenzialanalyse anfragen</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-500 text-center">
                    Antwort garantiert innerhalb von 24 Stunden durch Thomas Meyer.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
