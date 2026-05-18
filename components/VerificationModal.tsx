import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "@/components/tw";

interface Props {
  visible: boolean;
  onClose: () => void;
  email: string;
  onVerify: (code: string) => Promise<void>;
}

export default function VerificationModal({
  visible,
  onClose,
  email,
  onVerify,
}: Props) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(RNTextInput | null)[]>([
    null, null, null, null, null, null,
  ]);

  const handleChange = async (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 5 && digit) {
      const fullCode = newCode.join("");
      setIsVerifying(true);
      setError("");
      try {
        await onVerify(fullCode);
      } catch (err: unknown) {
        const clerkErr = err as { errors?: { message: string }[] };
        setError(
          clerkErr.errors?.[0]?.message ?? "Invalid code. Please try again."
        );
        setCode(["", "", "", "", "", ""]);
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
      } finally {
        setIsVerifying(false);
      }
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setCode(["", "", "", "", "", ""]);
    setError("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={handleClose}
        />
        <View className="bg-background rounded-t-3xl px-6 pt-4 pb-10">
          {/* Handle bar */}
          <View className="w-10 h-1 bg-border rounded-full self-center mb-5" />

          {/* Close */}
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Ionicons name="close" size={22} color="#6B7280" />
          </TouchableOpacity>

          {/* Title */}
          <Text className="text-h3 font-poppins-bold text-text-primary text-center mt-2">
            Check your email
          </Text>
          <Text className="text-body-sm font-poppins text-text-secondary text-center mt-2 mb-8">
            {"We sent a 6-digit code to\n"}
            <Text className="font-poppins-semibold text-text-primary">
              {email || "your email"}
            </Text>
          </Text>

          {/* OTP inputs */}
          <View style={styles.codeRow}>
            {code.map((digit, index) => (
              <RNTextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                style={[styles.codeInput, digit ? styles.codeInputFilled : null]}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
                textContentType="oneTimeCode"
                editable={!isVerifying}
              />
            ))}
          </View>

          {/* Loading / error */}
          {isVerifying && (
            <View className="items-center mt-4">
              <ActivityIndicator color="#6C4EF5" />
            </View>
          )}
          {!!error && (
            <Text className="text-body-sm font-poppins text-center mt-3" style={styles.errorText}>
              {error}
            </Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  closeButton: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  codeInput: {
    width: 48,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
    backgroundColor: "#F6F7FB",
  },
  codeInputFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#EFF0FF",
  },
  errorText: {
    color: "#D93025",
  },
});
