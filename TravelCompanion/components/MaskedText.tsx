import { View, Text } from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";

const MaskedText = ({
  text = "",
  colorArray = Colors.BorderedGradient,
  fontSize = 18,
  height = 5,
  width = 100,
  textStyle={}
}) => {
  return (
    <MaskedView
      style={{
        display: "flex",
        flexDirection: "row",
        height: `${height}%`,
        width: `${width}%`,
      }}
      maskElement={
        <View
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize,
              fontWeight: "semibold",
              fontStyle: "italic",
              ...textStyle
            }}
          >
            {text}
          </Text>
        </View>
      }
    >
      <LinearGradient style={{ flex: 1 }} colors={colorArray} />
    </MaskedView>
  );
};

export default MaskedText;
