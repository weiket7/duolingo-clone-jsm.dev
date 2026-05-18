import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, ScrollView } from "@/components/tw";
import { images } from "@/constants/images";
import { todaysPlan, PlanItem } from "@/data/todaysPlan";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();
  const { xp, dailyGoalXP, streak } = useProgressStore();

  const firstName =
    user?.firstName ??
    user?.primaryEmailAddress?.emailAddress?.split("@")[0] ??
    "there";

  const currentUnit =
    units.find((u) => u.languageId === selectedLanguage?.id) ?? units[0];
  const progressRatio = Math.min(xp / dailyGoalXP, 1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-8"
      >
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between pt-2 pb-5">
          <View className="flex-row items-center gap-2">
            <Text style={styles.flagText}>{selectedLanguage?.flag ?? "🌍"}</Text>
            <Text className="text-base font-poppins-semibold text-text-primary">
              Hola, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={images.streakFire} style={styles.streakIcon} />
              <Text className="text-[15px] font-poppins-bold text-streak">
                {streak}
              </Text>
            </View>
            <Pressable className="w-9 h-9 rounded-full bg-surface items-center justify-center">
              <Ionicons name="notifications-outline" size={22} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* ── Daily Goal Card ── */}
        <View className="flex-row items-center bg-[#FFF4E0] rounded-[20px] pl-5 py-[18px] mb-4 overflow-hidden">
          <View className="flex-1">
            <Text className="text-xs font-poppins-medium text-text-secondary mb-1">
              Daily goal
            </Text>
            <View className="flex-row items-baseline mb-[10px]">
              <Text className="text-[32px] font-poppins-bold text-text-primary leading-[38px]">
                {xp}
              </Text>
              <Text className="text-sm font-poppins-medium text-text-secondary">
                {" "}/ {dailyGoalXP} XP
              </Text>
            </View>
            <View className="h-2 bg-[#FFE0B2] rounded mr-4 overflow-hidden">
              <View
                style={[styles.progressFill, { width: `${progressRatio * 100}%` }]}
              />
            </View>
          </View>
          <Image
            source={images.treasure}
            style={styles.treasureImage}
            resizeMode="contain"
          />
        </View>

        {/* ── Continue Learning Card ── */}
        <View className="flex-row bg-lingua-purple rounded-[20px] pl-5 pt-5 pb-5 mb-7 overflow-hidden">
          <View className="flex-1 gap-1">
            <Text style={styles.mutedWhite}>Continue learning</Text>
            <Text className="text-[26px] font-poppins-bold text-white leading-[32px]">
              {selectedLanguage?.name ?? "Spanish"}
            </Text>
            <Text style={[styles.mutedWhite, styles.continueUnit]}>
              A1 · {currentUnit.title}
            </Text>
            <Pressable className="bg-white rounded-full px-5 py-2 self-start">
              <Text className="text-sm font-poppins-semibold text-lingua-purple">
                Continue
              </Text>
            </Pressable>
          </View>
          <Image
            source={images.palace}
            style={styles.palaceImage}
            resizeMode="contain"
          />
        </View>

        {/* ── Today's Plan ── */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[18px] font-poppins-semibold text-text-primary">
            Today's plan
          </Text>
          <Pressable>
            <Text className="text-sm font-poppins-semibold text-lingua-purple">
              View all
            </Text>
          </Pressable>
        </View>

        <View style={styles.planCard}>
          {todaysPlan.map((item, index) => (
            <PlanRow
              key={item.id}
              item={item}
              isLast={index === todaysPlan.length - 1}
            />
          ))}
        </View>

        {/* ── Next Up ── */}
        <View className="flex-row items-center justify-between bg-surface rounded-[20px] p-5">
          <View>
            <Text style={styles.nextUpLabel}>Next up</Text>
            <Text className="text-base font-poppins-bold text-text-primary">
              AI Video Call
            </Text>
            <Text className="text-xs font-poppins text-text-secondary mt-[2px]">
              Practice speaking
            </Text>
          </View>
          <View className="flex-row items-center gap-[10px]">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=47" }}
              style={styles.teacherAvatar}
            />
            <Pressable className="w-11 h-11 rounded-full bg-success items-center justify-center">
              <Ionicons name="videocam" size={22} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function PlanRow({ item, isLast }: { item: PlanItem; isLast: boolean }) {
  return (
    <View
      className={`flex-row items-center px-4 py-[14px] gap-[14px]${!isLast ? " border-b border-border" : ""}`}
    >
      <View
        style={[styles.planIconCircle, { backgroundColor: item.iconBg }]}
        className="items-center justify-center"
      >
        <Ionicons name={item.icon} size={20} color="#6C4EF5" />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-poppins-semibold text-text-primary">
          {item.title}
        </Text>
        <Text className="text-xs font-poppins text-text-secondary mt-[1px]">
          {item.subtitle}
        </Text>
      </View>
      {item.completed ? (
        <View className="w-6 h-6 rounded-full bg-info items-center justify-center">
          <Ionicons name="checkmark" size={14} color="#FFFFFF" />
        </View>
      ) : (
        <View className="w-6 h-6 rounded-full border-2 border-border" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView — className not supported
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },

  // Emoji — 28px not in standard Tailwind text scale
  flagText: { fontSize: 28 },

  // rgba color — not supported as text-white/75 in RN NativeWind
  mutedWhite: { fontSize: 12, fontFamily: "Poppins-Regular", color: "rgba(255,255,255,0.75)" },
  continueUnit: { marginBottom: 12 },

  // Dynamic width computed at runtime
  progressFill: { height: "100%", backgroundColor: "#FF8A00", borderRadius: 4 },

  // Image dimensions — require StyleSheet
  streakIcon: { width: 22, height: 22 },
  treasureImage: { width: 90, height: 90, marginRight: -4 },
  palaceImage: { width: 120, height: 120, alignSelf: "flex-end", marginBottom: -20, marginRight: -4 },
  teacherAvatar: { width: 52, height: 52, borderRadius: 26, borderWidth: 2, borderColor: "#FFFFFF" },

  // Shadow — shadowOffset is not NativeWind-compatible
  planCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  // Dynamic backgroundColor from item data — must use style prop
  planIconCircle: { width: 44, height: 44, borderRadius: 14 },

  // 11px — not in standard Tailwind text scale
  nextUpLabel: { fontSize: 11, fontFamily: "Poppins-Medium", color: "#9CA3AF", marginBottom: 2 },
});
