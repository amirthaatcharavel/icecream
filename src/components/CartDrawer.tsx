import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import type { PageView } from '../types';

interface CartDrawerProps {
  onNavigate: (page: PageView) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigate }) => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    deliveryFee,
    total,
    totalItems,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 400;
  const amountNeeded = Math.max(0, freeDeliveryThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-chocolate/50 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream shadow-2xl flex flex-col justify-between border-l border-chocolate/10 animate-slide-left">
          {/* Cart Header */}
          <div className="p-6 border-b border-chocolate/10 bg-white/70 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-strawberry-light flex items-center justify-center text-chocolate">
                <ShoppingBag className="w-5 h-5 text-strawberry-dark" />
              </div>
              <div>
                <h3 className="font-serif font-black text-xl text-chocolate">
                  Your Sweet Cart
                </h3>
                <span className="text-xs font-semibold text-chocolate/60">
                  {totalItems} {totalItems === 1 ? 'scoop' : 'scoops'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-chocolate/50 hover:text-red-500 font-medium px-2 py-1 transition-colors"
                  title="Clear entire cart"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-cream-dark text-chocolate transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Perk Progress Bar */}
          {items.length > 0 && (
            <div className="bg-vanilla-light/60 px-6 py-3 border-b border-vanilla/40 text-xs">
              {amountNeeded > 0 ? (
                <p className="text-chocolate font-medium mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>
                    Add <strong>₹{amountNeeded}</strong> more for <strong>Free Express Delivery!</strong>
                  </span>
                </p>
              ) : (
                <p className="text-pistachio-dark font-bold mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pistachio-dark" />
                  <span>🎉 You’ve unlocked <strong>Free Delivery!</strong></span>
                </p>
              )}
              <div className="w-full bg-cream rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-strawberry-dark h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-cream-dark flex items-center justify-center text-4xl shadow-inner">
                  🍦
                </div>
                <div>
                  <h4 className="font-serif font-black text-xl text-chocolate">
                    Your cart is craving a scoop!
                  </h4>
                  <p className="text-xs text-chocolate/70 max-w-xs mt-1">
                    Explore our artisanal flavours made with fresh milk, roasted nuts, and ripe berries.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigate('flavours');
                  }}
                  className="inline-flex items-center gap-2 bg-chocolate text-cream font-bold text-xs px-6 py-3 rounded-full hover:bg-chocolate-light transition-all shadow-md"
                >
                  <span>Explore Our Flavours</span>
                  <ArrowRight className="w-4 h-4 text-strawberry" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-chocolate/8 shadow-xs items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-chocolate/10 bg-cream-dark shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-chocolate truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-chocolate/60">
                      {item.scoopSize} • {item.coneType}
                    </p>
                    <p className="text-xs font-black text-chocolate mt-0.5">
                      ₹{item.price} each
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-1.5 bg-cream-light rounded-xl border border-chocolate/10 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-chocolate hover:bg-strawberry-light transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-black text-chocolate w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-chocolate hover:bg-strawberry-light transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-chocolate/40 hover:text-red-500 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer / Totals & Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 bg-white/90 backdrop-blur-md border-t border-chocolate/10 space-y-3">
              <div className="space-y-1.5 text-xs text-chocolate/75">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-chocolate">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span className="font-semibold text-chocolate">₹{tax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery / Packaging</span>
                  <span className="font-semibold text-chocolate">
                    {deliveryFee === 0 ? (
                      <span className="text-pistachio-dark font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-chocolate/10 flex justify-between text-base font-black text-chocolate">
                  <span>Total Amount</span>
                  <span className="font-serif text-lg text-chocolate">₹{total}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-chocolate hover:bg-chocolate-light active:scale-98 text-cream font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
              >
                <span>Proceed to Checkout</span>
                <span className="text-strawberry font-black">• ₹{total}</span>
                <ArrowRight className="w-4 h-4 text-strawberry" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-chocolate/50 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pistachio-dark" />
                <span>Small batch fresh guarantee • 100% natural ingredients</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
