import { create } from "zustand";

const useStore = create((set) => ({
      isDark : false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}))

export default useStore;