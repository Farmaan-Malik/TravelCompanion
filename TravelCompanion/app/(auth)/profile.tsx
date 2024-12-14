import { View, Text, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import Header from "@/components/Header";

const ProfileTab = () => {
  const height = Dimensions.get('window').height
  return (
    <SafeAreaView edges={[]} style={[globalStyles.safeAreaView]}>
      <View style={[globalStyles.view, { justifyContent: "flex-start" }]}>
        <View
          style={{
            // borderWidth: 1,
            width: "100%",
            height: height/6,
            paddingTop: "12%",
            backgroundColor: "white",
            shadowColor: "black",
            shadowOpacity: 0.1,
            shadowRadius: 55,
            shadowOffset: { width: 0, height: 10 },
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top:0,
            zIndex:1
          }}
        >
          <Header
            onPress1={() => {}}
            onPress2={() => {}}
            style={{ width: "90%"}}
          />
          <Text>ProfileTab</Text>
        </View>
        <View style={{height:'100%',backgroundColor:'red',width:'100%',paddingTop:height/6}}>
<Text>asd</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileTab;
