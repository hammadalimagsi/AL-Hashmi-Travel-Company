import React, { useState } from 'react';
import {
  Search, Plane, ArrowLeftRight, Users, ArrowRight,
  CheckCircle2, MessageCircle, Phone, Luggage, Utensils, Clock, RefreshCw, Info
} from 'lucide-react';
import { FLIGHTS_DATA, AIRPORT_CITIES } from '../data/flights';
import { useApp } from '../context/AppContext';

export const FlightsPage: React.FC = () => {
  const { formatPrice, showToast } = useApp();
  const [tripType, setTripType] = useState<'round' | 'oneway'>('round');
  const [origin, setOrigin] = useState('LHE');
  const [destination, setDestination] = useState('JED');
  const [cabin, setCabin] = useState('Economy');
  const [adults, setAdults] = useState(2);
  const [searched, setSearched] = useState(false);

  const handleSwapCities = () => {
    const tmp = origin;
    setOrigin(destination);
    setDestination(tmp);
  };

  const filteredFlights = FLIGHTS_DATA.filter(f => {
    const matchOrigin = !origin || f.origin.code === origin;
    const matchDest = !destination || f.destination.code === destination;
    return matchOrigin || matchDest;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const displayedFlights = searched ? filteredFlights : FLIGHTS_DATA;

  return (
    <main className="min-h-screen bg-slate-50 pb-28 lg:pb-10">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="text-xs text-gold-400 font-bold uppercase tracking-widest">
            Al-Hashmi Travels › Flights
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Umrah & International Flight Reservations
          </h1>
          <p className="text-sm text-emerald-200 max-w-xl">
            Confirmed group blocks and instant ticketing on Saudia, PIA, Emirates, Qatar Airways and Airblue — with 5L Zamzam allowance included.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Flight Search Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-5 flex flex-wrap items-center gap-3">
            {/* Trip Type Toggle */}
            <div className="flex rounded-xl overflow-hidden border border-slate-300">
              {(['round', 'oneway'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`px-4 py-2 text-xs font-bold transition-all min-h-[40px] ${
                    tripType === type ? 'bg-emerald-850 text-white' : 'text-charcoal-700 hover:bg-slate-100'
                  }`}
                >
                  {type === 'round' ? '↔ Round-Trip' : '→ One-Way'}
                </button>
              ))}
            </div>

            {/* Cabin Class */}
            <select
              value={cabin}
              onChange={e => setCabin(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white text-charcoal-900 min-h-[40px]"
            >
              <option value="Economy">Economy Class</option>
              <option value="Business">Business Class</option>
              <option value="First">First Class</option>
            </select>

            {/* Passengers */}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-charcoal-500" />
              <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center font-bold text-charcoal-700 text-sm">−</button>
              <span className="text-sm font-bold text-charcoal-900 min-w-[1.5rem] text-center">{adults}</span>
              <button onClick={() => setAdults(Math.min(12, adults + 1))} className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center font-bold text-charcoal-700 text-sm">+</button>
              <span className="text-xs text-charcoal-500">Passengers</span>
            </div>
          </div>

          <form onSubmit={handleSearch} className="p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_48px_1fr_1fr_auto] gap-3 items-end">
              {/* Origin */}
              <div>
                <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1.5">
                  Flying From
                </label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-emerald-800 absolute left-3 top-3.5" />
                  <select
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-charcoal-900 min-h-[48px]"
                  >
                    {AIRPORT_CITIES.map(a => <option key={a.code} value={a.code}>{a.city}</option>)}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <button
                type="button"
                onClick={handleSwapCities}
                className="hidden lg:flex w-12 h-12 rounded-xl border border-slate-300 bg-white hover:bg-emerald-50 hover:border-emerald-400 items-center justify-center text-charcoal-600 hover:text-emerald-800 transition-all self-end"
                aria-label="Swap origin and destination"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>

              {/* Destination */}
              <div>
                <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1.5">
                  Flying To
                </label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-gold-600 absolute left-3 top-3.5 rotate-90" />
                  <select
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-charcoal-900 min-h-[48px]"
                  >
                    {AIRPORT_CITIES.map(a => <option key={a.code} value={a.code}>{a.city}</option>)}
                  </select>
                </div>
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1.5">
                  Departure Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-charcoal-900 min-h-[48px]"
                />
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 hover:bg-gold-400 shadow-md flex items-center justify-center gap-2 text-sm touch-target transition-all min-h-[48px]"
              >
                <Search className="w-4 h-4 text-emerald-950" />
                <span>Search Flights</span>
              </button>
            </div>
          </form>
        </div>

        {/* Info Banner */}
        <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border border-emerald-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
            <strong>Note:</strong> Prices shown are indicative estimates. Confirmed fares may vary due to airline availability, season, and group size. All Umrah-route flights include complimentary 5L Zamzam baggage allowance. Contact us for group discount pricing (5+ passengers).
          </p>
        </div>

        {/* Flight Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-extrabold text-charcoal-900">
              {searched ? `Available Flights (${displayedFlights.length})` : `Featured Routes (${displayedFlights.length})`}
            </h2>
          </div>

          {displayedFlights.map((flight) => (
            <div key={flight.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury transition-all overflow-hidden">
              <div className="p-4 sm:p-5">
                {/* Airline Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-xl font-bold shrink-0">
                      {flight.airlineLogoText.split(' ')[0]}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-charcoal-900">{flight.airline}</p>
                      <p className="text-[11px] text-charcoal-500">{flight.flightNumber} • {flight.cabin}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-charcoal-500 font-semibold">Per Person From</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-950">{formatPrice(flight.pricing)}</p>
                    <p className="text-[11px] text-charcoal-400">× {adults} = {formatPrice({ PKR: flight.pricing.PKR * adults, SAR: flight.pricing.SAR * adults, USD: flight.pricing.USD * adults })}</p>
                  </div>
                </div>

                {/* Route Segment */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="text-center min-w-[70px]">
                    <p className="text-xl sm:text-2xl font-black text-charcoal-900">{flight.departureTime}</p>
                    <p className="text-sm font-extrabold text-emerald-850">{flight.origin.code}</p>
                    <p className="text-[10px] text-charcoal-500 leading-snug">{flight.origin.city}</p>
                  </div>

                  <div className="flex-1 flex flex-col items-center gap-1">
                    <p className="text-[10px] font-bold text-charcoal-500 uppercase tracking-wider">{flight.duration}</p>
                    <div className="w-full flex items-center gap-1.5">
                      <div className="flex-1 h-px bg-slate-300" />
                      {flight.stops === 0 ? (
                        <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">Direct</span>
                      ) : (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shrink-0">{flight.stops} Stop</span>
                      )}
                      <div className="flex-1 h-px bg-slate-300" />
                    </div>
                    {flight.stopDetails && (
                      <p className="text-[10px] text-charcoal-400 font-medium">{flight.stopDetails}</p>
                    )}
                  </div>

                  <div className="text-center min-w-[70px]">
                    <p className="text-xl sm:text-2xl font-black text-charcoal-900">{flight.arrivalTime}</p>
                    <p className="text-sm font-extrabold text-emerald-850">{flight.destination.code}</p>
                    <p className="text-[10px] text-charcoal-500 leading-snug">{flight.destination.city}</p>
                  </div>
                </div>

                {/* Flight Features */}
                <div className="flex flex-wrap gap-2 mb-4 text-[11px]">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-charcoal-700 font-semibold">
                    <Luggage className="w-3 h-3 text-emerald-700" />
                    {flight.baggage}
                  </span>
                  {flight.mealsIncluded && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                      <Utensils className="w-3 h-3" />
                      Meals Included
                    </span>
                  )}
                  {flight.refundable && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                      <RefreshCw className="w-3 h-3" />
                      Refundable
                    </span>
                  )}
                </div>

                {/* Book Action Row */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20want%20to%20book%20flight%20${encodeURIComponent(flight.flightNumber)}%20from%20${flight.origin.city}%20to%20${flight.destination.city}%20for%20${adults}%20passengers`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl font-bold text-white bg-[#25D366] flex items-center justify-center gap-2 text-xs touch-target"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                  <a
                    href="tel:+923008456789"
                    className="py-2.5 rounded-xl font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-2 text-xs touch-target"
                  >
                    <Phone className="w-4 h-4" />
                    Call to Reserve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
