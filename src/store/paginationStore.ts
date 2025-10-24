import { create } from "zustand";

interface PaginationState {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  page: 1,
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: Math.max(1, state.page - 1) })),
  setPage: (page) => set({ page }),
}));
