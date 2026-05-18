import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Language, LanguageCode } from "@/types/learning";
import { languages } from "@/data/languages";

interface LanguageState {
  selectedLanguage: Language | null;
  setLanguage: (id: LanguageCode) => void;
  clearLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      setLanguage: (id) => {
        const lang = languages.find((l) => l.id === id) ?? null;
        set({ selectedLanguage: lang });
      },
      clearLanguage: () => set({ selectedLanguage: null }),
    }),
    {
      name: "language-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
