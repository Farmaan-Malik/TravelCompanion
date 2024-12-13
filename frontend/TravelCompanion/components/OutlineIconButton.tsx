import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface OutlineIconButton {
  style?: object;
  onPress: () => void;
  icon: string;
}

const OutlineIconButton = ({
  style,
  onPress,
  icon = "menu-outline",
}: OutlineIconButton) => {
  return (
    <View
      style={{
        display: "flex",
        width: 40,
        padding: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        backgroundColor: "white",
        ...style,
      }}
    >
      <Ionicons
        onPress={() => {
          onPress;
        }}
        size={30}
        name={icon}
      />
    </View>
  );
};

export default OutlineIconButton;
