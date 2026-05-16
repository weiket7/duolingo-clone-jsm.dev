import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "@/components/tw";
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";

function SocialButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.socialButton} onPress={onPress}>
      <View style={styles.socialIconContainer}>{icon}</View>
      <Text className="flex-1 text-body-md font-poppins-medium text-text-primary text-center">
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView className="flex-1" contentContainerClassName="flex-grow">
        {/* Back button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </TouchableOpacity>

        {/* Header */}
        <View className="px-6 mt-3">
          <Text className="text-h2 font-poppins-bold text-text-primary">
            Create your account
          </Text>
          <Text className="text-body-md font-poppins text-text-secondary mt-1">
            Start your language journey today ✨
          </Text>
        </View>

        {/* Mascot */}
        <View className="items-center mt-5">
          <Image
            source={images.mascotAuth}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Form */}
        <View className="px-6 mt-4 gap-y-3">
          {/* Email input */}
          <View style={styles.inputContainer}>
            <Text className="text-caption font-poppins text-text-secondary mb-1">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              className="text-body-md font-poppins text-text-primary"
              style={styles.textInput}
              underlineColorAndroid="transparent"
            />
          </View>

          {/* Password input */}
          <View style={styles.inputContainer}>
            <Text className="text-caption font-poppins text-text-secondary mb-1">
              Password
            </Text>
            <View className="flex-row items-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="••••••••"
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-body-md font-poppins text-text-primary"
                style={styles.textInput}
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setShowModal(true)}
          >
            <Text className="text-body-lg font-poppins-semibold text-white">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center gap-x-3 my-1">
            <View className="flex-1 h-px bg-border" />
            <Text className="text-body-sm font-poppins text-text-secondary">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          {/* Social buttons */}
          <View className="gap-y-3">
            <SocialButton
              icon={<AntDesign name="google" size={20} color="#4285F4" />}
              label="Continue with Google"
            />
            <SocialButton
              icon={
                <View style={styles.fbIconCircle}>
                  <FontAwesome name="facebook-f" size={16} color="#fff" />
                </View>
              }
              label="Continue with Facebook"
            />
            <SocialButton
              icon={<AntDesign name="apple" size={22} color="#000" />}
              label="Continue with Apple"
            />
          </View>
        </View>

        {/* Footer */}
        <View className="flex-row items-center justify-center mt-8 pb-6">
          <Text className="text-body-sm font-poppins text-text-secondary">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
            <Text className="text-body-sm font-poppins-semibold text-lingua-purple">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        email={email}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    marginLeft: 16,
    marginTop: 8,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    width: 180,
    height: 180,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    padding: 0,
    margin: 0,
    height: 28,
  },
  primaryButton: {
    backgroundColor: "#6C4EF5",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    marginTop: 4,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  socialIconContainer: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  fbIconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
});
