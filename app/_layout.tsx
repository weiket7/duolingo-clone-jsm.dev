import "../global.css";
import { ClerkProvider } from "@clerk/expo";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env or .env.local");
}

// In-memory token cache: avoids expo-secure-store native module in Expo Go.
// Replace with @clerk/expo/token-cache once using a dev build.
const store: Record<string, string> = {};
const tokenCache = {
  getToken: async (key: string) => store[key] ?? null,
  saveToken: async (key: string, value: string) => { store[key] = value; },
  clearToken: async (key: string) => { delete store[key]; },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/images/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/images/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/images/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/images/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }} />
    </ClerkProvider>
  );
}
