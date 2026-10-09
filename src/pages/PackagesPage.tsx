import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PackageCard } from '../components/home/PackageCard';
import { PackageFilterBar } from '../components/packages/PackageFilterBar';
import { FastFilterChips } from '../components/home/FastFilterChips';
import { PACKAGES_DATA } from '../data/packages';
import { PackageCategory } from '../types';
import { Filter } from 'lucide-react';

export const PackagesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initCategory = (searchParams.get('category') as PackageCategory) || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>(initCategory);
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [budgetMax, setBudgetMax] = useState(900000);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDuration('all');
    setSortBy('popular');
    setBudgetMax(900000);
    setPage(1);
  };

  const filteredAndSorted = useMemo(() => {
    let result = PACKAGES_DATA.filter(pkg => {
      if (selectedCategory !== 'All' && pkg.category !== selectedCategory) return false;
      if (selectedDuration !== 'all' && pkg.durationNights !== Number(selectedDuration)) return false;
      if (pkg.pricing.sharingQuad.PKR > budgetMax) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          pkg.title.toLowerCase().includes(q) ||
          pkg.makkahHotel.name.toLowerCase().includes(q) ||
          pkg.madinahHotel.name.toLowerCase().includes(q) ||
          pkg.category.toLowerCase().includes(q)
        );
      }
      return true;
    });

    switch (sortBy) {
      case 'price-asc':
        result = result.sort((a, b) => a.pricing.sharingQuad.PKR - b.pricing.sharingQuad.PKR);
        break;
      case 'price-desc':
        result = result.sort((a, b) => b.pricing.sharingQuad.PKR - a.pricing.sharingQuad.PKR);
        break;
      case 'rating':
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case 'nearest':
        // Put 0m/20m/50m at top (cheapest walk time roughly by distance string)
        result = result.sort((a, b) =>
          parseInt(a.makkahHotel.distanceToHaram) - parseInt(b.makkahHotel.distanceToHaram)
        );
        break;
      default: // popular
        result = result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDuration, sortBy, budgetMax]);

  const paginatedPackages = filteredAndSorted.slice(0, page * pageSize);
  const hasMore = paginatedPackages.length < filteredAndSorted.length;

  return (
    <main className="min-h-screen bg-slate-50 pb-28 lg:pb-10">
      {/* Page Hero Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-bold uppercase tracking-widest">
            <span>Al-Hashmi Travels</span>
            <span>›</span>
            <span>Umrah Packages</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            All Umrah Packages
          </h1>
          <p className="text-sm text-emerald-200 max-w-xl">
            Browse our complete range of DTS-approved packages — from budget-friendly economy to ultra-luxury VIP Haram-facing suites.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5">
        {/* Sticky Filter Bar */}
        <PackageFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDuration={selectedDuration}
          setSelectedDuration={setSelectedDuration}
          sortBy={sortBy}
          setSortBy={setSortBy}
          budgetMax={budgetMax}
          setBudgetMax={setBudgetMax}
          onReset={handleReset}
          totalResults={filteredAndSorted.length}
        />

        {/* Mobile Fast Filter Chips */}
        <FastFilterChips
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => { setSelectedCategory(cat); setPage(1); }}
        />

        {/* Results Grid */}
        {filteredAndSorted.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-bold text-charcoal-800">No packages match your filters</p>
            <p className="text-sm text-charcoal-500 mt-1 mb-5">Try adjusting the search or budget range above.</p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-sm touch-target"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paginatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageItem={pkg} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setPage(prev => prev + 1)}
                  className="px-8 py-3 rounded-xl border-2 border-emerald-800 text-emerald-800 font-bold text-sm hover:bg-emerald-800 hover:text-white transition-all touch-target"
                >
                  Load More Packages ({filteredAndSorted.length - paginatedPackages.length} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};
