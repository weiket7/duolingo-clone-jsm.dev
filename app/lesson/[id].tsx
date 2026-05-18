import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "@/components/tw";
import { images } from "@/constants/images";
import { lessons } from "@/data/lessons";

const FEEDBACK = [
  { label: "Speaking", value: "Excellent", color: "#21C16B" },
  { label: "Pronunciation", value: "Great", color: "#4D8BFF" },
  { label: "Grammar", value: "Good", color: "#FF9600" },
];

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = lessons.find((l) => l.id === id) ?? lessons[0];

  const [micActive, setMicActive] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);

  // First sentence of the intro message for the speech bubble
  const introSentence =
    lesson.aiTeacherPrompt.introMessage.split(/[.!?]/)[0].trim() + "!";

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#0D132B" />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Pressable style={styles.headerIconBtn}>
            <Ionicons name="videocam-outline" size={18} color="#6B7280" />
          </Pressable>
          <View style={styles.xpBadge}>
            <Text style={styles.xpBadgeText}>{lesson.xpReward}</Text>
          </View>
          <Pressable style={styles.headerIconBtn}>
            <Ionicons name="shield-checkmark-outline" size={18} color="#6B7280" />
          </Pressable>
        </View>
      </View>

      {/* ── Main purple area ── */}
      <View style={styles.mainArea}>
        {/* Teacher avatar – top right */}
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=47" }}
          style={styles.teacherAvatar}
        />

        {/* Mascot */}
        <Image
          source={images.mascotWelcome}
          style={styles.mascot}
          resizeMode="contain"
        />

        {/* Speech bubble */}
        <View style={styles.speechBubble}>
          <View style={styles.speechContent}>
            <Text style={styles.speechPrimary} numberOfLines={1}>
              {lesson.aiTeacherPrompt.topic}
            </Text>
            <Text style={styles.speechSecondary} numberOfLines={2}>
              {introSentence}
            </Text>
          </View>
          <Pressable style={styles.speakerBtn}>
            <Ionicons name="volume-medium" size={20} color="#6C4EF5" />
          </Pressable>
        </View>
      </View>

      {/* ── Feedback row ── */}
      <View style={styles.feedbackRow}>
        {FEEDBACK.map((item, i) => (
          <View key={item.label} style={styles.feedbackCell}>
            {i > 0 && <View style={styles.feedbackDivider} />}
            <View style={styles.feedbackItem}>
              <Text style={styles.feedbackLabel}>{item.label}</Text>
              <Text style={[styles.feedbackValue, { color: item.color }]}>
                {item.value}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* ── Controls ── */}
      <View style={styles.controlsRow}>
        <ControlButton icon="videocam-outline" label="Camera" />
        <ControlButton
          icon={micActive ? "mic" : "mic-outline"}
          label="Mic"
          active={micActive}
          onPress={() => setMicActive((v) => !v)}
        />
        <ControlButton
          icon="text-outline"
          label="Subtitles"
          active={subtitlesOn}
          onPress={() => setSubtitlesOn((v) => !v)}
        />
        <ControlButton
          icon="call-outline"
          label="End Call"
          isEndCall
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
}

type ControlButtonProps = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  active?: boolean;
  isEndCall?: boolean;
  onPress?: () => void;
};

function ControlButton({ icon, label, active, isEndCall, onPress }: ControlButtonProps) {
  return (
    <Pressable style={styles.controlItem} onPress={onPress}>
      <View
        style={[
          styles.controlCircle,
          active && styles.controlCircleActive,
          isEndCall && styles.controlCircleEndCall,
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={isEndCall ? "#FFFFFF" : active ? "#6C4EF5" : "#374151"}
        />
      </View>
      <Text
        style={[styles.controlLabel, isEndCall && styles.controlLabelEndCall]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#0D132B",
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 1,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#21C16B",
  },
  onlineText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#21C16B",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerIconBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "center",
  },
  xpBadge: {
    backgroundColor: "#FFF4E0",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  xpBadgeText: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#FF9600",
  },

  // Main purple area
  mainArea: {
    flex: 1,
    backgroundColor: "#2E1B5B",
    marginHorizontal: 0,
    position: "relative",
    overflow: "hidden",
    justifyContent: "flex-end",
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  teacherAvatar: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  mascot: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    height: "80%",
    alignSelf: "center",
  },
  speechBubble: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  speechContent: {
    flex: 1,
  },
  speechPrimary: {
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    color: "#0D132B",
    marginBottom: 2,
  },
  speechSecondary: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 17,
  },
  speakerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0EDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  // Feedback row
  feedbackRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  feedbackCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  feedbackDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#E5E7EB",
  },
  feedbackItem: {
    flex: 1,
    alignItems: "center",
  },
  feedbackLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  feedbackValue: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
  },

  // Controls
  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  controlItem: {
    alignItems: "center",
    gap: 6,
  },
  controlCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "center",
  },
  controlCircleActive: {
    backgroundColor: "#EDE9FE",
  },
  controlCircleEndCall: {
    backgroundColor: "#FF4D4F",
  },
  controlLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#6B7280",
  },
  controlLabelEndCall: {
    color: "#FF4D4F",
  },
});
