import React from 'react';
import type { Flavour, PageView } from '../types';
import { FLAVOURS } from '../data/flavours';
import { FlavourCard } from './FlavourCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedFlavoursProps {
  onOpenDetails: (flavour: Flavour) => void;
  onNavigate: (page: PageView) => void;
}

export const FeaturedFlavours: React.FC<FeaturedFlavoursProps> = ({ onOpenDetails, onNavigate }) => {
  // Take the 6 featured flavours specified
  const featured = FLAVOURS.filter((f) => f.isFeatured).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-cream-light/60 border-y border-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pistachio-light text-chocolate text-xs font-bold uppercase tracking-wider border border-pistachio/50">
            <Sparkles className="w-3.5 h-3.5 text-pistachio-dark" />
            <span>Handcrafted Daily</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-chocolate tracking-tight">
            Our Featured Flavours
          </h2>

          <p className="text-base sm:text-lg text-chocolate/75 leading-relaxed">
            From classic Italian recipes to seasonal coastal fruits, every batch is prepared
            with authentic ingredients and zero artificial essences.
          </p>
        </div>

        {/* 6 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((flavour) => (
            <FlavourCard
              key={flavour.id}
              flavour={flavour}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        {/* Explore All Flavours CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => onNavigate('flavours')}
            className="inline-flex items-center gap-3 bg-chocolate hover:bg-chocolate-light text-cream font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all group"
          >
            <span>Explore Full 12+ Flavour Menu</span>
            <ArrowRight className="w-4 h-4 text-strawberry group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
