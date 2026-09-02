import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMoodStore = create(
  persist(
    (set, get) => ({
      entries: [],
      addEntry: (entry) => set({ entries: [...get().entries, entry] }),
      clearEntries: () => set({ entries: [] }),
    }),
    { name: "mood-storage" }
  )
);

export default useMoodStore;
