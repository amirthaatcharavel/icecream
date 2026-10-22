export type Category = 'All' | 'Fruit Sorbets' | 'Rich Chocolate' | 'Classic Creams' | 'Nuts & Caramel' | 'Vegan';

export interface Flavour {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  price: number; // in INR
  image: string;
  rating: number;
  reviewCount: number;
  badge?: 'Bestseller' | 'Seasonal' | 'New' | 'Chef Choice';
  dietary: ('Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free' | 'Low Sugar')[];
  ingredients: string[];
  tastingNotes: string[];
  calories: string;
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  id: string; // unique cart item id (e.g. flavourId + scoopSize + coneType)
  flavourId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  scoopSize: 'Single' | 'Double' | 'Tasting Flight';
  coneType: 'Waffle Cone' | 'Cup' | 'Chocolate Dipped Cone';
  extraNote?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  favouriteFlavour: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gelato Art' | 'Shop Vibes' | 'Cones & Cups' | 'Sweet Moments';
  image: string;
  likes: number;
  caption: string;
}

export type PageView = 'home' | 'flavours' | 'about' | 'gallery' | 'contact';
