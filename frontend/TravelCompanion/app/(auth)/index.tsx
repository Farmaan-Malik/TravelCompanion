import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import OutlineIconButton from "@/components/OutlineIconButton";
import LinearGradient from "react-native-linear-gradient";

const Index = () => {
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
        <View style={[globalStyles.view,{justifyContent:'flex-start'}]}>
          <View
            style={[
              {
                width: "100%",
                height: "30%",
                backgroundColor: "white",
                borderWidth: 2,
                marginTop:0,
                borderBottomStartRadius:30,
                borderBottomEndRadius:30,
                justifyContent:'center'
              },
            ]}
          >
            <OutlineIconButton
            style={{borderRadius:8}}
              onPress={() => {
                /*TODO*/
              }}
            />
          </View>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Index;
