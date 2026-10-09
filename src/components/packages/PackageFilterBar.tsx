import React from 'react';
import { Search, Filter, ArrowUpDown, X, RotateCcw } from 'lucide-react';
import { PackageCategory } from '../../types';

interface PackageFilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: PackageCategory;
  setSelectedCategory: (c: PackageCategory) => void;
  selectedDuration: string;
  setSelectedDuration: (d: string) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
  budgetMax: number;
  setBudgetMax: (b: number) => void;
  onReset: () => void;
  totalResults: number;
}

export const PackageFilterBar: React.FC<PackageFilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedDuration,
  setSelectedDuration,
  sortBy,
  setSortBy,
  budgetMax,
  setBudgetMax,
  onReset,
  totalResults
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5 space-y-4">
      {/* Top Search & Results Count */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by hotel name (Fairmont, Pullman...), city, or package..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-charcoal-400 hover:text-charcoal-700"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <span className="font-bold text-charcoal-700">
            Found <span className="text-emerald-800 font-extrabold">{totalResults}</span> Packages
          </span>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-charcoal-600 hover:text-emerald-800 font-semibold py-1.5 px-2.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Filter Dropdowns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
        {/* Star Rating / Category */}
        <div>
          <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
            Star & Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as PackageCategory)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-semibold text-charcoal-900 min-h-[44px]"
          >
            <option value="All">All Categories</option>
            <option value="5-Star Luxury">5-Star Luxury VIP</option>
            <option value="4-Star Premium">4-Star Executive</option>
            <option value="3-Star Economy">3-Star Economy Comfort</option>
            <option value="Custom VIP">Custom VIP Family</option>
            <option value="Ramadan Special">Ramadan Special</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1">
            Duration (Nights)
          </label>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-semibold text-charcoal-900 min-h-[44px]"
          >
            <option value="all">All Durations</option>
            <option value="10">10 Nights</option>
            <option value="12">12 Nights</option>
            <option value="14">14 Nights</option>
            <option value="15">15 Nights</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
          <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider mb-1 flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3 text-gold-600" />
            Sort Packages By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-semibold text-charcoal-900 min-h-[44px]"
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="nearest">Nearest to Haram</option>
            <option value="rating">Highest Pilgrim Rating</option>
          </select>
        </div>

        {/* Budget Filter */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-[11px] font-bold text-charcoal-600 uppercase tracking-wider">
              Max Budget
            </label>
            <span className="text-[11px] font-extrabold text-emerald-800">
              Up to PKR {(budgetMax / 1000).toFixed(0)}k
            </span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <input
              type="range"
              min="150000"
              max="900000"
              step="25000"
              value={budgetMax}
              onChange={(e) => setBudgetMax(Number(e.target.value))}
              className="w-full accent-emerald-800 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
