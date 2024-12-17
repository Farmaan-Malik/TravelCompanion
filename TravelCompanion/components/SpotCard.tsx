import { View, Text, TouchableOpacity,Animated, Image } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";

interface SpotCardData {
  selected: boolean;
  onPress: () => void;
  image?: string;
  trigger?:()=>void
}
const SpotCard = ({ selected, onPress }: SpotCardData) => {
  const width = selected ? 250 : 200;
  const height = selected ? 300 : 250;
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        marginHorizontal: 20,
        borderRadius: 30,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        backgroundColor: "white",
        elevation: 5,
        shadowOffset:{width:0,height:5}
      }}
      onPress={onPress}
    >
      <LinearGradient
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 30,
          justifyContent: "space-around",
          alignItems: "center",
        }}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        colors={
          selected ? Colors.PrimaryCardGradient : Colors.SecondaryCardGradient
        }
      >
        <View
          style={{
            height: "auto",
            position: "absolute",
            zIndex: 2,
            bottom: height / 22,
            left: width / 6,
          }}
        >
          <LinearGradient
            style={{ borderRadius: 30 }}
            colors={Colors.SecondaryCardGradient}
            start={{x:0,y:0}}
            end={{x:1,y:1}}
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontStyle: "italic",
                color: "white",
                paddingHorizontal: 10,
                // borderWidth: 1,
                borderRadius: 50,
              }}
            >
              1.3Km
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            height: "auto",
            position: "absolute",
            zIndex: 2,
            bottom: height / 22,
            right: width / 6,
          }}
        >
          <LinearGradient
            style={{ borderRadius: 30 }}
            colors={Colors.SecondaryCardGradient}
            start={{x:0,y:0}}
            end={{x:1,y:1}}
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontStyle: "italic",
                color: "white",
                paddingHorizontal: 20,
                // borderWidth: 1,
                borderRadius: 50,
              }}
            >
              8.1
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            width: "100%",
            // borderWidth: 1,
            height: "auto",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              marginHorizontal: 20,
              color: "white",
              fontWeight: 700,
              fontFamily: "Nunito",
              paddingTop:10
            }}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            Air Terjun Luweng Sampang, Gunungkidul
          </Text>
        </View>
        <Image
          style={{
            width: width - 35,
            height: height - 80,
            borderRadius: 30,
            marginBottom: 20,
          }}
          source={require("../assets/images/place1.png")}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SpotCard;
