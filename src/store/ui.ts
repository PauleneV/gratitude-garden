import { create } from 'zustand';

interface UiStore {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  isAnimating: boolean;
  showConfetti: boolean;

  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setIsAnimating: (animating: boolean) => void;
  setShowConfetti: (show: boolean) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  sidebarOpen: false,
  theme: 'light',
  isAnimating: false,
  showConfetti: false,

  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setIsAnimating: (animating) => set({ isAnimating: animating }),
  setShowConfetti: (show) => set({ showConfetti: show }),
}));
