import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Award, 
  ShieldCheck, 
  Compass,
  FileText,
  Plane,
  Info,
  MapPin,
  CalendarCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Currency } from '../../types';

export const Header: React.FC = () => {
  const { currency, setCurrency, openQuoteModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'Umrah Packages', path: '/packages', icon: CalendarCheck },
    { name: 'Visa Services', path: '/visa', icon: FileText },
    { name: 'Flights', path: '/flights', icon: Plane },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: MapPin },
  ];

  const currencies: Currency[] = ['PKR', 'SAR', 'USD'];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full z-40 sticky top-0 bg-white shadow-sm transition-all duration-200">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-emerald-950 text-white text-xs py-2 px-3 sm:px-6 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Government License & Trust Badge */}
          <div className="flex items-center gap-2 text-emerald-100/90 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1 bg-emerald-800/80 text-gold-300 px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider border border-gold-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Govt DTS #3842
            </span>
            <span className="hidden md:inline text-emerald-300">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-200">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              IATA Accredited Agency #27-3-9482
            </span>
          </div>

          {/* Direct Quick Contact & Currency Switcher */}
          <div className="flex items-center gap-4 ml-auto">
            {/* WhatsApp Quick Link */}
            <a 
              href="https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20Al-Hashmi%20Travels%20Umrah%20packages" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-gold-300 transition-colors py-1"
              aria-label="Direct WhatsApp Contact"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden sm:inline font-medium">+92 300 8456789</span>
              <span className="sm:hidden font-medium">WhatsApp</span>
            </a>

            {/* Currency Switcher */}
            <div className="flex items-center bg-emerald-900/90 rounded-md p-0.5 border border-emerald-800">
              <Globe className="w-3 h-3 text-gold-400 ml-1.5 mr-1 hidden xs:inline" />
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-0.5 text-[11px] font-bold rounded transition-all touch-manipulation ${
                    currency === curr
                      ? 'bg-gold-600 text-charcoal-900 shadow-sm'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                  aria-label={`Switch currency to ${curr}`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-gold-500/40 flex items-center justify-center shadow-md group-hover:border-gold-400 transition-all">
              <div className="relative text-gold-400 font-serif font-bold text-xl sm:text-2xl flex items-center justify-center">
                <span>🕋</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-xl tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  AL-HASHMI
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-1.5 py-0.2 bg-gold-50 text-gold-800 border border-gold-300 rounded">
                  TRAVELS
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-charcoal-600 tracking-wider uppercase">
                Hajj, Umrah & Tourism
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    active
                      ? 'text-emerald-850 font-bold bg-emerald-50'
                      : 'text-charcoal-700 hover:text-emerald-800 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Desktop "Get Quote" & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-charcoal-900 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 shadow-md hover:shadow-gold-glow transition-all active:scale-95 touch-target"
            >
              <CalendarCheck className="w-4 h-4 text-emerald-950" />
              <span>Get Free Quote</span>
            </button>

            {/* Mobile Hamburger Button - Minimum 48px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-lg text-charcoal-800 hover:text-emerald-850 hover:bg-emerald-50 transition-colors touch-target flex items-center justify-center"
              aria-label="Toggle Mobile Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-charcoal-900" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SLIDING DRAWER (SHEET MENU) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-900">
              <div className="flex items-center gap-2">
                <span className="text-xl">🕋</span>
                <div>
                  <h3 className="font-bold text-sm tracking-wide text-white">AL-HASHMI TRAVELS</h3>
                  <p className="text-[10px] text-gold-300">Govt Licensed DTS #3842</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-emerald-900 touch-target flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Currency Selection */}
            <div className="p-4 bg-emerald-50/70 border-b border-emerald-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                Select Currency
              </span>
              <div className="flex bg-white rounded-lg p-1 border border-emerald-200 shadow-sm">
                {currencies.map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2.5 py-1 text-xs font-bold rounded ${
                      currency === c ? 'bg-gold-600 text-charcoal-950 font-black' : 'text-charcoal-600'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav Items */}
            <div className="p-3 space-y-1 flex-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl font-semibold text-sm transition-all min-h-[50px] ${
                      active
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'text-charcoal-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${active ? 'text-gold-300' : 'text-emerald-800'}`} />
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-white' : 'text-charcoal-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full min-h-[48px] py-3 rounded-xl font-bold text-charcoal-900 bg-gold-500 hover:bg-gold-400 shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-950" />
                Request Custom Quotation
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:+923008456789"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-emerald-800 text-white font-semibold min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Agency
                </a>
                <a
                  href="https://wa.me/923008456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#25D366] text-white font-semibold min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <p className="text-[11px] text-center text-charcoal-500 pt-1">
                Al-Hashmi Travels & Tours (Pvt) Ltd.
                <br />
                Lahore • Islamabad • Karachi
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
