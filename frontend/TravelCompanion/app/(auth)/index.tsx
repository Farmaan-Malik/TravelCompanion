import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";
import Header from "@/components/Header";
import { SvgXml } from "react-native-svg";
import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Ionicons from "@expo/vector-icons/Ionicons";

const Index = () => {
  let name = "Farmaan Malik";
  const avatar = createAvatar(lorelei, { seed: "farmaan Malik " });
  const svg = avatar.toString();
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
        style={[globalStyles.safeAreaView, { borderWidth: 1 }]}
      >
        <View style={[globalStyles.view, { justifyContent: "flex-start" }]}>
          <View
            style={{
              height: "40%",
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
                  <Text style={{ fontWeight: "bold", fontSize: 30 }}>{`${name}!`}</Text>
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
                  borderColor:'grey'
                }}
                xml={svg}
              ></SvgXml>
            </View>
            <TouchableOpacity style={{ width: "60%", height: "15%" }} onPress={()=>{
              /* TODO */
            }}>
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
                    width:'80%'
                  }}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                 Placeholder Location, something else
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Index;
