import { create } from "zustand";

interface FrameYoutube {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useFrameIsOpenStore = create<FrameYoutube>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
