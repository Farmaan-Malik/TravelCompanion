import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";

interface LargeSpotCardProps {
  style?: object;
  width: number;
  height: number;
}

const LargeSpotCard = ({ style, width, height }: LargeSpotCardProps) => {
  return (
    <View
      style={{
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: `${width}%`,
        height: `${height}%`,
        ...style,
      }}
    >
      <View
        style={{
          height: "7%",
          width: "25%",
          position: "absolute",
          zIndex: 2,
          bottom: "-4%",
          left: "12%",
        }}
      >
        <LinearGradient
          style={{
            borderRadius: 30,
            height: "80%",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
          colors={Colors.SecondaryCardGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text
            style={{
              fontFamily: "Nunito-BoldItalic",
              color: "white",
              borderRadius: 50,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            1.3Km
          </Text>
        </LinearGradient>
      </View>
      <View
        style={{
          height: "7%",
          width: "20%",
          position: "absolute",
          zIndex: 2,
          bottom: "-4%",
          left: "45%",
        }}
      >
        <LinearGradient
          style={{
            borderRadius: 30,
            height: "80%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          colors={Colors.SecondaryCardGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text
            style={{
              fontFamily: "Nunito-BoldItalic",
              color: "white",
              borderRadius: 50,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            8.7
          </Text>
        </LinearGradient>
      </View>
      <LinearGradient
        style={{
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          justifyContent: 'center',
          alignItems: "center",
        }}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        colors={Colors.PrimaryCardGradient}
      >
        <View
          style={{
            height: `${height}%`,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito-Regular",
              paddingHorizontal: 20,
              color: "white",
              fontSize: 16,
              zIndex: 4,
              marginBottom:10,
            }}
            numberOfLines={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae fuga
            qui voluptate.
          </Text>
          <Image
            style={{
              width: Dimensions.get('window').width /1.2,
              height: Dimensions.get('window').width /1.2,
              borderRadius: 20,
            }}
            source={require("@/assets/images/place1.png")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default LargeSpotCard;
