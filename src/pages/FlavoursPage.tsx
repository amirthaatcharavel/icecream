import React, { useState, useMemo } from 'react';
import { FLAVOURS } from '../data/flavours';
import type { Category, Flavour, PageView } from '../types';
import { FlavourCard } from '../components/FlavourCard';
import { Search, Sparkles, Filter, ArrowUpDown } from 'lucide-react';

interface FlavoursPageProps {
  onOpenDetails: (flavour: Flavour) => void;
  onNavigate: (page: PageView) => void;
}

export const FlavoursPage: React.FC<FlavoursPageProps> = ({ onOpenDetails, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: Category[] = [
    'All',
    'Fruit Sorbets',
    'Rich Chocolate',
    'Classic Creams',
    'Nuts & Caramel',
    'Vegan',
  ];

  const dietaryOptions = ['All', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];

  const filteredFlavours = useMemo(() => {
    return FLAVOURS.filter((flavour) => {
      // Category match
      const matchCategory =
        selectedCategory === 'All' ||
        flavour.category === selectedCategory ||
        (selectedCategory === 'Vegan' && flavour.dietary.includes('Vegan'));

      // Dietary match
      const matchDietary =
        dietaryFilter === 'All' || flavour.dietary.includes(dietaryFilter as any);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        flavour.name.toLowerCase().includes(query) ||
        flavour.description.toLowerCase().includes(query) ||
        flavour.tastingNotes.some((t) => t.toLowerCase().includes(query)) ||
        flavour.ingredients.some((i) => i.toLowerCase().includes(query));

      return matchCategory && matchDietary && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-strawberry-light text-chocolate text-xs font-bold uppercase tracking-wider border border-strawberry/40">
            <Sparkles className="w-3.5 h-3.5 text-strawberry-dark" />
            <span>The Daily Churn</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-chocolate tracking-tight">
            Our Artisanal Flavours
          </h1>

          <p className="text-base sm:text-lg text-chocolate/75 leading-relaxed">
            Every scoop is handcrafted in small batches using whole organic milk, rich cocoa,
            fresh coastal coconuts, and ripe regional fruits. Pick your favourites or mix and match!
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-white rounded-3xl p-6 border border-chocolate/8 shadow-sm mb-12 space-y-5">
          {/* Top row: Search input & sorting */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-chocolate/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search flavours, ingredients, or tasting notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-cream-light border border-chocolate/10 text-xs text-chocolate placeholder-chocolate/50 focus:outline-none focus:border-chocolate"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-chocolate/40 hover:text-chocolate text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort & Dietary Dropdown */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="flex items-center gap-1.5 text-xs text-chocolate/70">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span className="font-semibold hidden sm:inline">Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort flavours"
                className="bg-cream-light border border-chocolate/10 text-xs font-semibold text-chocolate rounded-xl px-3 py-2 focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-chocolate text-cream shadow-xs'
                    : 'bg-cream-light text-chocolate/75 hover:bg-cream-dark hover:text-chocolate'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dietary Filter Chips */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-chocolate/5 text-xs">
            <span className="font-bold text-chocolate/60 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Dietary:
            </span>
            {dietaryOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setDietaryFilter(opt)}
                className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                  dietaryFilter === opt
                    ? 'bg-pistachio text-chocolate font-bold'
                    : 'bg-cream text-chocolate/70 hover:bg-cream-dark'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Flavours Count & Active Filter Indicator */}
        <div className="flex items-center justify-between mb-8 text-xs font-semibold text-chocolate/60">
          <span>
            Showing <strong className="text-chocolate">{filteredFlavours.length}</strong> delicious {filteredFlavours.length === 1 ? 'flavour' : 'flavours'}
          </span>
          {(selectedCategory !== 'All' || dietaryFilter !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setDietaryFilter('All');
                setSearchQuery('');
              }}
              className="text-strawberry-dark hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Flavour Grid */}
        {filteredFlavours.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-chocolate/10 p-8 space-y-4">
            <span className="text-4xl block">🔍</span>
            <h3 className="font-serif font-black text-xl text-chocolate">
              No flavours match your search
            </h3>
            <p className="text-xs text-chocolate/70 max-w-sm mx-auto">
              Try adjusting your category or dietary filter to explore other fresh gelato options.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setDietaryFilter('All');
                setSearchQuery('');
              }}
              className="bg-chocolate text-cream text-xs font-bold px-6 py-2.5 rounded-full hover:bg-chocolate-light transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredFlavours.map((flavour) => (
              <FlavourCard
                key={flavour.id}
                flavour={flavour}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        )}

        {/* Tasting Flight Promo Banner */}
        <div className="mt-16 bg-gradient-to-r from-strawberry-light via-cream-light to-vanilla-light p-8 md:p-10 rounded-3xl border border-chocolate/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-strawberry-dark">
              Can't Decide on Just One?
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-chocolate">
              Try Our Signature Tasting Flight
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 max-w-md">
              Choose any 3 mini scoops served in a tasting flight board with waffle cone crisps
              and seasonal fruit compote for just ₹249.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-chocolate text-cream font-bold text-xs px-8 py-4 rounded-full hover:bg-chocolate-light transition-all shadow-md shrink-0"
          >
            Visit Our Parlour to Taste
          </button>
        </div>
      </div>
    </div>
  );
};
