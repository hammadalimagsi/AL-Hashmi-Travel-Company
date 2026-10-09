import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm bg-emerald-950 text-white px-4 py-3 rounded-xl shadow-2xl border border-gold-500/50 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
      <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
      <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
    </div>
  );
};
