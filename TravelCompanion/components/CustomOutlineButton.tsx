import {
  View,
  Text,
  TouchableOpacity,
  DimensionValue,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { Colors } from "@/assets/colors/colors";
import MaskedView from "@react-native-masked-view/masked-view";

interface CustomButtonProps {
  onPress:()=>void
  }
const CustomOutlineButton = ({onPress}: CustomButtonProps) => {
  const width = Dimensions.get("screen").width / 1.8;
  const height = width / 3.5;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0 }}
      style={{
        marginVertical: 10,
        width: width,
        height: width / 3.5,
        display: "flex",
        borderRadius: 50,
        justifyContent: "center",
      }}
      colors={Colors.BorderedGradient}
    >
      <TouchableOpacity
      onPress={onPress}
        style={{
          flex: 1,
          backgroundColor: "#F4FBFE",
          borderRadius: 30,
          marginVertical: height / 20,
          marginHorizontal: height / 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaskedView
          style={{ flex: 1, flexDirection: "row", height: "100%" }}
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Create an Account
              </Text>
            </View>
          }
        >
          <LinearGradient
            style={{ flex: 1 }}
            colors={Colors.BorderedGradient}
          />
        </MaskedView>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomOutlineButton;
