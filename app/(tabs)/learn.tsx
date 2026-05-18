import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, ScrollView } from "@/components/tw";
import { images } from "@/constants/images";
import { lessons } from "@/data/lessons";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import type { Lesson } from "@/types/learning";

type Tab = "lessons" | "practice";

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("lessons");
  const { selectedLanguage } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();

  const langId = selectedLanguage?.id ?? "es";
  const langUnits = units
    .filter((u) => u.languageId === langId)
    .sort((a, b) => a.order - b.order);

  // Flatten all lessons for this language, in unit order
  const allLessons: Lesson[] = langUnits.flatMap((u) =>
    u.lessonIds.map((id) => lessons.find((l) => l.id === id)).filter((l): l is Lesson => !!l)
  );

  // Current unit = first unit with incomplete lessons (or first unit)
  const currentUnit =
    langUnits.find((u) =>
      u.lessonIds.some((id) => !completedLessonIds.includes(id))
    ) ?? langUnits[0];

  const currentUnitIndex = langUnits.findIndex((u) => u.id === currentUnit?.id);
  const completedInUnit = currentUnit
    ? currentUnit.lessonIds.filter((id) => completedLessonIds.includes(id)).length
    : 0;
  const totalInUnit = currentUnit?.lessonIds.length ?? 0;

  // Index of the first non-completed lesson (= "in progress")
  const inProgressIndex = allLessons.findIndex((l) => !completedLessonIds.includes(l.id));

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ── Hero banner ── */}
      <View style={styles.heroBanner}>
        <Image source={images.palace} style={styles.heroPalace} resizeMode="contain" />
        <Image source={images.mascotWelcome} style={styles.heroMascot} resizeMode="contain" />
        <Pressable style={styles.bookmarkBtn}>
          <Ionicons name="bookmark-outline" size={22} color="#6B7280" />
        </Pressable>
      </View>

      {/* ── Unit title ── */}
      <View className="px-5 pt-4 pb-1">
        <Text className="text-[22px] font-poppins-bold text-text-primary">
          {currentUnit?.title ?? "Lessons"}
        </Text>
        <Text className="text-[13px] font-poppins text-text-secondary mt-[2px]">
          Unit {currentUnitIndex + 1} · {completedInUnit} / {totalInUnit} lessons
        </Text>
      </View>

      {/* ── Tabs ── */}
      <View style={styles.tabRow}>
        <Pressable
          style={styles.tabItem}
          onPress={() => setActiveTab("lessons")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "lessons" && styles.tabTextActive,
            ]}
          >
            Lessons
          </Text>
          {activeTab === "lessons" && <View style={styles.tabUnderline} />}
        </Pressable>
        <Pressable
          style={styles.tabItem}
          onPress={() => setActiveTab("practice")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "practice" && styles.tabTextActive,
            ]}
          >
            Practice
          </Text>
          {activeTab === "practice" && <View style={styles.tabUnderline} />}
        </Pressable>
      </View>

      {/* ── Content ── */}
      {activeTab === "lessons" ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-6">
          {allLessons.map((lesson, index) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            const isInProgress = index === inProgressIndex;
            const isLocked = !isCompleted && !isInProgress;
            const lessonNumber = index + 1;
            const activitiesCount = lesson.activities.length;

            return (
              <LessonRow
                key={lesson.id}
                lesson={lesson}
                lessonNumber={lessonNumber}
                isCompleted={isCompleted}
                isInProgress={isInProgress}
                isLocked={isLocked}
                activitiesCount={activitiesCount}
                isLast={index === allLessons.length - 1}
              />
            );
          })}

          {allLessons.length === 0 && (
            <View className="items-center justify-center py-16 px-8">
              <Text style={styles.emptyEmoji}>📚</Text>
              <Text className="text-[17px] font-poppins-bold text-text-primary text-center mt-4">
                No lessons yet
              </Text>
              <Text className="text-sm font-poppins text-text-secondary text-center mt-2">
                Lessons for {selectedLanguage?.name} are coming soon!
              </Text>
            </View>
          )}
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center px-8">
          <Text style={styles.emptyEmoji}>🎯</Text>
          <Text className="text-[17px] font-poppins-bold text-text-primary text-center mt-4">
            Practice coming soon
          </Text>
          <Text className="text-sm font-poppins text-text-secondary text-center mt-2">
            Review and reinforce your learning with practice exercises.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

type LessonRowProps = {
  lesson: Lesson;
  lessonNumber: number;
  isCompleted: boolean;
  isInProgress: boolean;
  isLocked: boolean;
  activitiesCount: number;
  isLast: boolean;
};

function LessonRow({
  lesson,
  lessonNumber,
  isCompleted,
  isInProgress,
  isLocked,
  activitiesCount,
  isLast,
}: LessonRowProps) {
  return (
    <Pressable
      style={[
        styles.lessonRow,
        isInProgress && styles.lessonRowInProgress,
        !isLast && styles.lessonRowBorder,
      ]}
    >
      {/* Left: lesson info */}
      <View className="flex-1">
        <Text style={styles.lessonNumberText}>Lesson {lessonNumber}</Text>
        <Text
          style={[
            styles.lessonTitle,
            isLocked && styles.lessonTitleLocked,
          ]}
          numberOfLines={1}
        >
          {lesson.title}
        </Text>
        {isInProgress && (
          <Text style={styles.inProgressLabel}>In progress</Text>
        )}
        {isLocked && (
          <Text style={styles.activitiesLabel}>
            {activitiesCount} activities
          </Text>
        )}
      </View>

      {/* Right: status icon */}
      {isCompleted && (
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      )}

      {isInProgress && (
        <View style={styles.inProgressIconCircle}>
          <Ionicons name="play" size={14} color="#6C4EF5" />
        </View>
      )}

      {isLocked && (
        <View style={styles.lockCircle}>
          <Ionicons name="lock-closed" size={14} color="#9CA3AF" />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },

  // Hero banner
  heroBanner: {
    height: 160,
    backgroundColor: "#FFF4E0",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  heroPalace: {
    position: "absolute",
    right: -10,
    bottom: 0,
    width: 200,
    height: 160,
  },
  heroMascot: {
    position: "absolute",
    left: 20,
    bottom: 0,
    width: 110,
    height: 130,
  },
  bookmarkBtn: {
    position: "absolute",
    top: 12,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },

  // Tabs
  tabRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginTop: 12,
  },
  tabItem: {
    marginRight: 28,
    paddingBottom: 10,
    position: "relative",
  },
  tabText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#9CA3AF",
  },
  tabTextActive: {
    color: "#6C4EF5",
  },
  tabUnderline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#6C4EF5",
    borderRadius: 1,
  },

  // Lesson rows
  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    gap: 12,
  },
  lessonRowInProgress: {
    backgroundColor: "#F5F3FF",
  },
  lessonRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  lessonNumberText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  lessonTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#0D132B",
  },
  lessonTitleLocked: {
    color: "#6B7280",
  },
  inProgressLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    color: "#6C4EF5",
    marginTop: 2,
  },
  activitiesLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 2,
  },

  // Status icons
  checkCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#58CC02",
    alignItems: "center",
    justifyContent: "center",
  },
  inProgressIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
  },
  lockCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  emptyEmoji: { fontSize: 52 },
});
