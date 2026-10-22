import React from 'react';
import type { PageView, Flavour } from '../types';
import { Hero } from '../components/Hero';
import { FeaturedFlavours } from '../components/FeaturedFlavours';
import { BrandStory } from '../components/BrandStory';
import { Bestsellers } from '../components/Bestsellers';
import { GallerySection } from '../components/GallerySection';
import { ReviewsSection } from '../components/ReviewsSection';
import { LocationSection } from '../components/LocationSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenDetails: (flavour: Flavour) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDetails }) => {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <FeaturedFlavours onOpenDetails={onOpenDetails} onNavigate={onNavigate} />
      <BrandStory onNavigate={onNavigate} />
      <Bestsellers onOpenDetails={onOpenDetails} onNavigate={onNavigate} />
      <GallerySection onNavigate={onNavigate} />
      <ReviewsSection />
      <LocationSection />
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
};
