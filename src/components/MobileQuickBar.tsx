import React from 'react';
import { MessageCircle, Phone, PlayCircle, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface MobileQuickBarProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenContact,
  onOpenDemo,
}) => {
  return (
    <aside 
      aria-label="Schnellzugriff für Mobilgeräte"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 px-3 shadow-2xl shadow-black/80"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {/* Tab 1: WhatsApp */}
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center min-h-[50px] min-w-[44px] rounded-xl text-slate-300 hover:text-emerald-400 active:bg-slate-900 transition-colors py-1"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-[11px] font-medium tracking-tight mt-1">WhatsApp</span>
        </a>

        {/* Tab 2: Call */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex flex-col items-center justify-center min-h-[50px] min-w-[44px] rounded-xl text-slate-300 hover:text-blue-400 active:bg-slate-900 transition-colors py-1"
        >
          <Phone className="w-5 h-5 text-blue-400" />
          <span className="text-[11px] font-medium tracking-tight mt-1">Anrufen</span>
        </a>

        {/* Tab 3: Live Demo */}
        <button
          onClick={onOpenDemo}
          className="flex flex-col items-center justify-center min-h-[50px] min-w-[44px] rounded-xl text-slate-300 hover:text-indigo-400 active:bg-slate-900 transition-colors py-1 cursor-pointer"
        >
          <PlayCircle className="w-5 h-5 text-indigo-400" />
          <span className="text-[11px] font-medium tracking-tight mt-1">Live-Demo</span>
        </button>

        {/* Tab 4: Termin anfragen (Primary) */}
        <button
          onClick={onOpenContact}
          className="flex flex-col items-center justify-center min-h-[50px] min-w-[44px] rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 active:bg-blue-600/30 transition-colors py-1 cursor-pointer"
        >
          <Calendar className="w-5 h-5 text-blue-400" />
          <span className="text-[11px] font-semibold tracking-tight mt-1">Termin</span>
        </button>
      </div>
    </aside>
  );
};
