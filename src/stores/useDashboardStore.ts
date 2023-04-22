import { create } from 'zustand';

type UseBooleanReturn = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

type DashState = {
  showNav: boolean;
  collapsible: boolean;
  shrink: boolean;
  setShowNav: UseBooleanReturn;
  setShrink: UseBooleanReturn;
  sidebar: {
    width: number | string;
    logoMargin: number;
  };
};

const useDashboardStore = create<DashState>((set) => {
  const setShowNav: UseBooleanReturn = {
    on: () => set({ showNav: true }),
    off: () => set({ showNav: false }),
    toggle: () => set((state) => ({ showNav: !state.showNav })),
  };

  const setShrink: UseBooleanReturn = {
    on: () => set({ shrink: true }),
    off: () => set({ shrink: false }),
    toggle: () => set((state) => ({ shrink: !state.shrink })),
  };

  const collapsible = true;
  const shrink = collapsible;

  const sidebar = {
    width: shrink ? '18rem' : 20,
    logoMargin: shrink ? 3.5 : 8,
  };

  return {
    showNav: false,
    setShowNav,
    collapsible,
    shrink,
    setShrink,
    sidebar,
  };
});

export default useDashboardStore;
