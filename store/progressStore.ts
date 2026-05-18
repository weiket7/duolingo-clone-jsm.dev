import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProgressState {
  xp: number;
  dailyGoalXP: number;
  streak: number;
  completedLessonIds: string[];
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 15,
      dailyGoalXP: 20,
      streak: 12,
      completedLessonIds: ["es-u1-l1"],
      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),
      completeLesson: (lessonId) =>
        set((s) => ({
          completedLessonIds: s.completedLessonIds.includes(lessonId)
            ? s.completedLessonIds
            : [...s.completedLessonIds, lessonId],
        })),
    }),
    {
      name: "progress-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
