import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { Colors } from "@/assets/colors/colors";

interface CustomButtonProps {
  onPress: () => void;
  label: string;
  style?: object;
  colorArray?: string[];
}
const CustomButton = ({
  onPress,
  label,
  style,
  colorArray = Colors.PrimaryGradient,
}: CustomButtonProps) => {
  const width = Dimensions.get("screen").width / 1.8;
  const height = width / 3.5;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginVertical: 10,
        width: width,
        height: height,
        display: "flex",
        borderRadius: 50,
        overflow: "hidden",
        ...style,
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        colors={colorArray}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
