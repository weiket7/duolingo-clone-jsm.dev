export type LanguageCode = "es" | "fr" | "ja" | "de" | "pt";

export interface Language {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  totalLearners: string;
}

export type ActivityType =
  | "multiple_choice"
  | "translation"
  | "fill_blank"
  | "match_pairs"
  | "listen_select";

export type LessonType = "vocabulary" | "grammar" | "conversation" | "audio";

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
}

export interface Phrase {
  phrase: string;
  translation: string;
  context?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  question: string;
  correctAnswer: string;
  options?: string[];
  hint?: string;
}

export interface LessonGoal {
  description: string;
}

export interface AITeacherPrompt {
  topic: string;
  systemPrompt: string;
  introMessage: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: LanguageCode;
  title: string;
  description: string;
  type: LessonType;
  xpReward: number;
  durationMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageId: LanguageCode;
  title: string;
  description: string;
  order: number;
  color: string;
  icon: string;
  lessonIds: string[];
}
