import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { FastFilterChips } from '../components/home/FastFilterChips';
import { PackageCard } from '../components/home/PackageCard';
import { KeyServices } from '../components/home/KeyServices';
import { StatsCounter } from '../components/home/StatsCounter';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PACKAGES_DATA } from '../data/packages';
import { PackageCategory } from '../types';
import { ChevronRight, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>('All');

  const filteredPackages = useMemo(() => {
    const base = activeCategory === 'All'
      ? PACKAGES_DATA
      : PACKAGES_DATA.filter(p => p.category === activeCategory);
    return base.slice(0, 6);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = { All: PACKAGES_DATA.length };
    PACKAGES_DATA.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <main>
      {/* 1. Hero with Slider & Search Bar */}
      <HeroSection />

      {/* 2. Packages Section */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold-700 bg-gold-100/70 px-2.5 py-0.5 rounded-full border border-gold-300">
                  2026 Packages Now Live
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
                Umrah & Hajj Packages
              </h2>
              <p className="text-sm text-charcoal-600 mt-1">
                Explore our curated selection of DTS-approved packages across all budgets and comfort levels.
              </p>
            </div>
            <Link
              to="/packages"
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border-2 border-emerald-800 text-emerald-800 font-bold text-sm hover:bg-emerald-800 hover:text-white transition-all touch-target"
            >
              <span>View All Packages</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Fast Filter Chips */}
          <FastFilterChips
            selectedCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={categoryCounts}
          />

          {/* Package Cards Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageItem={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-charcoal-500">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-base font-semibold">No packages found in this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-sm text-emerald-800 font-bold underline"
              >
                Show all packages
              </button>
            </div>
          )}

          {/* View All CTA */}
          {filteredPackages.length >= 6 && (
            <div className="text-center pt-4">
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 hover:bg-gold-400 shadow-md text-sm transition-all active:scale-95 touch-target"
              >
                <span>See All Available Packages</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3. Key Services Grid */}
      <KeyServices />

      {/* 4. Stats Counter (Social Proof) */}
      <StatsCounter />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Testimonials */}
      <TestimonialsCarousel />

      {/* 7. Bottom CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5 relative z-10">
          <span className="text-gold-400 text-3xl">🕋</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            Begin Your Sacred Journey Today
          </h2>
          <p className="text-sm sm:text-base text-emerald-200 max-w-lg mx-auto">
            Let our certified Umrah advisors craft a personalized sacred pilgrimage experience that fits your exact budget, hotel preference, and travel group.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 hover:bg-gold-400 shadow-lg text-sm transition-all active:scale-95 touch-target"
            >
              Explore All Packages
            </Link>
            <a
              href="https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20want%20to%20plan%20my%20Umrah%20journey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#1da851] shadow-md text-sm flex items-center justify-center gap-2 transition-all touch-target"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
