import React, { useState } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'impressum' | 'datenschutz';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'impressum',
}) => {
  const [activeTab, setActiveTab] = useState<'impressum' | 'datenschutz'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl text-left overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('impressum')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'impressum'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Impressum
            </button>
            <button
              onClick={() => setActiveTab('datenschutz')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'datenschutz'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Datenschutzerklärung
            </button>
          </div>

          <button
            onClick={onClose}
            aria-label="Schließen"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {activeTab === 'impressum' ? (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
              </h3>
              
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <p className="font-semibold text-white">{SITE_CONFIG.legalName}</p>
                <p>Inhaber: {SITE_CONFIG.founder}</p>
                <p>Standort: {SITE_CONFIG.location}</p>
              </div>

              <h4 className="text-sm font-bold text-white pt-2">Kontakt</h4>
              <p>
                Telefon: {SITE_CONFIG.phoneFormatted}<br />
                WhatsApp Business: {SITE_CONFIG.phoneFormatted}<br />
                E-Mail: {SITE_CONFIG.email}<br />
                Webseite: ki-wissenssysteme.de
              </p>

              <h4 className="text-sm font-bold text-white pt-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
              <p>
                {SITE_CONFIG.founder}<br />
                {SITE_CONFIG.location}
              </p>

              <h4 className="text-sm font-bold text-white pt-2">EU-Streitschlichtung</h4>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">Haftung für Inhalte</h4>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Datenschutzerklärung nach EU-DSGVO
              </h3>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <p className="font-semibold text-white">Verantwortliche Stelle:</p>
                <p>{SITE_CONFIG.legalName}</p>
                <p>E-Mail: {SITE_CONFIG.email}</p>
                <p>Telefon: {SITE_CONFIG.phoneFormatted}</p>
              </div>

              <h4 className="text-sm font-bold text-white pt-2">1. Datenerfassung auf dieser Webseite</h4>
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis (z. B. im Rahmen einer Kontakt- oder Terminanfrage).
              </p>

              <h4 className="text-sm font-bold text-white pt-2">2. Kontaktformular und Kommunikation per E-Mail / WhatsApp</h4>
              <p>
                Wenn Sie uns per Kontaktformular, Telefon oder WhatsApp Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">3. Keine Weitergabe oder Nutzung für KI-Modelltrainings</h4>
              <p>
                Im Rahmen unserer Beratung und der Bereitstellung von KI-Wissenssystemen garantieren wir vertraglich, dass vertrauliche Unternehmensunterlagen niemals für das Training öffentlicher KI-Modelle verwendet werden. Alle Systeme werden nach Art. 28 DSGVO (Auftragsverarbeitungsvertrag) in deutschen bzw. europäischen Rechenzentren oder auf Kundenservern betrieben.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">4. Ihre Rechte als betroffene Person</h4>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wenden Sie sich hierzu formlos an info@ki-wissenssysteme.de.
              </p>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
