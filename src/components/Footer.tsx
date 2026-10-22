import React, { useState } from 'react';
import type { PageView } from '../types';
import { MapPin, Phone, Mail, Clock, Heart, Send } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-chocolate text-cream pt-16 pb-12 border-t border-chocolate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-cream/10">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-strawberry to-vanilla flex items-center justify-center text-chocolate shadow-md">
                <span className="text-xl">🍦</span>
              </div>
              <span className="font-serif text-2xl font-black tracking-tight text-cream">
                SCOOP <span className="text-strawberry">&</span> SWIRL
              </span>
            </div>

            <p className="text-sm text-cream/70 max-w-sm leading-relaxed">
              Handcrafted artisanal gelato, small-batch sorbets, and warm waffle cones.
              Inspired by classic Italian gelaterias, born along the seaside lanes of White Town.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-strawberry mb-2">
                Join The Gelato Club
              </p>
              {subscribed ? (
                <div className="p-3 bg-cream/10 border border-strawberry/30 rounded-2xl text-xs text-strawberry font-bold flex items-center gap-2">
                  <span>🎉 Welcome to the club! Check your inbox for 15% off your first scoop.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-cream/10 text-cream placeholder-cream/50 px-4 py-2.5 rounded-full text-xs border border-cream/20 focus:outline-none focus:border-strawberry transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-strawberry hover:bg-strawberry-hover text-chocolate font-bold px-4 py-2.5 rounded-full text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-wide text-cream">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-strawberry transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('flavours')}
                  className="hover:text-strawberry transition-colors"
                >
                  Our Flavours & Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-strawberry transition-colors"
                >
                  About Our Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-strawberry transition-colors"
                >
                  Instagram Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-strawberry transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-wide text-cream">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-cream/75">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-strawberry shrink-0" />
                <div>
                  <p className="font-bold text-cream">Mon — Sun</p>
                  <p className="text-cream/60">11:00 AM – 11:00 PM</p>
                </div>
              </div>
              <p className="text-[11px] text-pistachio font-medium pt-1">
                Fresh waffle cones baked every hour until close.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-wide text-cream">
              Find Our Boutique
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-strawberry shrink-0 mt-0.5" />
                <span>14 Rue Suffren, White Town, Puducherry 605001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-strawberry shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-strawberry shrink-0" />
                <span>bonjour@scoopandswirl.in</span>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-strawberry hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@scoopandswirl_gelato</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {CURRENT_YEAR} SCOOP & SWIRL. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-center">
            Crafted with <Heart className="w-3.5 h-3.5 text-strawberry fill-strawberry" /> for sweet gelato lovers everywhere.
          </p>

          <p className="text-[11px] text-cream/40">
            Fictional artisan brand created for demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
};
