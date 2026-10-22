import type { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ananya Sharma',
    location: 'White Town, Puducherry',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    comment: 'The Pistachio Bliss is easily the most authentic gelato I’ve tasted outside of Italy! The natural earthy color, real nut crunch, and delicate sea salt balance are pure perfection. A must-visit whenever we are in White Town.',
    favouriteFlavour: 'Pistachio Bliss'
  },
  {
    id: 'rev-2',
    name: 'Marcus Laurent',
    location: 'Auroville & Paris',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Exceptional texture — dense, silky, and not overly sugary. You can genuinely taste the fresh organic milk and small-batch craftsmanship. The fresh waffle cones made right before your eyes make the whole corner smell heavenly!',
    favouriteFlavour: 'Belgian Chocolate & Mango Sorbet'
  },
  {
    id: 'rev-3',
    name: 'Pooja Venkatesh',
    location: 'Chennai & Puducherry',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Strawberry Dream tastes just like eating chilled, sweetened wild strawberries on a warm summer evening. The boutique store interior is so aesthetically pleasing and the team is so welcoming and warm.',
    favouriteFlavour: 'Strawberry Dream'
  }
];
