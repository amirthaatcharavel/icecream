import { useState, useEffect } from 'react';
import type { PageView, Flavour } from './types';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FlavoursPage } from './pages/FlavoursPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { FlavourModal } from './components/FlavourModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { ArrowUp } from 'lucide-react';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-chocolate selection:bg-strawberry/40 selection:text-chocolate font-sans">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-strawberry via-vanilla to-pistachio py-1.5 px-4 text-center text-[11px] sm:text-xs font-bold text-chocolate border-b border-chocolate/10 tracking-wide">
        <span>✨ Welcome to Pondicherry’s favorite gelateria! Free delivery on orders over ₹399</span>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
      />

      {/* Main Dynamic Page View */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDetails={setSelectedFlavour}
          />
        )}

        {currentPage === 'flavours' && (
          <FlavoursPage
            onOpenDetails={setSelectedFlavour}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </div>

      {/* Global Interactive Overlays */}
      <CartDrawer onNavigate={handleNavigate} />
      <FlavourModal
        flavour={selectedFlavour}
        onClose={() => setSelectedFlavour(null)}
      />
      <CheckoutModal />
      <Toast />

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/90 hover:bg-white text-chocolate shadow-xl border border-chocolate/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5 text-chocolate" />
        </button>
      )}

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
