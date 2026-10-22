import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, AlertCircle, ShoppingBag, Clock, Sparkles } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, items, total, clearCart } = useCart();

  const [orderType, setOrderType] = useState<'takeaway' | 'dinein' | 'delivery'>('takeaway');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    addressOrTable: '',
    paymentMethod: 'upi',
    instructions: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeId = `SWIRL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(fakeId);
    setIsSubmitted(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-chocolate/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border-4 border-white overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-cream border-b border-chocolate/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🍨</span>
            <div>
              <h3 className="font-serif font-black text-xl text-chocolate">
                {isSubmitted ? 'Order Confirmed!' : 'Express Checkout (Demo)'}
              </h3>
              <p className="text-xs text-chocolate/60">SCOOP & SWIRL Artisanal Gelateria</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-cream-dark text-chocolate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-vanilla-light px-6 py-2.5 border-b border-vanilla/50 flex items-center gap-2 text-xs text-chocolate">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demo Checkout Mode:</strong> No real money or card transaction is charged.
          </span>
        </div>

        {isSubmitted ? (
          /* Order Confirmed State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-pistachio-light mx-auto flex items-center justify-center text-pistachio-dark shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pistachio-dark block">
                Order Received
              </span>
              <h4 className="font-serif font-black text-2xl text-chocolate mt-1">
                Your scoops are being crafted!
              </h4>
              <p className="text-xs text-chocolate/70 mt-1">
                Order Reference: <strong className="text-chocolate font-mono">{orderId}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cream border border-chocolate/8 text-left space-y-2 text-xs text-chocolate">
              <div className="flex items-center justify-between">
                <span className="text-chocolate/60">Estimated Prep Time:</span>
                <span className="font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-strawberry-dark" /> 10–15 Minutes
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-chocolate/60">Customer:</span>
                <span className="font-bold">{formData.name || 'Valued Guest'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-chocolate/60">Fulfilment Type:</span>
                <span className="font-bold capitalize">{orderType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-chocolate/60">Location:</span>
                <span className="font-bold">14 Rue Suffren, White Town</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-2xl bg-chocolate text-cream font-bold text-xs hover:bg-chocolate-light transition-colors"
              >
                Back to Gelateria Home
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Order Type Toggle */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-cream-dark rounded-2xl">
              {(['takeaway', 'dinein', 'delivery'] as const).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                    orderType === type
                      ? 'bg-chocolate text-cream shadow-xs'
                      : 'text-chocolate/70 hover:text-chocolate'
                  }`}
                >
                  {type === 'dinein' ? 'Dine In' : type}
                </button>
              ))}
            </div>

            {/* Input fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-chocolate mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Iyer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-chocolate/20 text-xs text-chocolate focus:outline-none focus:border-chocolate"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-chocolate mb-1">
                  Phone Number (for order notifications) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-chocolate/20 text-xs text-chocolate focus:outline-none focus:border-chocolate"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-chocolate mb-1">
                  {orderType === 'dinein'
                    ? 'Table Number or Seating Area'
                    : orderType === 'delivery'
                    ? 'Delivery Address in White Town / Puducherry *'
                    : 'Pickup Notes (Optional)'}
                </label>
                <input
                  type="text"
                  required={orderType === 'delivery'}
                  placeholder={
                    orderType === 'dinein'
                      ? 'e.g. Verandah Table 4'
                      : orderType === 'delivery'
                      ? 'e.g. 28 Rue Dumas, White Town'
                      : 'e.g. Picking up in 20 minutes'
                  }
                  value={formData.addressOrTable}
                  onChange={(e) =>
                    setFormData({ ...formData, addressOrTable: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-chocolate/20 text-xs text-chocolate focus:outline-none focus:border-chocolate"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-chocolate mb-1.5">
                  Payment Method (Demo)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'upi', label: '📱 UPI (GPay/PhonePe)' },
                    { id: 'card', label: '💳 Card' },
                    { id: 'cash', label: '💵 At Counter' },
                  ].map((method) => (
                    <button
                      type="button"
                      key={method.id}
                      onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                      className={`p-2.5 rounded-xl border text-[11px] font-bold text-center transition-all ${
                        formData.paymentMethod === method.id
                          ? 'border-chocolate bg-cream text-chocolate'
                          : 'border-chocolate/10 text-chocolate/70 hover:bg-cream-light'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary Line */}
            <div className="p-3.5 bg-cream rounded-2xl flex items-center justify-between text-xs font-semibold text-chocolate">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-chocolate/70" />
                <span>Total to pay ({items.length} items)</span>
              </span>
              <span className="font-black text-sm text-chocolate">₹{total}</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-chocolate hover:bg-chocolate-light active:scale-98 text-cream font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4 text-strawberry" />
              <span>Confirm Demo Order (₹{total})</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
