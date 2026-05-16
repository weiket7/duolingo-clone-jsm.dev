import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

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

  return <Stack />;
}
