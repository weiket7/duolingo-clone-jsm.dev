import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, TextInput, ScrollView } from "@/components/tw";
import { languages } from "@/data/languages";
import { LanguageCode } from "@/types/learning";
import { images } from "@/constants/images";
import { useLanguageStore } from "@/store/languageStore";

export default function LanguageSelection() {
  const { setLanguage } = useLanguageStore();
  const [selectedId, setSelectedId] = useState<LanguageCode>("es");
  const [search, setSearch] = useState("");

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View className="flex-row items-center px-2 pt-1 pb-2">
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#0D132B" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-h3 font-poppins-bold text-text-primary">
          Choose a language
        </Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        contentContainerClassName="pb-0"
        showsVerticalScrollIndicator={false}
      >
        {/* Search bar */}
        <View className="px-4 mb-5 mt-2">
          <View className="flex-row items-center rounded-full border border-border bg-white px-4"
            style={styles.searchBar}>
            <Ionicons name="search-outline" size={18} color="#9CA3AF" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search languages"
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-2 text-body-md font-poppins text-text-primary"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Section label */}
        <Text className="px-4 mb-3 text-body-md font-poppins-bold text-text-primary">
          Popular
        </Text>

        {/* Language list */}
        <View className="px-4">
          {filtered.map((lang) => {
            const selected = lang.id === selectedId;
            return (
              <TouchableOpacity
                key={lang.id}
                activeOpacity={0.75}
                onPress={() => setSelectedId(lang.id as LanguageCode)}
                style={[styles.langRow, selected && styles.langRowSelected]}
              >
                {/* Flag circle */}
                <View style={styles.flagCircle}>
                  <Text style={styles.flagEmoji}>{lang.flag}</Text>
                </View>

                {/* Name + learners */}
                <View className="flex-1 ml-3">
                  <Text className="text-body-lg font-poppins-semibold text-text-primary">
                    {lang.name}
                  </Text>
                  <Text className="text-body-sm font-poppins text-text-secondary">
                    {lang.totalLearners} learners
                  </Text>
                </View>

                {/* Trailing icon */}
                {selected ? (
                  <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  </View>
                ) : (
                  <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Confirmation button */}
        <View className="px-4 mt-6">
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.continueBtn}
            onPress={() => {
              setLanguage(selectedId);
              router.replace("/");
            }}
          >
            <Text className="text-body-lg font-poppins-bold text-white text-center">
              Start Learning
            </Text>
          </TouchableOpacity>
        </View>

        {/* Earth illustration */}
        <Image
          source={images.earth}
          style={styles.earth}
          resizeMode="cover"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    height: 48,
  },
  searchInput: {
    height: 48,
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 2,
  },
  langRowSelected: {
    backgroundColor: "#F0EDFF",
    borderColor: "#6C4EF5",
  },
  flagCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  flagEmoji: {
    fontSize: 28,
  },
  checkCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#6C4EF5",
    justifyContent: "center",
    alignItems: "center",
  },
  continueBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: "center",
  },
  earth: {
    width: "100%",
    height: 220,
    marginTop: 8,
  },
});
