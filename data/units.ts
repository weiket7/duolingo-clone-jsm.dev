import { Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-unit-1",
    languageId: "es",
    title: "Greetings & Introductions",
    description: "Learn how to say hello and introduce yourself in Spanish.",
    order: 1,
    color: "#58CC02",
    icon: "👋",
    lessonIds: ["es-u1-l1", "es-u1-l2", "es-u1-l3"],
  },
  {
    id: "es-unit-2",
    languageId: "es",
    title: "Numbers & Time",
    description: "Count to 20 and tell the time in Spanish.",
    order: 2,
    color: "#CE82FF",
    icon: "🔢",
    lessonIds: ["es-u2-l1", "es-u2-l2"],
  },

  // French
  {
    id: "fr-unit-1",
    languageId: "fr",
    title: "Greetings & Introductions",
    description: "Learn how to say hello and introduce yourself in French.",
    order: 1,
    color: "#58CC02",
    icon: "👋",
    lessonIds: ["fr-u1-l1", "fr-u1-l2", "fr-u1-l3"],
  },
  {
    id: "fr-unit-2",
    languageId: "fr",
    title: "Food & Drinks",
    description: "Order food and talk about what you like to eat.",
    order: 2,
    color: "#FF9600",
    icon: "🍽️",
    lessonIds: ["fr-u2-l1", "fr-u2-l2"],
  },

  // Japanese
  {
    id: "ja-unit-1",
    languageId: "ja",
    title: "Greetings & Introductions",
    description: "Learn basic Japanese greetings and polite phrases.",
    order: 1,
    color: "#58CC02",
    icon: "👋",
    lessonIds: ["ja-u1-l1", "ja-u1-l2", "ja-u1-l3"],
  },
  {
    id: "ja-unit-2",
    languageId: "ja",
    title: "Numbers & Counting",
    description: "Learn to count and use numbers in everyday Japanese.",
    order: 2,
    color: "#1CB0F6",
    icon: "🔢",
    lessonIds: ["ja-u2-l1", "ja-u2-l2"],
  },
];
