import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable } from "@/components/tw";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Logo header */}
      <View className="items-center pt-2">
        <View className="flex-row items-center gap-x-2">
          {/* Image: className not supported on react-native Image */}
          <Image
            source={images.mascotLogo}
            style={styles.logoIcon}
            resizeMode="contain"
          />
          <Text className="text-2xl font-poppins-bold text-text-primary">
            lingua
          </Text>
        </View>
      </View>

      {/* Headline + subtitle */}
      <View className="px-6 pt-8">
        <Text className="text-h1 font-poppins-bold text-text-primary">
          {"Your AI language\n"}
          <Text className="text-lingua-purple">{"teacher"}</Text>
          {"."}
        </Text>
        <Text className="text-body-lg font-poppins text-text-secondary mt-3">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Illustration with floating speech bubbles */}
      <View className="flex-1 items-center justify-center">
        {/* Hello! — left, shadow kept in StyleSheet (platform-specific) */}
        <View
          className="absolute rounded-[20px] px-[14px] py-[9px] bg-[#EFF0FF] left-4 top-[35%]"
          style={styles.shadow}
        >
          <Text className="text-body-md font-poppins text-text-primary">Hello!</Text>
        </View>

        {/* ¡Hola! — top right */}
        <View
          className="absolute rounded-[20px] px-[14px] py-[9px] bg-[#EFF0FF] right-4 top-[8%]"
          style={styles.shadow}
        >
          <Text className="text-body-md font-poppins text-lingua-purple">¡Hola!</Text>
        </View>

        {/* 你好! — mid right */}
        <View
          className="absolute rounded-[20px] px-[14px] py-[9px] bg-[#FFF0EE] right-4 top-[52%]"
          style={styles.shadow}
        >
          <Text className="text-body-md font-poppins text-[#D93025]">你好!</Text>
        </View>

        {/* Image: className not supported on react-native Image */}
        <Image
          source={images.mascotWelcome}
          style={styles.mascot}
          resizeMode="contain"
        />
      </View>

      {/* Get Started button */}
      <View className="px-6 pb-8">
        <Pressable className="bg-lingua-purple rounded-3xl flex-row items-center justify-center py-[17px]">
          <Text className="text-body-lg font-poppins-semibold text-white">
            Get Started
          </Text>
          {/* Ionicons: not a className-enabled component */}
          <Ionicons name="chevron-forward" size={20} color="white" style={styles.buttonIcon} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView: className not supported (AGENTS.md exception)
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  // react-native Image: className not supported
  logoIcon: {
    width: 44,
    height: 44,
  },
  mascot: {
    width: 280,
    height: 280,
  },
  // Shadow: platform-specific syntax, must use StyleSheet (AGENTS.md exception)
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  // Ionicons: not a className-enabled component
  buttonIcon: {
    marginLeft: 6,
  },
});
