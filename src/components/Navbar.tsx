import React, { useState, useEffect } from 'react';
import type { PageView } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  onOpenLocationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Our Flavours', page: 'flavours' },
    { label: 'About Us', page: 'about' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-chocolate/5 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3 text-left focus:outline-none"
              aria-label="SCOOP & SWIRL Home"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-strawberry to-vanilla flex items-center justify-center text-chocolate shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-xl">🍦</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight text-chocolate block leading-none">
                  SCOOP <span className="text-strawberry-dark">&</span> SWIRL
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-chocolate/60 block mt-1">
                  Artisanal Gelateria
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-chocolate/10 shadow-sm">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-cream bg-chocolate shadow-sm'
                        : 'text-chocolate/80 hover:text-chocolate hover:bg-cream-dark/50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-strawberry rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons: Location hint, Cart, and Order Now */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* White Town Pill */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-chocolate/70 hover:text-chocolate bg-pistachio-light/60 px-3 py-1.5 rounded-full border border-pistachio/40 transition-colors"
                title="Located at White Town, Puducherry"
              >
                <MapPin className="w-3.5 h-3.5 text-pistachio-dark" />
                <span>Pondicherry</span>
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-cream-light hover:bg-cream-dark text-chocolate border border-chocolate/10 shadow-sm transition-all hover:scale-105 focus:outline-none"
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-strawberry-dark text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                onClick={() => handleNavClick('flavours')}
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-strawberry to-strawberry-hover text-chocolate font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all text-sm"
              >
                <Sparkles className="w-4 h-4 text-chocolate/80" />
                <span>Order Now</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-cream-light text-chocolate border border-chocolate/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-chocolate/40 backdrop-blur-sm animate-fade-in">
          <div className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-cream shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-chocolate/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍦</span>
                  <span className="font-serif font-black text-xl text-chocolate">SCOOP & SWIRL</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-cream-dark text-chocolate"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`text-left px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-chocolate text-cream shadow'
                          : 'text-chocolate hover:bg-cream-dark'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-chocolate/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-cream-dark text-chocolate font-bold border border-chocolate/10"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>View Cart ({totalItems} items)</span>
              </button>

              <button
                onClick={() => handleNavClick('flavours')}
                className="w-full py-3.5 rounded-2xl bg-strawberry text-chocolate font-extrabold shadow-md hover:brightness-105"
              >
                Order Fresh Gelato
              </button>

              <p className="text-center text-xs text-chocolate/60">
                14 Rue Suffren, White Town, Puducherry • Open till 11 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
