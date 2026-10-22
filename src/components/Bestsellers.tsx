import React from 'react';
import type { Flavour, PageView } from '../types';
import { FLAVOURS } from '../data/flavours';
import { useCart } from '../context/CartContext';
import { Star, Plus, Flame, Sparkles } from 'lucide-react';

interface BestsellersProps {
  onOpenDetails: (flavour: Flavour) => void;
  onNavigate: (page: PageView) => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({ onOpenDetails, onNavigate }) => {
  const { addToCart } = useCart();
  const bestsellers = FLAVOURS.filter((f) => f.isBestseller).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream via-cream-dark/40 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-strawberry text-chocolate text-xs font-black uppercase tracking-wider shadow-xs">
            <Flame className="w-3.5 h-3.5 text-chocolate fill-chocolate" />
            <span>Customer Favourites</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-chocolate tracking-tight">
            Our Top 3 Bestsellers
          </h2>

          <p className="text-base sm:text-lg text-chocolate/75 leading-relaxed">
            The flavours our guests fall in love with at first scoop. Hand-crafted in generous
            portions with unmatched depth of flavour.
          </p>
        </div>

        {/* 3 Prominent Product Cards with Larger Images & Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map((flavour, idx) => {
            const accentColors = [
              'border-strawberry/30 hover:border-strawberry bg-strawberry-light/30',
              'border-chocolate/20 hover:border-chocolate bg-white',
              'border-pistachio/40 hover:border-pistachio bg-pistachio-light/30',
            ];

            return (
              <div
                key={flavour.id}
                className={`relative rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${accentColors[idx % 3]}`}
              >
                {/* Ranking Tag */}
                <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-2xl bg-chocolate text-cream font-black flex items-center justify-center text-sm shadow-md">
                  #{idx + 1}
                </div>

                {/* Large Product Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-cream-dark">
                  <img
                    src={flavour.image}
                    alt={flavour.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-chocolate flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{flavour.rating}</span>
                    <span className="text-chocolate/60">({flavour.reviewCount})</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/60">
                      {flavour.category}
                    </span>
                    <h3
                      onClick={() => onOpenDetails(flavour)}
                      className="font-serif text-2xl font-black text-chocolate hover:text-strawberry-dark transition-colors cursor-pointer mt-1"
                    >
                      {flavour.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-chocolate/75 mt-2 leading-relaxed">
                      {flavour.description}
                    </p>

                    {/* Tasting Notes Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {flavour.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="text-[11px] font-medium bg-cream px-2.5 py-1 rounded-lg border border-chocolate/8 text-chocolate/80"
                        >
                          ✦ {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-chocolate/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-chocolate/60 block font-medium">Single Scoop</span>
                      <span className="text-2xl font-black text-chocolate">₹{flavour.price}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenDetails(flavour)}
                        className="text-xs font-bold text-chocolate hover:bg-cream-dark/60 px-3 py-2.5 rounded-xl transition-colors"
                      >
                        Details
                      </button>

                      <button
                        onClick={() =>
                          addToCart(flavour, {
                            scoopSize: 'Single',
                            coneType: 'Waffle Cone',
                            quantity: 1,
                          })
                        }
                        className="inline-flex items-center gap-2 bg-strawberry text-chocolate hover:brightness-105 active:scale-95 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Scoop</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discover Your Favourite CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block p-1 rounded-full bg-white shadow-md border border-chocolate/10">
            <button
              onClick={() => onNavigate('flavours')}
              className="inline-flex items-center gap-3 bg-chocolate hover:bg-chocolate-light text-cream font-bold px-8 py-4 rounded-full transition-all text-sm sm:text-base group"
            >
              <Sparkles className="w-4 h-4 text-strawberry animate-spin [animation-duration:8s]" />
              <span>Discover Your Favourite Scoop</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
