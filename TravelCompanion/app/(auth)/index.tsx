import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";
import Header from "@/components/Header";
import { SvgXml } from "react-native-svg";
import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpotCard from "@/components/SpotCard";

const Index = () => {
  const { width: screenWidth } = Dimensions.get("window");
  let name = "Farmaan";
  const avatar = createAvatar(lorelei, { seed: "farmaan Malik " });
  const svg = avatar.toString();
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle scroll event
  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const cardWidth = 270; // Adjust this to match your SpotCard width + margin
    const index = Math.round(scrollX / cardWidth); // Determine which item is centered
    setSelectedIndex(index);
  };
  return (
    <LinearGradient
      colors={["#C4C4C4", "white"]}
      style={{
        flex: 1,
        width: "100%",
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.5 }}
    >
      <SafeAreaView
        edges={[]}
        style={[
          globalStyles.safeAreaView,
          //  { borderWidth: 1 }
        ]}
      >
        <View style={[globalStyles.view, { justifyContent: "flex-start" }]}>
          <View
            style={{
              height: "35%",
              // borderWidth: 1,
              width: "100%",
              borderBottomStartRadius: 50,
              borderBottomEndRadius: 50,
              justifyContent: "center",
              backgroundColor: "white",
              shadowColor: "black",
              shadowOpacity: 0.1,
              shadowRadius: 55,
              shadowOffset: { width: 0, height: 10 },
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Header
              onPress1={() => {
                /* TODO*/
              }}
              onPress2={() => {
                /* TODO*/
              }}
              style={
                {
                  // borderWidth:1,
                }
              }
            />
            <View
              style={{
                display: "flex",
                height: "40%",
                width: "100%",
                // borderWidth: 2,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "70%",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 25, fontFamily: "Nunito" }}>
                  {"Hey"}{" "}
                  <Text
                    style={{ fontWeight: "bold", fontSize: 30 }}
                  >{`${name}!`}</Text>
                </Text>
                <Text style={{ fontSize: 15, fontFamily: "Nunito" }}>
                  Where is your next trip going to be?
                </Text>
              </View>
              <SvgXml
                style={{
                  width: 70,
                  height: 70,
                  borderWidth: 0.2,
                  borderRadius: 50,
                  borderColor: "grey",
                }}
                xml={svg}
              ></SvgXml>
            </View>
            <TouchableOpacity
              style={{ width: "60%", height: "15%" }}
              onPress={() => {
                /* TODO */
              }}
            >
              <LinearGradient
                style={{
                  width: "100%",
                  height: "100%",
                  shadowColor: "black",
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 0 },
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 13,
                  display: "flex",
                  flexDirection: "row",
                  elevation:10
                }}
                start={{ x: 0.6, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={Colors.GreenGradient}
              >
                <Ionicons size={24} color={"white"} name="location-sharp" />
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Nunito",
                    fontSize: 14,
                    fontWeight: "bold",
                    width: "80%",
                  }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  Placeholder Location, something else
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              marginTop: 10,
              // borderWidth: 2,
            }}
          >
            <Text
              style={{
                width: "100%",
                textAlign: "left",
                fontSize: 21,
                fontWeight: "semibold",
                fontFamily: "Nunito",
                paddingHorizontal: 20,
              }}
            >
              Near your location
            </Text>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              onScroll={handleScroll}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingHorizontal: (screenWidth)/3, // Center the first and last cards
                marginVertical:20
              }}
            >
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <SpotCard onPress={()=>{setSelectedIndex(index)
                    // scrollTo()
                  }} key={index} selected={index === selectedIndex} />
                ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Index;
