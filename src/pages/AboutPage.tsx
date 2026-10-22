import React from 'react';
import type { PageView } from '../types';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 md:py-20 space-y-20 md:space-y-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-strawberry-light text-chocolate text-xs font-bold uppercase tracking-wider border border-strawberry/40">
            <Heart className="w-3.5 h-3.5 text-strawberry-dark fill-strawberry-dark" />
            <span>Our Journey & Craft</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-chocolate tracking-tight">
            Crafted for the Love of Pure Gelato
          </h1>

          <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-normal">
            Where Italian artisan heritage meets the tranquil coastal charm of Pondicherry.
            We slow-churn every batch to create unforgettable moments of pure joy.
          </p>
        </div>

        {/* Hero image banner */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-16/9 sm:aspect-21/9 bg-cream-dark">
          <img
            src="https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=1400&q=85"
            alt="Artisan gelato making process"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* The Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-strawberry-dark block">
              The Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-chocolate leading-tight">
              A Sunny Dream on Rue Suffren
            </h2>
            <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed">
              SCOOP & SWIRL began with a vision to create a boutique dessert destination that felt like home.
              Inspired by the serene tree-lined boulevards of White Town and the vibrant organic farms of Auroville,
              we wanted to build a sanctuary where friends and families could gather over the purest, freshest gelato.
            </p>
            <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed">
              We studied traditional Italian gelato making in Bologna, learning how subtle changes in temperature,
              churn speed, and milk density can elevate simple milk and fruit into a sensory masterpiece.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-cream-dark border-l-4 border-strawberry text-xs text-chocolate/85 italic leading-relaxed">
                &ldquo;We don't add synthetic colour or artificial stabilizers. If a strawberry isn't in season,
                we wait for it. Good dessert requires patience, honesty, and care.&rdquo;
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh Strawberries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-5 rounded-2xl border border-chocolate/8 shadow-xs text-center">
                <span className="font-serif text-3xl font-black text-chocolate block">100%</span>
                <span className="text-xs font-bold text-chocolate/70">Organic Local Dairy</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-strawberry-light/50 p-5 rounded-2xl border border-strawberry/30 shadow-xs text-center">
                <span className="font-serif text-3xl font-black text-chocolate block">Zero</span>
                <span className="text-xs font-bold text-chocolate/70">Artificial Colours</span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=600&q=80"
                  alt="Pistachio Gelato"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gelato vs Ice Cream Education Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-chocolate/10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-pistachio-dark">
              Artisan Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-chocolate">
              What Makes Gelato Truly Different?
            </h2>
            <p className="text-sm text-chocolate/75">
              Many people wonder why gelato tastes so much richer and silkier than commercial ice cream.
              Here is the secret behind the craft:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-cream border border-chocolate/8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-strawberry flex items-center justify-center text-chocolate font-bold">
                1
              </div>
              <h4 className="font-serif font-black text-lg text-chocolate">Less Butterfat</h4>
              <p className="text-xs text-chocolate/75 leading-relaxed">
                Gelato uses more whole milk and less heavy cream (around 4–8% fat compared to 15–25% in ice cream).
                Because fat coats the tongue and dulls flavour perception, lower fat lets real ingredients shine vividly!
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-chocolate/8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pistachio flex items-center justify-center text-chocolate font-bold">
                2
              </div>
              <h4 className="font-serif font-black text-lg text-chocolate">Slow Churned, Less Air</h4>
              <p className="text-xs text-chocolate/75 leading-relaxed">
                Commercial ice cream pumps 50% to 90% air into each carton. Our artisanal slow-churn process incorporates
                only 20–30% air, resulting in an incomparably dense, velvety, and luxurious spoonful.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-chocolate/8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-vanilla flex items-center justify-center text-chocolate font-bold">
                3
              </div>
              <h4 className="font-serif font-black text-lg text-chocolate">Optimal Serving Temperature</h4>
              <p className="text-xs text-chocolate/75 leading-relaxed">
                Gelato is stored and served 5 to 7 degrees warmer than ice cream. It is neither hard nor icy,
                melting effortlessly across the palate the instant it touches your lips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-pistachio-light via-cream to-cream p-8 sm:p-12 rounded-3xl border border-pistachio/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pistachio-dark uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Planet Friendly & Pure</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-chocolate">
              100% Compostable Cups & Conscious Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/75 leading-relaxed">
              Every takeaway spoon and cup at SCOOP & SWIRL is made from plant starch or bagasse paper.
              Our waffle cones are 100% edible and baked fresh throughout the day with zero single-use plastic waste.
            </p>
          </div>

          <button
            onClick={() => onNavigate('flavours')}
            className="inline-flex items-center gap-2 bg-chocolate text-cream font-bold text-xs px-8 py-4 rounded-full hover:bg-chocolate-light transition-all shadow-md shrink-0"
          >
            <span>Explore Flavours</span>
            <ArrowRight className="w-4 h-4 text-strawberry" />
          </button>
        </div>
      </section>
    </div>
  );
};
