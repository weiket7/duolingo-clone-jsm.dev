import { Ionicons } from "@expo/vector-icons";

export type PlanItemType = "lesson" | "ai-conversation" | "vocabulary";

export interface PlanItem {
  id: string;
  type: PlanItemType;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  completed: boolean;
}

export const todaysPlan: PlanItem[] = [
  {
    id: "plan-1",
    type: "lesson",
    title: "Lesson",
    subtitle: "At the café",
    icon: "book",
    iconBg: "#EEE9FE",
    completed: true,
  },
  {
    id: "plan-2",
    type: "ai-conversation",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    icon: "headset",
    iconBg: "#EEE9FE",
    completed: false,
  },
  {
    id: "plan-3",
    type: "vocabulary",
    title: "New words",
    subtitle: "10 words",
    icon: "sparkles",
    iconBg: "#EEE9FE",
    completed: false,
  },
];
