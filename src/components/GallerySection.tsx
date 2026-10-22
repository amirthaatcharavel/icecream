import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import type { GalleryItem, PageView } from '../types';
import { Heart, X, Sparkles, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

interface GallerySectionProps {
  onNavigate?: (page: PageView) => void;
  showAll?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onNavigate, showAll = false }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [likesState, setLikesState] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const displayItems = showAll ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 5);

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
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-strawberry-light text-chocolate text-xs font-bold uppercase tracking-wider border border-strawberry/40">
              <InstagramIcon className="w-3.5 h-3.5 text-strawberry-dark" />
              <span>@scoopandswirl_gelato</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-chocolate tracking-tight">
              Life is Sweet in Pondicherry
            </h2>

            <p className="text-base text-chocolate/75 max-w-xl">
              Captured moments of warm sunshine, crispy waffle cones, and spontaneous laughter. Tag us in your sweet scoops!
            </p>
          </div>

          {!showAll && onNavigate && (
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 font-bold text-chocolate hover:text-strawberry-dark transition-colors self-start md:self-end group"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Asymmetrical Instagram-inspired Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[260px] sm:auto-rows-[280px]">
          {displayItems.map((item, index) => {
            // Asymmetrical layout configuration
            let colSpan = 'lg:col-span-4';
            let rowSpan = 'lg:row-span-1';

            if (index === 0) {
              colSpan = 'lg:col-span-5';
              rowSpan = 'lg:row-span-2';
            } else if (index === 1) {
              colSpan = 'lg:col-span-7';
              rowSpan = 'lg:row-span-1';
            } else if (index === 2) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'lg:row-span-1';
            } else if (index === 3) {
              colSpan = 'lg:col-span-3';
              rowSpan = 'lg:row-span-1';
            } else if (index === 4) {
              colSpan = 'lg:col-span-12 sm:col-span-2';
              rowSpan = 'lg:row-span-1';
            }

            const currentLikes = item.likes + (likesState[item.id] || 0);
            const userLiked = !!hasLiked[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-cream-dark border-2 border-white shadow-md hover:shadow-2xl transition-all duration-300 ${colSpan} ${rowSpan}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/85 via-chocolate/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Bar with Category & Heart */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-cream bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      {item.category}
                    </span>

                    <button
                      onClick={(e) => handleLike(e, item.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all ${
                        userLiked
                          ? 'bg-strawberry text-chocolate scale-110'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                      aria-label="Like photo"
                    >
                      <Heart
                        className={`w-4 h-4 ${userLiked ? 'fill-chocolate text-chocolate' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Bottom Caption and Likes */}
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-cream/80 text-xs mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-[11px] font-semibold text-cream/70">
                      <Heart className="w-3 h-3 fill-strawberry text-strawberry" />
                      <span>{currentLikes} likes</span>
                      <span>•</span>
                      <span>Click to view</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram Follow Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-chocolate/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-black text-lg text-chocolate">
                Join our Instagram community @scoopandswirl_gelato
              </p>
              <p className="text-xs text-chocolate/70">
                Share your gelato cone with hashtag <span className="font-bold text-chocolate">#ScoopAndSwirl</span> for a chance to win a free tasting flight!
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-chocolate text-cream font-bold text-xs px-6 py-3 rounded-full hover:bg-chocolate-light transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-strawberry" />
            <span>Follow on Instagram</span>
          </a>
        </div>
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
    </section>
  );
};
