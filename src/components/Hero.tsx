import React from 'react';
import type { PageView } from '../types';
import { ArrowRight, MapPin, Sparkles, Heart, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:py-20 lg:py-24">
      {/* Background ambient pastel blur accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-strawberry/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pistachio/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-vanilla/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story & Hero Copy */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-strawberry-light border border-strawberry/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-strawberry-dark animate-ping" />
              <Sparkles className="w-4 h-4 text-strawberry-dark" />
              <span className="text-xs font-bold uppercase tracking-wider text-chocolate">
                Freshly Churned Every Morning in White Town
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-chocolate tracking-tight leading-[1.08]">
              A Little Scoop of{' '}
              <span className="relative inline-block text-strawberry-dark">
                Happiness.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-strawberry"
                  viewBox="0 0 240 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C60 2 180 2 238 12"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-chocolate/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Handcrafted gelato, irresistible flavours, and sweet moments made fresh every day.
              Slow-churned in small batches with farm-fresh milk and sun-ripened local fruit.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('flavours')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-chocolate hover:bg-chocolate-light text-cream font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-base group"
              >
                <span>Explore Our Flavours</span>
                <ArrowRight className="w-5 h-5 text-strawberry group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-cream hover:bg-cream-dark/60 text-chocolate font-bold px-7 py-4 rounded-full border-2 border-chocolate/20 hover:border-chocolate/40 transition-all text-base"
              >
                <MapPin className="w-5 h-5 text-chocolate/70" />
                <span>Find Our Store</span>
              </button>
            </div>

            {/* Social Proof & Metrics */}
            <div className="pt-6 border-t border-chocolate/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="w-9 h-9 rounded-full border-2 border-cream object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Happy customer"
                  />
                  <img
                    className="w-9 h-9 rounded-full border-2 border-cream object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Happy customer"
                  />
                  <img
                    className="w-9 h-9 rounded-full border-2 border-cream object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                    alt="Happy customer"
                  />
                </div>
                <div>
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                  <span className="text-xs font-semibold text-chocolate/80">4.9 / 5 (1,200+ Reviews)</span>
                </div>
              </div>

              <div className="h-8 w-px bg-chocolate/10 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-pistachio-light flex items-center justify-center text-pistachio-dark">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-chocolate">100% Artisanal</p>
                  <p className="text-[11px] text-chocolate/60">No Artificial Preservatives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Floating Decorative Elements */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Main Photo Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 bg-cream-dark transform transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1200&q=85"
                  alt="Colourful artisan gelato scoops in waffle cones"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-between border border-white/60 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🍨</span>
                    <div>
                      <p className="text-xs font-extrabold text-chocolate leading-tight">Fresh Churn Today</p>
                      <p className="text-[11px] text-chocolate/70">Strawberry Dream & Pistachio Bliss</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-strawberry/30 text-chocolate px-2.5 py-1 rounded-full">
                    From ₹99
                  </span>
                </div>
              </div>

              {/* Floating Element 1: 100% Organic Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-cream/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-chocolate/10 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-pistachio flex items-center justify-center text-chocolate font-bold shadow-inner">
                  🌱
                </div>
                <div>
                  <p className="text-xs font-extrabold text-chocolate">Pure Natural</p>
                  <p className="text-[11px] text-chocolate/70">Farm Milk & Berries</p>
                </div>
              </div>

              {/* Floating Element 2: Small Batches */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 bg-cream/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-chocolate/10 flex items-center gap-3 animate-float [animation-delay:2s]">
                <div className="w-10 h-10 rounded-xl bg-strawberry flex items-center justify-center text-chocolate shadow-inner">
                  <Heart className="w-5 h-5 text-strawberry-dark fill-strawberry-dark" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-chocolate">Slow Churned</p>
                  <p className="text-[11px] text-chocolate/70">Italian Tradition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
