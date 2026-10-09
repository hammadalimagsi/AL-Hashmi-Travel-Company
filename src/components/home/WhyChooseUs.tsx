import React from 'react';
import { ShieldCheck, UserCheck, Headset, Banknote, PlaneTakeoff, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Govt & IATA Certified',
      description: 'Official License DTS #3842 and IATA #27-3-9482. Transparent legal compliance and direct Ministry of Hajj & Umrah authorized quota.'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Ground Mutawwifs',
      description: '50+ experienced Urdu/English speaking scholars assisting in Makkah & Madinah with Tawaf, Sa’i, and Rawdah permits.'
    },
    {
      icon: Headset,
      title: '24/7 Pilgrim Support',
      description: 'Continuous assistance for flight re-scheduling, wheelchair facilitation, emergency medical handling, and hotel queries.'
    },
    {
      icon: Banknote,
      title: 'Transparent Pricing',
      description: 'Zero hidden taxes or surprise charges. All visas, hotels, return flights, and insurance are itemized upfront.'
    },
    {
      icon: PlaneTakeoff,
      title: 'Guaranteed Direct Flights',
      description: 'Direct bookings with Saudia, PIA, Emirates, and Qatar Airways, avoiding exhausting delays and lost luggage.'
    },
    {
      icon: Heart,
      title: 'Spiritual Care & Comfort',
      description: 'Personalized arrangements for elders, infants, and families, ensuring peaceful concentration on your prayers.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300">
            The Al-Hashmi Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
            Why Pilgrims Trust Al-Hashmi Travels
          </h2>
          <p className="text-sm text-charcoal-600">
            Honored with 15+ years of excellence in creating unforgettable, spiritually uplifting pilgrimage experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-emerald-800" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base text-charcoal-900">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
