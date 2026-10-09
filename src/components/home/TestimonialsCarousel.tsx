import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../../data/reviews';

export const TestimonialsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Pilgrim Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-2">
              Heartfelt Words from Our Pilgrims
            </h2>
            <p className="text-sm text-charcoal-600 mt-1">
              Read how thousands of pilgrims embarked on their once-in-a-lifetime journey with Al-Hashmi Travels.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-emerald-800 bg-white hover:bg-emerald-50 flex items-center justify-center text-charcoal-700 transition-all touch-target"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-emerald-800 bg-white hover:bg-emerald-50 flex items-center justify-center text-charcoal-700 transition-all touch-target"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Touch-enabled Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 -my-4 scroll-smooth"
        >
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[420px] md:w-[460px] bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-gold-400 transition-all"
            >
              <div className="space-y-3">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-400/40" />
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 text-gold-300 font-bold text-xs flex items-center justify-center shadow-sm">
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-charcoal-900 flex items-center gap-1">
                      {review.name}
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" aria-label="Verified Pilgrim" />
                      )}
                    </h4>
                    <p className="text-[11px] text-charcoal-500">
                      {review.city} • <span className="text-emerald-800 font-medium">{review.packageTaken}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-charcoal-400 font-medium">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
