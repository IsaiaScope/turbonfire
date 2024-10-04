import { create } from "zustand";

type PageTransitionState = {
  isRunning: boolean;
};

type Action = {
  start: () => void;
  stop: () => void;
};

export const usePageTransitionStore = create<PageTransitionState & Action>(
  (set) => ({
    isRunning: false,
    start: () => set(() => ({ isRunning: true })),
    stop: () => set(() => ({ isRunning: false })),
  }),
);