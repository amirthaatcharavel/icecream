import React from 'react';
import { Milk, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import type { PageView } from '../types';

interface BrandStoryProps {
  onNavigate: (page: PageView) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-5/4 bg-cream-dark">
                <img
                  src="https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=1000&q=80"
                  alt="Crafting fresh artisanal gelato in small batches"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Offset Accent Image Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80"
                  alt="Fresh strawberry gelato swirl"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-chocolate/10 max-w-xs hidden sm:block">
                <span className="text-2xl">🌿</span>
                <p className="text-xs font-bold text-chocolate mt-1">
                  &ldquo;Gelato is an art of patience and pure ingredients.&rdquo;
                </p>
                <span className="text-[10px] text-chocolate/60 uppercase tracking-widest font-semibold mt-1 block">
                  — Chef Antoine & Priya
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vanilla text-chocolate text-xs font-bold uppercase tracking-wider border border-vanilla-dark/30">
              <Sparkles className="w-3.5 h-3.5 text-chocolate" />
              <span>Our Brand Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-chocolate tracking-tight leading-tight">
              Made With Love.{' '}
              <span className="text-strawberry-dark block sm:inline">Served With Joy.</span>
            </h2>

            <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-normal">
              Born along the charming sun-drenched streets of White Town, Puducherry,{' '}
              <strong className="text-chocolate font-semibold">SCOOP & SWIRL</strong> was founded on a simple
              belief: that true gelato should taste like pure memory.
            </p>

            <p className="text-sm sm:text-base text-chocolate/75 leading-relaxed">
              Unlike industrial ice cream churned with pumped air and synthetic essences, our traditional Italian
              slow-churn method keeps each batch dense, velvety, and intensely aromatic. We work directly with
              local dairy farmers and regional fruit growers to bring the vibrant bounty of the season straight
              into your waffle cone.
            </p>

            {/* Three Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-chocolate/8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-pistachio-light flex items-center justify-center text-pistachio-dark mb-3">
                  <Milk className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-chocolate mb-1">
                  Fresh Ingredients
                </h4>
                <p className="text-xs text-chocolate/70 leading-relaxed">
                  Organic farm milk, real vanilla pods & sun-ripened local fruit.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-chocolate/8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-strawberry-light flex items-center justify-center text-strawberry-dark mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-chocolate mb-1">
                  Small Batches
                </h4>
                <p className="text-xs text-chocolate/70 leading-relaxed">
                  Slow-churned every morning for that signature dense velvet texture.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-chocolate/8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-vanilla-light flex items-center justify-center text-chocolate mb-3">
                  <HeartHandshake className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="font-serif font-bold text-base text-chocolate mb-1">
                  Every Scoop Joy
                </h4>
                <p className="text-xs text-chocolate/70 leading-relaxed">
                  Freshly baked crisp waffle cones and smiles with every single order.
                </p>
              </div>
            </div>

            {/* Read Full Story Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-chocolate hover:text-strawberry-dark transition-colors group"
              >
                <span>Read our full artisanal story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
