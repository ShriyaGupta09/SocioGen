import { create } from "zustand";

interface AppStore {}

const useStore = create<AppStore>((set) => ({}));

export { useStore, type AppStore };
