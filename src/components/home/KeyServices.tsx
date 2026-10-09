import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  FileText, 
  Plane, 
  Car, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Award,
  Sparkles
} from 'lucide-react';

export const KeyServices: React.FC = () => {
  const services = [
    {
      title: 'Umrah & Hajj Packages',
      subtitle: 'Complete Pilgrimage Management',
      description: 'Handcrafted 5-Star VIP, 4-Star Premium, and 3-Star economy group & customized packages with confirmed 5-star clock tower stays.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
      badge: 'Core Specialty',
      link: '/packages',
      linkText: 'Explore Umrah Packages',
      features: ['Haram Facing Rooms', 'Rawdah Permits', 'Experienced Mutawwifs']
    },
    {
      title: 'E-Visa Processing',
      subtitle: 'Fast-Track Official Clearances',
      description: 'Direct MOFA verified Saudi tourist & Umrah eVisas issued within 24-48 hours, alongside UAE, Turkey, Malaysia, and Schengen assistance.',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
      badge: '99.8% Approval',
      link: '/visa',
      linkText: 'Apply For Visa',
      features: ['24h Express Processing', 'Medical Insurance Included', 'Document Verification']
    },
    {
      title: 'Flight Reservations',
      subtitle: 'Group Fares & Scheduled Airlines',
      description: 'Exclusive confirmed group blocks and instant ticketing on PIA, Saudia, Emirates, Qatar Airways, and Airblue with flexible cancellation.',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
      badge: 'IATA Accredited',
      link: '/flights',
      linkText: 'Search Flight Fares',
      features: ['Direct Flights to Jeddah/Madinah', 'Complimentary 5L Zamzam', 'Generous Baggage']
    },
    {
      title: 'VIP Ground Transportation',
      subtitle: 'Luxury Transfers & Bullet Train',
      description: 'Private GMC Yukon, Mercedes Vito, and Haramain High-Speed Train first-class reservations connecting Jeddah, Makkah, and Madinah.',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80',
      badge: 'Chauffeur Driven',
      link: '/contact',
      linkText: 'Inquire Transport',
      features: ['Private GMC Yukon & Coasters', 'High-Speed Bullet Train', 'Airport Meet & Greet']
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full border border-gold-300">
            Comprehensive Travel Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Our Premier Services
          </h2>
          <p className="text-sm text-charcoal-600">
            From official visa clearances to luxury clock tower hotel suites and comfortable transfers, Al-Hashmi Travels manages every sacred detail.
          </p>
        </div>

        {/* 4-Column Grid on Desktop, Single/Double on Mobile/Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image with overlay */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-gold-500 text-charcoal-950 shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-emerald-800/80 backdrop-blur-md flex items-center justify-center text-gold-400 border border-emerald-600/50">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold">{item.subtitle}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-lg text-charcoal-900 group-hover:text-emerald-850 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] font-medium text-charcoal-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="p-5 pt-0">
                  <Link
                    to={item.link}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-emerald-850 text-charcoal-800 group-hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all touch-target"
                  >
                    <span>{item.linkText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
