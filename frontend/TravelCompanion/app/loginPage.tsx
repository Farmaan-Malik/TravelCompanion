import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import { Colors } from "@/assets/colors/colors";
import CustomTextInput from "@/components/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";

const LoginPage = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(progress, {
      toValue: 1,
      useNativeDriver: false,
      tension: 1,
    }).start();
  }, []);
  return (
    <SafeAreaView style={globalStyles.safeAreaView} edges={[]}>
      <LinearGradient
        style={globalStyles.view}
        colors={["#D4F3FD", "#F4FBFE"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              {
                translateY: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [200, 0],
                }),
              },
              {
                scale: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          }}
        >
          <Animated.Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Login To your Account
          </Animated.Text>
          <CustomTextInput label="Enter username" />
          <CustomTextInput label="Enter password" />
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginPage;
