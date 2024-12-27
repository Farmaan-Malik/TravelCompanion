import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import { Colors } from "@/assets/colors/colors";
import CustomTextInput from "@/components/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginPage = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(progress, {
      toValue: 1,
      useNativeDriver: false,
      tension: 1,
    }).start();
  }, []);
  return (
    <SafeAreaView style={globalStyles.container} edges={[]}>
        <View style={[globalStyles.mainView]}>
      <LinearGradient
        style={[styles.gradient]}
        colors={Colors.PrimaryGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >

        <Animated.View
          style={{
            flex:1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              {
                translateY: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [200, 0],
                }),
              },
              {
                scale: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          }}
        >

          <Animated.Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            Login To your Account
          </Animated.Text>
          <CustomTextInput label="Enter username"  style={{
            width: "80%",
            height: "7%",
            marginBottom:10

          }} />
          <CustomTextInput label="Enter password"
           style={{
            width: "80%",
            height: "7%",
            marginBottom:30
          }}/>
          <CustomButton
          colorArray={['black','black']}
          label='Login' onPress={()=>{router.replace('/(auth)')}}/>
        </Animated.View>
      </LinearGradient>
        </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = {
    gradient:{
        flex:1
    }
}