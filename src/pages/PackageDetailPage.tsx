import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  MapPin, 
  Plane, 
  Users, 
  CheckCircle2, 
  Heart,
  Share2,
  Phone,
  MessageCircle,
  ChevronRight,
  Building
} from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';
import { ImageGallery } from '../components/package-detail/ImageGallery';
import { PackageTabs } from '../components/package-detail/PackageTabs';
import { PackageCard } from '../components/home/PackageCard';
import { useApp } from '../context/AppContext';

export const PackageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { formatPrice, openQuoteModal, isPackageSaved, toggleSavePackage, showToast } = useApp();
  const [selectedSharing, setSelectedSharing] = useState<'sharingQuad' | 'sharingTriple' | 'sharingDouble'>('sharingQuad');

  const pkg = PACKAGES_DATA.find(p => p.id === id);
  const relatedPackages = PACKAGES_DATA.filter(p => p.id !== id && p.category === pkg?.category).slice(0, 3);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-6xl">🕋</p>
        <h2 className="text-xl font-bold text-charcoal-900">Package not found</h2>
        <p className="text-sm text-charcoal-500">This package may have been updated or removed.</p>
        <Link
          to="/packages"
          className="px-6 py-3 rounded-xl bg-emerald-850 text-white font-bold text-sm"
        >
          Browse All Packages
        </Link>
      </div>
    );
  }

  const isSaved = isPackageSaved(pkg.id);
  const sharingLabels = { sharingQuad: 'Quad (4-Person)', sharingTriple: 'Triple (3-Person)', sharingDouble: 'Double (2-Person)' };

  return (
    <main className="min-h-screen bg-slate-50 pb-32 lg:pb-12">
      {/* Back Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-emerald-800 transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Packages</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { navigator.clipboard?.writeText(window.location.href); showToast('Package link copied to clipboard!'); }}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-charcoal-600 hover:border-emerald-400 hover:text-emerald-800 transition-all"
              aria-label="Share this package"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleSavePackage(pkg.id)}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-charcoal-600 hover:border-red-300 hover:text-red-500 transition-all"
              aria-label="Save package"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* LEFT COLUMN: Images + Tabs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Title & Key Info */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                {pkg.badge && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase bg-gold-500 text-charcoal-950">
                    {pkg.badge}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {pkg.category}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-charcoal-900 leading-tight">
                {pkg.title}
              </h1>
              <p className="text-sm text-charcoal-600">{pkg.subtitle}</p>

              {/* Rating + Review */}
              <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? 'fill-gold-400 text-gold-400' : 'text-slate-300'}`} />
                  ))}
                  <span className="font-bold text-charcoal-900 ml-1">{pkg.rating}</span>
                </div>
                <span className="text-charcoal-500 text-xs">({pkg.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Image Gallery */}
            <ImageGallery images={pkg.images} title={pkg.title} />

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-center shadow-sm">
                <Clock className="w-5 h-5 text-emerald-800 mx-auto mb-1" />
                <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Duration</p>
                <p className="text-sm font-extrabold text-charcoal-900">{pkg.durationNights} Nights</p>
              </div>
              <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-center shadow-sm">
                <MapPin className="w-5 h-5 text-emerald-800 mx-auto mb-1" />
                <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Makkah Hotel</p>
                <p className="text-[11px] font-bold text-charcoal-900 leading-tight">{pkg.makkahHotel.distanceToHaram.split(' ')[0]}</p>
              </div>
              <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-center shadow-sm">
                <Plane className="w-5 h-5 text-emerald-800 mx-auto mb-1" />
                <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Airlines</p>
                <p className="text-[11px] font-bold text-charcoal-900 leading-tight">{pkg.airlines[0]}</p>
              </div>
              <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-center shadow-sm">
                <Users className="w-5 h-5 text-emerald-800 mx-auto mb-1" />
                <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Room Options</p>
                <p className="text-[11px] font-bold text-charcoal-900 leading-tight">Quad / Triple / Double</p>
              </div>
            </div>

            {/* Detailed Content Tabs */}
            <PackageTabs packageItem={pkg} />
          </div>

          {/* RIGHT COLUMN: Pricing Sidebar (Desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-4">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-luxury overflow-hidden">
                {/* Pricing Header */}
                <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-300">
                    Price per Pilgrim (From)
                  </p>
                  <div className="text-3xl font-black text-white mt-1">
                    {formatPrice(pkg.pricing[selectedSharing])}
                  </div>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    {sharingLabels[selectedSharing]} — all inclusive
                  </p>
                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  {/* Room Sharing Selector */}
                  <div>
                    <p className="text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                      Room Sharing
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {(['sharingQuad', 'sharingTriple', 'sharingDouble'] as const).map(key => (
                        <button
                          key={key}
                          onClick={() => setSelectedSharing(key)}
                          className={`py-2 rounded-xl border-2 text-xs font-bold transition-all touch-target ${
                            selectedSharing === key
                              ? 'border-emerald-800 bg-emerald-50 text-emerald-900'
                              : 'border-slate-200 text-charcoal-600 hover:border-emerald-400'
                          }`}
                        >
                          {key === 'sharingQuad' ? 'Quad' : key === 'sharingTriple' ? 'Triple' : 'Double'}
                          <div className="text-[10px] font-extrabold text-emerald-700 mt-0.5">
                            {formatPrice(pkg.pricing[key])}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Departure Airports */}
                  <div>
                    <p className="text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-emerald-800" /> Departure Cities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.departureAirports.map(a => (
                        <span key={a} className="px-2 py-1 bg-slate-100 text-charcoal-700 text-[11px] font-semibold rounded-lg">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Inclusions */}
                  <div className="bg-emerald-50/70 rounded-xl p-3 border border-emerald-100">
                    <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2">Included</p>
                    <div className="space-y-1.5">
                      {pkg.inclusions.slice(0, 4).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <button
                    onClick={() => openQuoteModal(pkg.id, pkg.title)}
                    className="w-full py-3.5 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 hover:bg-gold-400 shadow-md text-sm flex items-center justify-center gap-2 transition-all active:scale-95 touch-target"
                  >
                    Request Exact Quote & Availability
                  </button>

                  <a
                    href={`https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20am%20interested%20in:%20${encodeURIComponent(pkg.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#1da851] text-sm flex items-center justify-center gap-2 transition-all touch-target"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+923008456789"
                    className="w-full py-3 rounded-xl font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-sm flex items-center justify-center gap-2 transition-all touch-target"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Directly: +92 300 8456789</span>
                  </a>

                  <p className="text-[11px] text-center text-charcoal-500">
                    🔒 No payment required. Get confirmed rates & hotel availability in &lt;30 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <section className="mt-12 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal-900">
                You May Also Like
              </h2>
              <Link to="/packages" className="text-sm font-bold text-emerald-800 flex items-center gap-1">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPackages.map(relPkg => (
                <PackageCard key={relPkg.id} packageItem={relPkg} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* STICKY BOTTOM BAR (Mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-3 py-2 lg:hidden">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[10px] text-charcoal-500 font-semibold">Starting from</p>
            <p className="text-lg font-black text-emerald-950">{formatPrice(pkg.pricing[selectedSharing])}</p>
          </div>
          <button
            onClick={() => openQuoteModal(pkg.id, pkg.title)}
            className="flex-1 py-3 px-5 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 text-sm shadow-md flex items-center justify-center gap-2 touch-target"
          >
            Book Package
          </button>
        </div>
      </div>
    </main>
  );
};
