import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import type { GalleryItem, PageView } from '../types';
import { Heart, X } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';

interface GalleryPageProps {
  onNavigate: (page: PageView) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate: _onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [likesState, setLikesState] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Gelato Art', 'Shop Vibes', 'Cones & Cups', 'Sweet Moments'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!hasLiked[id]) {
      setHasLiked((prev) => ({ ...prev, [id]: true }));
      setLikesState((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    } else {
      setHasLiked((prev) => ({ ...prev, [id]: false }));
      setLikesState((prev) => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-strawberry-light text-chocolate text-xs font-bold uppercase tracking-wider border border-strawberry/40">
            <InstagramIcon className="w-3.5 h-3.5 text-strawberry-dark" />
            <span>Visual Journal</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-chocolate tracking-tight">
            Our Instagram Gallery
          </h1>

          <p className="text-base sm:text-lg text-chocolate/80 max-w-xl mx-auto leading-relaxed">
            Fresh colours, creamy swirls, and joyful moments captured in our sunlit White Town parlour.
            Tag your captures with <strong className="text-chocolate">#ScoopAndSwirl</strong>.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-chocolate text-cream shadow-xs'
                    : 'bg-cream-dark text-chocolate/75 hover:bg-cream hover:text-chocolate'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const currentLikes = item.likes + (likesState[item.id] || 0);
            const userLiked = !!hasLiked[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-chocolate/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-cream-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-chocolate uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => handleLike(e, item.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md shadow-sm transition-all ${
                      userLiked
                        ? 'bg-strawberry text-chocolate scale-110'
                        : 'bg-white/80 hover:bg-white text-chocolate'
                    }`}
                    aria-label="Like photo"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        userLiked ? 'fill-chocolate text-chocolate' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Caption Strip */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-base text-chocolate leading-snug group-hover:text-strawberry-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-chocolate/70 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-chocolate/8 flex items-center justify-between text-[11px] font-semibold text-chocolate/60">
                    <span className="flex items-center gap-1 text-chocolate">
                      <Heart className="w-3 h-3 fill-strawberry text-strawberry" />
                      {currentLikes} likes
                    </span>
                    <span className="text-strawberry-dark hover:underline">View photo →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-chocolate/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border-4 border-white flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-chocolate shadow-md"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-3/5 aspect-square bg-cream-dark">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:w-2/5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-chocolate bg-cream-dark px-2.5 py-1 rounded-md">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-black text-chocolate">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-chocolate/80 mt-3 leading-relaxed">
                    {selectedImage.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-chocolate/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => handleLike(e, selectedImage.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-chocolate hover:text-strawberry-dark transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          hasLiked[selectedImage.id] ? 'fill-chocolate text-chocolate' : ''
                        }`}
                      />
                      <span>
                        {selectedImage.likes + (likesState[selectedImage.id] || 0)} Likes
                      </span>
                    </button>
                    <span className="text-[11px] text-chocolate/50">Rue Suffren, Pondicherry</span>
                  </div>

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-2.5 rounded-xl bg-chocolate text-cream font-bold text-xs hover:bg-chocolate-light transition-colors"
                  >
                    Close Photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
