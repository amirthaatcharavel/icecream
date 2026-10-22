import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, MessageSquareQuote, CheckCircle, Info } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-light/60 border-t border-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-strawberry-light text-chocolate text-xs font-bold uppercase tracking-wider border border-strawberry/40">
            <MessageSquareQuote className="w-3.5 h-3.5 text-strawberry-dark" />
            <span>Community Love</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-chocolate tracking-tight">
            Loved By Dessert Enthusiasts
          </h2>

          <p className="text-base text-chocolate/75 leading-relaxed">
            Stories and smiles from neighbours, beachcombers, and food travellers who step into our White Town gelateria.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 md:p-8 border border-chocolate/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-pistachio-dark bg-pistachio-light px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified Guest
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-sm text-chocolate/85 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-6 mt-6 border-t border-chocolate/8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-strawberry"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-chocolate leading-snug">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-chocolate/60">{rev.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-chocolate/50 block font-bold">
                    Favourite
                  </span>
                  <span className="text-[11px] font-bold text-strawberry-dark block max-w-[110px] truncate">
                    {rev.favouriteFlavour}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Placeholder Notice as required */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chocolate/5 text-chocolate/60 text-xs font-medium">
            <Info className="w-3.5 h-3.5 text-chocolate/50" />
            <span>Sample customer testimonials — easily configured with genuine guest reviews.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
