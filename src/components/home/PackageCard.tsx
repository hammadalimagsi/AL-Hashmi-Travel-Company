import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  MapPin, 
  Heart, 
  ChevronRight, 
  Plane, 
  ShieldCheck,
  Building,
  Check
} from 'lucide-react';
import { PackageItem } from '../../types';
import { useApp } from '../../context/AppContext';

interface PackageCardProps {
  packageItem: PackageItem;
  featuredMode?: boolean;
}

export const PackageCard: React.FC<PackageCardProps> = ({ packageItem }) => {
  const { formatPrice, openQuoteModal, isPackageSaved, toggleSavePackage } = useApp();
  const isSaved = isPackageSaved(packageItem.id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col h-full relative">
      {/* 1. THUMBNAIL & BADGES */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img
          src={packageItem.images[0]}
          alt={packageItem.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Top Badges: Category & Promotional Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {packageItem.badge && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-gold-500 text-charcoal-950 shadow-sm border border-gold-400">
                {packageItem.badge}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-950/90 text-white backdrop-blur-sm border border-emerald-700/60">
              {packageItem.category}
            </span>
          </div>

          {/* Save / Favorite Heart Button - 48px touch target */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSavePackage(packageItem.id);
            }}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-charcoal-700 hover:text-red-500 transition-colors shadow-sm touch-target"
            aria-label={isSaved ? 'Remove from favorites' : 'Save to favorites'}
          >
            <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Bottom Banner on Image: Duration and Rating */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
          <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg font-bold">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            {packageItem.durationNights} Nights ({Math.ceil(packageItem.durationNights / 2)} Makkah / {Math.floor(packageItem.durationNights / 2)} Madinah)
          </span>

          <span className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg font-bold text-gold-300">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            {packageItem.rating} <span className="text-[10px] text-white/70">({packageItem.reviewCount})</span>
          </span>
        </div>
      </div>

      {/* 2. CARD CONTENT */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <Link to={`/package/${packageItem.id}`} className="block group-hover:text-emerald-800 transition-colors">
            <h3 className="font-extrabold text-base sm:text-lg text-charcoal-900 leading-snug line-clamp-2">
              {packageItem.title}
            </h3>
          </Link>

          <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
            {packageItem.subtitle}
          </p>

          {/* Hotel Distances Grid */}
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 space-y-2 text-xs">
            {/* Makkah Hotel & Distance */}
            <div className="flex items-start gap-2">
              <Building className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-charcoal-900 truncate">
                    🕋 {packageItem.makkahHotel.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-900 font-semibold">
                  <MapPin className="w-3 h-3 text-gold-600" />
                  <span>{packageItem.makkahHotel.distanceToHaram}</span>
                </div>
              </div>
            </div>

            {/* Madinah Hotel & Distance */}
            <div className="flex items-start gap-2 pt-1.5 border-t border-slate-200/60">
              <Building className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-charcoal-900 truncate">
                    🕌 {packageItem.madinahHotel.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-900 font-semibold">
                  <MapPin className="w-3 h-3 text-gold-600" />
                  <span>{packageItem.madinahHotel.distanceToHaram}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Highlight Points */}
          <div className="space-y-1 pt-1">
            {packageItem.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-charcoal-700">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PRICING & ACTIONS */}
        <div className="pt-3 border-t border-slate-200 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-charcoal-500 block">
                Starting From (Quad)
              </span>
              <div className="text-xl sm:text-2xl font-black text-emerald-950">
                {formatPrice(packageItem.pricing.sharingQuad)}
              </div>
            </div>
            <span className="text-[11px] font-semibold text-charcoal-500">
              per person
            </span>
          </div>

          {/* Actions: View Details & Instant Quote */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/package/${packageItem.id}`}
              className="py-2.5 px-3 rounded-xl border border-emerald-900/40 text-emerald-900 hover:bg-emerald-50 font-bold text-xs flex items-center justify-center gap-1 transition-all touch-target"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => openQuoteModal(packageItem.id, packageItem.title)}
              className="py-2.5 px-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-extrabold text-xs shadow-sm flex items-center justify-center gap-1 transition-all active:scale-95 touch-target"
            >
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
