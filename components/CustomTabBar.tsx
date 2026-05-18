import { View } from "@/components/tw";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PURPLE = "#6C4EF5";
const INACTIVE_COLOR = "#9CA3AF";
const CIRCLE_SIZE = 52;

type TabConfig = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

const TAB_CONFIG: Record<string, TabConfig> = {
  index: { label: "Home", icon: "home-outline", activeIcon: "home" },
  learn: { label: "Learn", icon: "book-outline", activeIcon: "book" },
  "ai-teacher": {
    label: "AI Teacher",
    icon: "sparkles-outline",
    activeIcon: "sparkles",
  },
  chat: { label: "Chat", icon: "chatbubble-outline", activeIcon: "chatbubble" },
  profile: { label: "Profile", icon: "person-outline", activeIcon: "person" },
};

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const tabCount = state.routes.length;
  const tabWidth = SCREEN_WIDTH / tabCount;

  const circleX = useSharedValue(
    state.index * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2,
  );

  useEffect(() => {
    circleX.value = withTiming(
      state.index * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2,
      {
        duration: 220,
        easing: Easing.out(Easing.quad),
      },
    );
  }, [state.index, tabWidth]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Sliding circle indicator */}
      <Animated.View
        style={[styles.circle, animatedCircleStyle]}
        pointerEvents="none"
      />

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const config = TAB_CONFIG[route.name] ?? {
          label: route.name,
          icon: "ellipse-outline" as keyof typeof Ionicons.glyphMap,
          activeIcon: "ellipse" as keyof typeof Ionicons.glyphMap,
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            style={styles.tab}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={config.label}
          >
            {isFocused ? (
              <View style={styles.iconWrapper}>
                <Ionicons name={config.activeIcon} size={24} color="#FFFFFF" />
              </View>
            ) : (
              <View style={styles.inactiveTab}>
                <Ionicons name={config.icon} size={22} color={INACTIVE_COLOR} />
                <Text style={styles.label}>{config.label}</Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 60,
  },
  circle: {
    position: "absolute",
    top: 4,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: PURPLE,
  },
  iconWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  inactiveTab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    paddingBottom: 4,
  },
  label: {
    fontSize: 10,
    color: INACTIVE_COLOR,
    fontFamily: "Poppins-Regular",
    lineHeight: 14,
  },
});
