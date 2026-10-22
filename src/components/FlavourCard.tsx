import React from 'react';
import type { Flavour } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Eye, Star } from 'lucide-react';

interface FlavourCardProps {
  flavour: Flavour;
  onOpenDetails: (flavour: Flavour) => void;
}

export const FlavourCard: React.FC<FlavourCardProps> = ({ flavour, onOpenDetails }) => {
  const { addToCart } = useCart();

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-strawberry text-chocolate border-strawberry-dark/30';
      case 'Chef Choice':
        return 'bg-pistachio text-chocolate border-pistachio-dark/30';
      case 'Seasonal':
        return 'bg-vanilla text-chocolate border-vanilla-dark/30';
      case 'New':
        return 'bg-chocolate text-cream border-cream/20';
      default:
        return 'bg-cream text-chocolate';
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-chocolate/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Image Container with Badge */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-cream-dark">
        <img
          src={flavour.image}
          alt={flavour.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
          {flavour.badge && (
            <span
              className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${getBadgeStyle(
                flavour.badge
              )}`}
            >
              {flavour.badge}
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => onOpenDetails(flavour)}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-cream/90 hover:bg-cream text-chocolate shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 focus:opacity-100"
          aria-label={`View tasting notes for ${flavour.name}`}
          title="Quick view tasting notes"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Rating chip */}
        <div className="absolute bottom-3 left-3.5 bg-chocolate/85 text-cream text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span>{flavour.rating}</span>
          <span className="text-cream/60 text-[10px]">({flavour.reviewCount})</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Dietary Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {flavour.dietary.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold text-chocolate/70 bg-cream-dark px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name & Tagline */}
          <h3
            onClick={() => onOpenDetails(flavour)}
            className="font-serif text-xl font-bold text-chocolate hover:text-strawberry-dark transition-colors cursor-pointer leading-snug"
          >
            {flavour.name}
          </h3>
          <p className="text-xs text-chocolate/70 mt-1 line-clamp-2 leading-relaxed">
            {flavour.description}
          </p>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-3 border-t border-chocolate/8 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-chocolate/60 block leading-none font-medium">Per scoop</span>
            <span className="text-xl font-extrabold text-chocolate">
              ₹{flavour.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetails(flavour)}
              className="text-xs font-bold text-chocolate/70 hover:text-chocolate px-2.5 py-2 rounded-xl hover:bg-cream transition-colors"
            >
              Customize
            </button>
            <button
              onClick={() => addToCart(flavour, { scoopSize: 'Single', coneType: 'Waffle Cone', quantity: 1 })}
              className="inline-flex items-center gap-1.5 bg-chocolate hover:bg-chocolate-light active:scale-95 text-cream text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-xs transition-all"
              aria-label={`Add ${flavour.name} to cart`}
            >
              <Plus className="w-3.5 h-3.5 text-strawberry" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
