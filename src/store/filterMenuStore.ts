import { create } from "zustand";

interface MenuFilterState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useFilterMenuIsOpenStore = create<MenuFilterState>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
