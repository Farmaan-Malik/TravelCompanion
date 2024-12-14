import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";
import MaskedText from "./MaskedText";

const UserCard = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <TouchableOpacity
      style={{
        height: (height - 100) / 4,
        width: (width - 80) / 3,
        // borderWidth: 1,
        marginHorizontal: 10,
      }}
    >
      <LinearGradient
        style={{
          height: "80%",
          width: "100%",
          alignItems: "center",
          borderRadius: 15,
          marginBottom: 10,
        }}
        colors={Colors.PrimaryCardGradient}
        start={{ x: 1, y: 0.9 }}
        end={{ x: 0.9, y: 0 }}
      >
        <Image
          style={{
            width: (width - 100) / 4,
            height: (width - 100) / 4,
            marginTop: "20%",
            borderRadius: 50,
          }}
          source={require("@/assets/images/place2.png")}
        />
        <Text
          style={{
            color: "white",
            fontFamily: "Nunito",
            fontWeight: "700",
            width: (width - 150) / 3,
            // borderWidth: 1,
            textAlign: "center",
            marginTop:10
          }}
        >
          Farmaan Malik
        </Text>
      </LinearGradient>
      <MaskedText
        height={10}
        textStyle={{
          fontStyle: "normal",
          fontWeight: "700",
          fontFamily: "Nunito",
        }}
        fontSize={14}
        colorArray={Colors.PrimaryGradient}
        text="1.6Km"
      />
    </TouchableOpacity>
  );
};

export default UserCard;
