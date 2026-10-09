import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  FileText, 
  Plane, 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  ShieldCheck, 
  ChevronRight,
  CheckCircle2,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { openQuoteModal } = useApp();

  const [activeTab, setActiveTab] = useState<'umrah' | 'visa' | 'flights'>('umrah');
  
  // Hero slider images
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1920&q=85',
      title: 'Sacred Journeys with Unmatched Dignity',
      subtitle: 'Official DTS Licensed Umrah & Hajj Packages with 5-Star Clock Tower Stays & Direct Haram Access',
      badge: 'Certified Umrah Operator'
    },
    {
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=85',
      title: 'Walk Steps from Masjid An-Nabawi',
      subtitle: 'Exclusive Markazia Hotels in Madinah Al-Munawwarah with Guaranteed Rawdah Riyad-ul-Jannah Permits',
      badge: '50+ Dedicated Mutawwifs'
    },
    {
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85',
      title: 'Seamless Global Travel & Fast e-Visas',
      subtitle: '24-Hour Saudi Tourist eVisa, Dubai, Turkey Visas & Confirmed Airline Bookings on Prime Carriers',
      badge: '99.8% Visa Approval'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Tabbed Search State
  const [umrahCategory, setUmrahCategory] = useState('All');
  const [umrahCity, setUmrahCity] = useState('Lahore (LHE)');
  
  const [visaCountry, setVisaCountry] = useState('Saudi Arabia');
  
  const [flightOrigin, setFlightOrigin] = useState('LHE');
  const [flightDest, setFlightDest] = useState('JED');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'umrah') {
      navigate(`/packages?category=${encodeURIComponent(umrahCategory)}&city=${encodeURIComponent(umrahCity)}`);
    } else if (activeTab === 'visa') {
      navigate('/visa');
    } else {
      navigate(`/flights?from=${flightOrigin}&to=${flightDest}`);
    }
  };

  return (
    <div className="relative w-full">
      {/* 1. HERO BANNER BACKGROUND SLIDER */}
      <div className="relative h-[480px] sm:h-[560px] md:h-[620px] w-full overflow-hidden bg-emerald-950">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-7000`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-75 contrast-105"
            />
            {/* Multi-layered luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-transparent" />
          </div>
        ))}

        {/* Hero Slider Text & Hero Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-24 sm:pb-32">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 backdrop-blur-md text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              {slides[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 font-medium leading-relaxed drop-shadow">
              {slides[currentSlide].subtitle}
            </p>

            {/* Quick Hero Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-emerald-200">
              <span className="flex items-center gap-1.5 bg-emerald-900/60 px-2.5 py-1 rounded-lg backdrop-blur border border-emerald-700/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                Direct Haram View
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-900/60 px-2.5 py-1 rounded-lg backdrop-blur border border-emerald-700/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                Rawdah Permit Included
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-900/60 px-2.5 py-1 rounded-lg backdrop-blur border border-emerald-700/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                VIP GMC Yukon Transfers
              </span>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-28 sm:bottom-36 left-4 sm:left-8 flex items-center gap-2">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`h-2 rounded-full transition-all touch-manipulation ${
                  dotIdx === currentSlide ? 'w-8 bg-gold-400' : 'w-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. MOBILE-OPTIMIZED TABBED SEARCH BAR (Anchored directly under hero banner) */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 -mt-20 sm:-mt-24 relative z-30">
        <div className="bg-white rounded-2xl shadow-luxury border border-slate-200/80 overflow-hidden">
          {/* Navigation Tabs [Umrah] | [Visa] | [Flights] */}
          <div className="grid grid-cols-3 bg-slate-100/90 border-b border-slate-200 p-1.5 sm:p-2 gap-1">
            <button
              onClick={() => setActiveTab('umrah')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[48px] touch-target ${
                activeTab === 'umrah'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'text-charcoal-700 hover:text-emerald-900 hover:bg-slate-200/60'
              }`}
            >
              <Compass className={`w-4 h-4 ${activeTab === 'umrah' ? 'text-gold-300' : 'text-emerald-850'}`} />
              <span>Umrah Packages</span>
            </button>

            <button
              onClick={() => setActiveTab('visa')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[48px] touch-target ${
                activeTab === 'visa'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'text-charcoal-700 hover:text-emerald-900 hover:bg-slate-200/60'
              }`}
            >
              <FileText className={`w-4 h-4 ${activeTab === 'visa' ? 'text-gold-300' : 'text-emerald-850'}`} />
              <span>Visa Services</span>
            </button>

            <button
              onClick={() => setActiveTab('flights')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[48px] touch-target ${
                activeTab === 'flights'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'text-charcoal-700 hover:text-emerald-900 hover:bg-slate-200/60'
              }`}
            >
              <Plane className={`w-4 h-4 ${activeTab === 'flights' ? 'text-gold-300' : 'text-emerald-850'}`} />
              <span>Flights</span>
            </button>
          </div>

          {/* Tabbed Form Fields */}
          <form onSubmit={handleSearchSubmit} className="p-4 sm:p-6">
            {activeTab === 'umrah' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
                {/* Package Category */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
                    Package Category
                  </label>
                  <div className="relative">
                    <Star className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                    <select
                      value={umrahCategory}
                      onChange={(e) => setUmrahCategory(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-charcoal-900 min-h-[48px]"
                    >
                      <option value="All">All Categories</option>
                      <option value="5-Star Luxury">5-Star Luxury VIP</option>
                      <option value="4-Star Premium">4-Star Executive</option>
                      <option value="3-Star Economy">3-Star Economy Comfort</option>
                      <option value="Custom VIP">Custom VIP Family</option>
                      <option value="Ramadan Special">Ramadan Special</option>
                    </select>
                  </div>
                </div>

                {/* Departure City */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
                    Departure City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                    <select
                      value={umrahCity}
                      onChange={(e) => setUmrahCity(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-charcoal-900 min-h-[48px]"
                    >
                      <option value="Lahore (LHE)">Lahore (LHE)</option>
                      <option value="Karachi (KHI)">Karachi (KHI)</option>
                      <option value="Islamabad (ISB)">Islamabad (ISB)</option>
                      <option value="Peshawar (PEW)">Peshawar (PEW)</option>
                      <option value="Multan (MUX)">Multan (MUX)</option>
                      <option value="Sialkot (SKT)">Sialkot (SKT)</option>
                    </select>
                  </div>
                </div>

                {/* Tentative Duration */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
                    Duration
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                    <select
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-charcoal-900 min-h-[48px]"
                    >
                      <option value="any">Flexible Duration</option>
                      <option value="10">10 Nights (Quick)</option>
                      <option value="12">12 Nights (Ramadan)</option>
                      <option value="14">14 - 15 Nights (Full)</option>
                      <option value="21">21+ Nights (Extended)</option>
                    </select>
                  </div>
                </div>

                {/* Search Action */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3 px-5 rounded-xl font-extrabold text-charcoal-950 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 shadow-md flex items-center justify-center gap-2 text-sm transition-all active:scale-95 touch-target"
                  >
                    <Search className="w-4 h-4 text-emerald-950" />
                    <span>Search Packages</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'visa' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-center">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
                    Select Visa Destination
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                    <select
                      value={visaCountry}
                      onChange={(e) => setVisaCountry(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-charcoal-900 min-h-[48px]"
                    >
                      <option value="Saudi Arabia">🇸🇦 Saudi Arabia (Umrah & 1-Year Tourist eVisa)</option>
                      <option value="United Arab Emirates">🇦🇪 Dubai / UAE (30 & 60 Days Visit Visa)</option>
                      <option value="Turkey">🇹🇷 Turkey (eVisa & Sticker Visa Support)</option>
                      <option value="Malaysia">🇲🇾 Malaysia (30 Days e-Visa)</option>
                      <option value="Azerbaijan">🇦🇿 Azerbaijan Baku (ASAN eVisa)</option>
                      <option value="Oman">🇴🇲 Sultanate of Oman (Tourist eVisa)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3 px-5 rounded-xl font-extrabold text-charcoal-950 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 shadow-md flex items-center justify-center gap-2 text-sm transition-all active:scale-95 touch-target"
                  >
                    <FileText className="w-4 h-4 text-emerald-950" />
                    <span>Check Requirements</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'flights' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-center">
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
                    Flying From
                  </label>
                  <div className="relative">
                    <Plane className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                    <select
                      value={flightOrigin}
                      onChange={(e) => setFlightOrigin(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-charcoal-900 min-h-[48px]"
                    >
                      <option value="LHE">Lahore (LHE)</option>
                      <option value="KHI">Karachi (KHI)</option>
                      <option value="ISB">Islamabad (ISB)</option>
                      <option value="PEW">Peshawar (PEW)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
                    Flying To
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                    <select
                      value={flightDest}
                      onChange={(e) => setFlightDest(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-charcoal-900 min-h-[48px]"
                    >
                      <option value="JED">Jeddah (JED - King Abdulaziz)</option>
                      <option value="MED">Madinah (MED - Prince Mohammad)</option>
                      <option value="DXB">Dubai (DXB)</option>
                      <option value="RUH">Riyadh (RUH)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3 px-5 rounded-xl font-extrabold text-charcoal-950 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 shadow-md flex items-center justify-center gap-2 text-sm transition-all active:scale-95 touch-target"
                  >
                    <Search className="w-4 h-4 text-emerald-950" />
                    <span>Find Flights</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
