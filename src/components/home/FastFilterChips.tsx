import React from 'react';
import { PackageCategory } from '../../types';

interface FastFilterChipsProps {
  selectedCategory: PackageCategory;
  onSelectCategory: (cat: PackageCategory) => void;
  counts?: { [key: string]: number };
}

export const FastFilterChips: React.FC<FastFilterChipsProps> = ({
  selectedCategory,
  onSelectCategory,
  counts
}) => {
  const categories: { label: string; value: PackageCategory; icon: string }[] = [
    { label: 'All Packages', value: 'All', icon: '✨' },
    { label: '5-Star Luxury', value: '5-Star Luxury', icon: '👑' },
    { label: '4-Star Premium', value: '4-Star Premium', icon: '⭐' },
    { label: '3-Star Economy', value: '3-Star Economy', icon: '💰' },
    { label: 'Custom VIP', value: 'Custom VIP', icon: '💎' },
    { label: 'Ramadan Special', value: 'Ramadan Special', icon: '🌙' },
  ];

  return (
    <div className="w-full">
      {/* Horizontal Scrollable Container with smooth padding and hide scrollbar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -mx-1 snap-x scroll-smooth">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          const count = counts ? counts[cat.value] : null;

          return (
            <button
              key={cat.value}
              onClick={() => onSelectCategory(cat.value)}
              className={`snap-start shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all min-h-[48px] touch-target border ${
                isActive
                  ? 'bg-emerald-850 text-white border-emerald-950 shadow-md ring-2 ring-gold-500/40'
                  : 'bg-white text-charcoal-700 hover:text-emerald-900 hover:bg-slate-50 border-slate-200/90 shadow-sm'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              {count !== undefined && count !== null && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isActive
                      ? 'bg-gold-500 text-charcoal-950'
                      : 'bg-slate-100 text-charcoal-600'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
