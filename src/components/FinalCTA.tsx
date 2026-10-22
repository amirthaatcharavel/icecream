import React from 'react';
import type { PageView } from '../types';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (page: PageView) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-r from-strawberry/30 via-vanilla/40 to-pistachio/30 border-t border-chocolate/5">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-strawberry/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-pistachio/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-chocolate text-xs font-black uppercase tracking-wider shadow-xs border border-chocolate/10">
          <Sparkles className="w-4 h-4 text-strawberry-dark" />
          <span>Made Fresh Daily in Pondicherry</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-chocolate tracking-tight leading-tight">
          Your Next Favourite Scoop Is Waiting.
        </h2>

        <p className="text-lg sm:text-xl text-chocolate/80 max-w-xl mx-auto font-normal">
          Drop by for a little sweetness today. Hand-crafted waffle cones, velvety gelato,
          and golden smiles await.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-chocolate hover:bg-chocolate-light text-cream font-extrabold px-9 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-base group"
          >
            <MapPin className="w-5 h-5 text-strawberry" />
            <span>Visit Our Store</span>
            <ArrowRight className="w-4 h-4 text-cream/70 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('flavours')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-cream text-chocolate font-bold px-8 py-4 rounded-full border border-chocolate/20 transition-all text-base shadow-sm"
          >
            <span>Order for Takeaway</span>
          </button>
        </div>
      </div>
    </section>
  );
};
