import { create } from "zustand";


export interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  category: string;
  description: string;
}

interface ProductModalState {
  isOpen: boolean;
  product: Product | null;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

export const useProductModalStore = create<ProductModalState>((set) => ({
  isOpen: false,
  product: null,
  openModal: (product) => set({ isOpen: true, product }),
  closeModal: () => set({ isOpen: false, product: null }),
}));
