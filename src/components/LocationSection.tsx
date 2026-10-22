import React from 'react';
import { MapPin, Clock, Phone, Navigation, ArrowUpRight, ShieldAlert } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Store Info Details */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pistachio-light text-chocolate text-xs font-bold uppercase tracking-wider border border-pistachio/40">
              <MapPin className="w-3.5 h-3.5 text-pistachio-dark" />
              <span>Visit Our Boutique Gelateria</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-chocolate tracking-tight">
              A Warm Welcome on Rue Suffren
            </h2>

            <p className="text-base text-chocolate/80 leading-relaxed">
              Step off the tree-lined boulevard of White Town into our pastel sanctuary.
              Savour a fresh waffle cone inside our air-conditioned parlour or relax on the sunlit verandah.
            </p>

            {/* Address & Hours Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-chocolate/8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-strawberry-light flex items-center justify-center text-strawberry-dark shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-chocolate">Store Location</h4>
                  <p className="text-xs text-chocolate/80 mt-0.5 font-medium">
                    14 Rue Suffren, White Town, Puducherry 605001, India
                  </p>
                  <span className="text-[10px] text-chocolate/50 italic">
                    (Sample boutique address placeholder)
                  </span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-chocolate/8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-vanilla-light flex items-center justify-center text-chocolate shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-chocolate">Opening Hours</h4>
                  <p className="text-xs text-chocolate/80 mt-0.5 font-medium">
                    Monday to Sunday: 11:00 AM – 11:00 PM
                  </p>
                  <p className="text-[11px] text-pistachio-dark font-semibold mt-0.5">
                    ● Open Today for Fresh Scoops & Takeaway
                  </p>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-chocolate/8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-pistachio-light flex items-center justify-center text-pistachio-dark shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-chocolate">Call & Pre-Order</h4>
                  <p className="text-xs text-chocolate/80 mt-0.5 font-medium">
                    +91 98765 43210 / +91 (413) 222-SCOOP
                  </p>
                  <span className="text-[10px] text-chocolate/50 italic">
                    (Sample contact placeholder)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Get Directions & Call Us */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-chocolate text-cream font-bold px-6 py-3.5 rounded-full hover:bg-chocolate-light transition-all shadow-md text-sm"
              >
                <Navigation className="w-4 h-4 text-strawberry" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream/70" />
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-white text-chocolate font-bold px-6 py-3.5 rounded-full border border-chocolate/20 hover:border-chocolate/40 transition-all shadow-xs text-sm"
              >
                <Phone className="w-4 h-4 text-chocolate/70" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Placeholder & Interactive Map Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-dark aspect-4/3 sm:aspect-16/10">
              {/* Stylised Map Placeholder Illustration */}
              <div className="relative w-full h-full bg-[#f3efe6] flex items-center justify-center overflow-hidden">
                {/* SVG Map Grid Background */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4B2E2A" strokeWidth="0.5" strokeOpacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Street Roads illustration */}
                  <path d="M -20 120 Q 200 180 600 140" stroke="#FFE6A7" strokeWidth="24" fill="none" />
                  <path d="M 320 -20 Q 340 220 380 500" stroke="#FFE6A7" strokeWidth="20" fill="none" />
                  <path d="M 120 400 L 500 50" stroke="#FFFFFF" strokeWidth="14" fill="none" />
                  {/* Coastline */}
                  <path d="M 520 -50 Q 560 220 540 600" stroke="#B9D8B0" strokeWidth="48" fill="none" opacity="0.4" />
                </svg>

                {/* Street Markers */}
                <div className="absolute top-12 left-12 text-[11px] font-bold text-chocolate/40 tracking-wider uppercase">
                  Rue Dumas
                </div>
                <div className="absolute bottom-16 left-20 text-[11px] font-bold text-chocolate/40 tracking-wider uppercase">
                  Promenade Beach
                </div>
                <div className="absolute top-20 right-16 text-[11px] font-bold text-chocolate/40 tracking-wider uppercase">
                  Bay of Bengal
                </div>

                {/* Central Pin Card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl border-2 border-strawberry max-w-xs text-center animate-bounce [animation-duration:3s]">
                  <div className="w-12 h-12 rounded-2xl bg-strawberry text-chocolate mx-auto flex items-center justify-center text-2xl shadow-md mb-2">
                    🍦
                  </div>
                  <h4 className="font-serif font-black text-base text-chocolate">SCOOP & SWIRL</h4>
                  <p className="text-xs text-chocolate/75 font-medium mt-0.5">
                    14 Rue Suffren, White Town
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-bold text-pistachio-dark bg-pistachio-light px-3 py-1 rounded-full">
                    <span>Open Now till 11 PM</span>
                  </div>
                </div>

                {/* Map Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-chocolate/90 backdrop-blur-md text-cream p-3 rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-strawberry" />
                    <span>Interactive Map Placeholder • Ready for Google Maps API Key</span>
                  </div>
                  <span className="text-strawberry font-bold">White Town</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
