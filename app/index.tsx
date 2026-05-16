import { Text, View } from "@/components/tw";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background gap-y-4">
      <Text className="text-h1 font-poppins-bold text-lingua-purple text-center">
        lingua
      </Text>
      <Link href="/onboarding" style={styles.link}>
        <Text className="text-body-lg font-poppins-semibold text-white text-center">
          Go to Onboarding
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: "#6C4EF5",
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
});
