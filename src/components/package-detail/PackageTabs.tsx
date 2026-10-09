import React, { useState } from 'react';
import { ChevronDown, Check, X, Building, MapPin, Star, Clock } from 'lucide-react';
import { PackageItem } from '../../types';

interface PackageTabsProps {
  packageItem: PackageItem;
}

export const PackageTabs: React.FC<PackageTabsProps> = ({ packageItem }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'includes' | 'hotels'>('overview');
  const [openDays, setOpenDays] = useState<number[]>([1]);

  const toggleDay = (day: number) => {
    setOpenDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const tabs = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'itinerary' as const, label: 'Itinerary' },
    { id: 'includes' as const, label: 'Included / Excluded' },
    { id: 'hotels' as const, label: 'Hotel Details' },
  ];

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto no-scrollbar gap-1 bg-slate-100 p-1.5 rounded-2xl">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] touch-target ${
              activeTab === tab.id
                ? 'bg-emerald-850 text-white shadow-md'
                : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/70'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: Overview & Highlights */}
      {activeTab === 'overview' && (
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <h3 className="font-extrabold text-base text-charcoal-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gold-500 rounded-full" />
              Package Highlights
            </h3>
            <div className="space-y-2.5">
              {packageItem.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-800" />
                  </div>
                  <p className="text-sm text-charcoal-700 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
            <h3 className="font-extrabold text-base text-charcoal-900 mb-1">About This Package</h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">{packageItem.subtitle}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-emerald-200 text-center">
                <Clock className="w-5 h-5 text-emerald-800 mx-auto mb-1" />
                <p className="text-[11px] font-semibold text-charcoal-500 uppercase tracking-wide">Duration</p>
                <p className="text-base font-extrabold text-charcoal-900">{packageItem.durationNights} Nights</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-emerald-200 text-center">
                <Star className="w-5 h-5 text-gold-500 mx-auto mb-1 fill-gold-500" />
                <p className="text-[11px] font-semibold text-charcoal-500 uppercase tracking-wide">Pilgrim Rating</p>
                <p className="text-base font-extrabold text-charcoal-900">{packageItem.rating} / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Day-by-Day Itinerary */}
      {activeTab === 'itinerary' && (
        <div className="space-y-3">
          {packageItem.itinerary.map((day) => {
            const isOpen = openDays.includes(day.day);
            return (
              <div
                key={day.day}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-emerald-300 shadow-sm bg-white' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left touch-target"
                >
                  <div className="flex items-center gap-3">
                    <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border-2 ${
                      isOpen ? 'bg-emerald-850 text-white border-emerald-800' : 'bg-slate-100 text-charcoal-700 border-slate-200'
                    }`}>
                      {day.day}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">{day.location}</p>
                      <h4 className="font-bold text-sm sm:text-base text-charcoal-900 leading-snug">{day.title}</h4>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-charcoal-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 space-y-3">
                    <div className="w-full h-px bg-slate-100" />
                    <p className="text-sm text-charcoal-700 leading-relaxed">{day.description}</p>
                    {day.highlights && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {day.highlights.map((h, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: Included vs Excluded */}
      {activeTab === 'includes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Inclusions */}
          <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-sm">
            <h3 className="font-extrabold text-base text-emerald-800 mb-4 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-800" />
              </div>
              What's Included
            </h3>
            <ul className="space-y-2.5">
              {packageItem.inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
            <h3 className="font-extrabold text-base text-red-700 mb-4 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                <X className="w-4 h-4 text-red-700" />
              </div>
              Not Included
            </h3>
            <ul className="space-y-2.5">
              {packageItem.exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* TAB 4: Hotel Details */}
      {activeTab === 'hotels' && (
        <div className="space-y-5">
          {[packageItem.makkahHotel, packageItem.madinahHotel].map((hotel, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative h-44 w-full">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] font-semibold text-gold-300 uppercase">
                      {hotel.city === 'Makkah' ? '🕋 Makkah Al-Mukarramah' : '🕌 Madinah Al-Munawwarah'}
                    </p>
                    <h4 className="font-extrabold text-base sm:text-lg leading-tight">{hotel.name}</h4>
                  </div>
                  <div className="flex">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <MapPin className="w-5 h-5 text-emerald-800 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-emerald-900">{hotel.distanceToHaram}</p>
                    <p className="text-[11px] text-charcoal-600">{hotel.walkingTime}</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">Key Amenities</h5>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((a, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 text-charcoal-700 text-[11px] font-semibold rounded-lg border border-slate-200">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
