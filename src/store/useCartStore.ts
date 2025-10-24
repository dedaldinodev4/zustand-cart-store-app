import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addToCart: (item) => {
        const { items } = get();
        const existing = items.find((i) => i.id === item.id);

        let updatedItems;
        if (existing) {
          updatedItems = items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          );
        } else {
          updatedItems = [...items, item];
        }

        const total = updatedItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );

        set({ items: updatedItems, total });
      },

    
      removeFromCart: (id) => {
        const updatedItems = get().items.filter((i) => i.id !== id);
        const total = updatedItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
        set({ items: updatedItems, total });
      },

      increaseQuantity: (id) => {
        const updatedItems = get().items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );
        const total = updatedItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
        set({ items: updatedItems, total });
      },

      decreaseQuantity: (id) => {
        const updatedItems = get().items
          .map((i) =>
            i.id === id ? { ...i, quantity: Math.max(i.quantity - 1, 1) } : i
          )
          .filter((i) => i.quantity > 0);
        const total = updatedItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
        set({ items: updatedItems, total });
      },

      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
);
