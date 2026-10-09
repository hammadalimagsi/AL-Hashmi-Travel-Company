import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_STATS } from '../../data/reviews';

export const StatsCounter: React.FC = () => {
  const icons = [Users, Award, ShieldCheck, HeartHandshake];

  return (
    <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white py-12 sm:py-16 relative overflow-hidden border-y border-gold-500/30">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Proven Track Record of Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Serving the Guests of Allah with Honor
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-emerald-900/40 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-700/50 hover:border-gold-400/50 transition-all text-center space-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center border border-gold-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold-300 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {stat.label}
                </div>
                <p className="text-[11px] text-emerald-200/70">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
