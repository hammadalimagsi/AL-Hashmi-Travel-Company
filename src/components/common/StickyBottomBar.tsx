import React from 'react';
import { Phone, MessageCircle, CalendarClock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StickyBottomBar: React.FC = () => {
  const { openQuoteModal } = useApp();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href="tel:+923008456789"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-charcoal-900 border border-slate-200 font-bold text-xs touch-target transition-all active:scale-95"
          aria-label="Call Al-Hashmi Travels directly"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
            <Phone className="w-4 h-4 text-emerald-800" />
          </div>
          <span className="text-[11px] sm:text-xs">Call Now</span>
        </a>

        {/* WhatsApp Us */}
        <a
          href="https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20an%20Umrah%20package%20quotation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-sm touch-target transition-all active:scale-95"
          aria-label="Chat on WhatsApp with Al-Hashmi Consultant"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] sm:text-xs">WhatsApp</span>
        </a>

        {/* Quick Quote */}
        <button
          onClick={() => openQuoteModal()}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-charcoal-950 font-bold text-xs shadow-sm touch-target transition-all active:scale-95"
          aria-label="Request a customized Umrah quotation"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-950 flex items-center justify-center text-gold-400">
            <CalendarClock className="w-4 h-4" />
          </div>
          <span className="text-[11px] sm:text-xs">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
