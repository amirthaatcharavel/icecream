import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 animate-bounce">
      <div className="flex items-center gap-3 bg-chocolate text-cream px-5 py-3.5 rounded-2xl shadow-2xl border border-cream/20 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-strawberry/30 flex items-center justify-center text-strawberry">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-strawberry">Scoop & Swirl</span>
          <span className="text-sm font-medium">{toast}</span>
        </div>
        <CheckCircle2 className="w-5 h-5 text-pistachio ml-1" />
      </div>
    </div>
  );
};
