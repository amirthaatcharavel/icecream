import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Flavour } from '../types';

interface AddToCartOptions {
  scoopSize?: 'Single' | 'Double' | 'Tasting Flight';
  coneType?: 'Waffle Cone' | 'Cup' | 'Chocolate Dipped Cone';
  quantity?: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (flavour: Flavour, options?: AddToCartOptions) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  toast: string | null;
  showToast: (msg: string) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'scoop_and_swirl_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (flavour: Flavour, options?: AddToCartOptions) => {
    const scoopSize = options?.scoopSize || 'Single';
    const coneType = options?.coneType || 'Waffle Cone';
    const qtyToAdd = options?.quantity || 1;

    // Price adjustments
    let unitPrice = flavour.price;
    if (scoopSize === 'Double') unitPrice = Math.round(flavour.price * 1.75);
    if (scoopSize === 'Tasting Flight') unitPrice = Math.round(flavour.price * 2.1);
    if (coneType === 'Chocolate Dipped Cone') unitPrice += 30;

    const cartItemId = `${flavour.id}-${scoopSize}-${coneType}`;

    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === cartItemId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            flavourId: flavour.id,
            name: flavour.name,
            price: unitPrice,
            quantity: qtyToAdd,
            image: flavour.image,
            scoopSize,
            coneType,
          },
        ];
      }
    });

    showToast(`Added ${qtyToAdd}x ${flavour.name} (${scoopSize}) to cart! 🍦`);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const deliveryFee = subtotal > 399 || subtotal === 0 ? 0 : 49; // Free above ₹399
  const total = subtotal + tax + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        tax,
        deliveryFee,
        total,
        toast,
        showToast,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
