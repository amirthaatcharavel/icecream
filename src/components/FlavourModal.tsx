import React, { useState } from 'react';
import type { Flavour } from '../types';
import { useCart } from '../context/CartContext';
import { X, Star, Plus, Minus, Sparkles } from 'lucide-react';

interface FlavourModalProps {
  flavour: Flavour | null;
  onClose: () => void;
}

export const FlavourModal: React.FC<FlavourModalProps> = ({ flavour, onClose }) => {
  const { addToCart } = useCart();

  const [scoopSize, setScoopSize] = useState<'Single' | 'Double' | 'Tasting Flight'>('Single');
  const [coneType, setConeType] = useState<'Waffle Cone' | 'Cup' | 'Chocolate Dipped Cone'>('Waffle Cone');
  const [quantity, setQuantity] = useState(1);

  if (!flavour) return null;

  // Calculate customized price
  let unitPrice = flavour.price;
  if (scoopSize === 'Double') unitPrice = Math.round(flavour.price * 1.75);
  if (scoopSize === 'Tasting Flight') unitPrice = Math.round(flavour.price * 2.1);
  if (coneType === 'Chocolate Dipped Cone') unitPrice += 30;

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(flavour, { scoopSize, coneType, quantity });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-chocolate/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border-4 border-white overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-chocolate shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Flavour Image Column */}
        <div className="md:w-1/2 relative bg-cream-dark aspect-square md:aspect-auto">
          <img
            src={flavour.image}
            alt={flavour.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          {flavour.badge && (
            <span className="absolute top-4 left-4 text-xs font-black uppercase tracking-wider bg-strawberry text-chocolate px-3 py-1 rounded-full shadow-md">
              {flavour.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-chocolate flex items-center gap-1.5 shadow-md">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{flavour.rating}</span>
            <span className="text-chocolate/60">({flavour.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Customization Details Column */}
        <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between space-y-5 overflow-y-auto max-h-[85vh] md:max-h-none">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/60">
                {flavour.category} • {flavour.calories}
              </span>
              <h3 className="font-serif text-2xl font-black text-chocolate mt-0.5">
                {flavour.name}
              </h3>
              <p className="text-xs text-chocolate/75 mt-1 leading-relaxed">
                {flavour.description}
              </p>
            </div>

            {/* Tasting Notes */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-chocolate/70 mb-1.5">
                Tasting Notes
              </p>
              <div className="flex flex-wrap gap-1.5">
                {flavour.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="text-[11px] font-medium bg-cream px-2.5 py-1 rounded-lg border border-chocolate/8 text-chocolate"
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Scoop Size Option */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-chocolate/70 block mb-1.5">
                Select Scoop Portion
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Single', label: 'Single', desc: '1 Scoop' },
                  { id: 'Double', label: 'Double', desc: '2 Scoops' },
                  { id: 'Tasting Flight', label: 'Flight', desc: '3 Mini' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScoopSize(s.id as any)}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      scoopSize === s.id
                        ? 'border-chocolate bg-cream text-chocolate font-bold shadow-xs'
                        : 'border-chocolate/10 text-chocolate/70 hover:bg-cream-light font-medium'
                    }`}
                  >
                    <span className="text-xs block">{s.label}</span>
                    <span className="text-[10px] text-chocolate/50">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Serving Style */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-chocolate/70 block mb-1.5">
                Choose Cone / Cup
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Waffle Cone', label: 'Waffle Cone', extra: 'Included' },
                  { id: 'Cup', label: 'Classic Cup', extra: 'Included' },
                  { id: 'Chocolate Dipped Cone', label: 'Choco Cone', extra: '+₹30' },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setConeType(c.id as any)}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      coneType === c.id
                        ? 'border-chocolate bg-cream text-chocolate font-bold shadow-xs'
                        : 'border-chocolate/10 text-chocolate/70 hover:bg-cream-light font-medium'
                    }`}
                  >
                    <span className="text-xs block leading-tight">{c.label}</span>
                    <span className="text-[9px] text-chocolate/60">{c.extra}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Ingredients */}
            <div className="pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-chocolate/50 mb-1">
                Ingredients
              </p>
              <p className="text-[11px] text-chocolate/70">
                {flavour.ingredients.join(', ')}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-chocolate/10 space-y-3">
            <div className="flex items-center justify-between">
              {/* Quantity Selector */}
              <div className="flex items-center gap-2 bg-cream rounded-xl border border-chocolate/10 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-chocolate hover:bg-cream-dark transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-black text-chocolate w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-chocolate hover:bg-cream-dark transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <span className="text-[10px] text-chocolate/60 block text-right">Total</span>
                <span className="text-xl font-black text-chocolate">₹{totalPrice}</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 rounded-2xl bg-chocolate hover:bg-chocolate-light active:scale-98 text-cream font-bold text-xs shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4 text-strawberry" />
              <span>Add to Cart • ₹{totalPrice}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
