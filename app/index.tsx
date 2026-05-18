import { useAuth, useClerk, useUser } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "@/components/tw";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const { user } = useUser();

  if (!isLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 justify-center items-center bg-background gap-y-6 px-6">
        <Text className="text-h1 font-poppins-bold text-lingua-purple text-center">
          lingua
        </Text>
        <Text className="text-body-lg font-poppins text-text-secondary text-center">
          Welcome, {user?.primaryEmailAddress?.emailAddress}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/language-selection")}
        >
          <Text className="text-body-lg font-poppins-semibold text-white text-center">
            Choose Language
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => signOut()}>
          <Text className="text-body-lg font-poppins-semibold text-lingua-purple text-center">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#6C4EF5",
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 14,
    minWidth: 200,
    alignItems: "center",
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: "#6C4EF5",
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 14,
    minWidth: 200,
    alignItems: "center",
  },
});
