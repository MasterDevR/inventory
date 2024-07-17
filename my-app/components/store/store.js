import { create } from "zustand";

const useStore = create((set) => ({
  showSidebar: true,
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));

export default useStore;
