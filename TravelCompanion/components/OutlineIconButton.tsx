import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


type IoniconsName = keyof typeof Ionicons.glyphMap;

interface OutlineIconButton {
  style?: object;
  onPress: () => void;
  iconName?: IoniconsName;
}

const OutlineIconButton = ({
  style,
  onPress,
  iconName = "menu-outline",
}: OutlineIconButton) => {
  return (
    <View
      style={{
        display: "flex",
        width: 40,
        padding: 5,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: "white",
        elevation:5,
        ...style,
      }}
    >
      <Ionicons
        onPress={() => {
          onPress;
        }}
        size={30}
        name= {iconName}
      />
    </View>
  );
};

export default OutlineIconButton;
