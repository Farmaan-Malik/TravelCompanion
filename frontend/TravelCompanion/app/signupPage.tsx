import { View, Text, Image, Animated, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/assets/styles/globalStyles";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { SvgXml } from "react-native-svg";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@/assets/colors/colors";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/build/Ionicons";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const avatar = createAvatar(lorelei, {
    seed: username,
  });
  const svg = avatar.toString();
  console.log(svg);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(progress, { toValue: 1, useNativeDriver: false, tension:10 }).start();
  }, []);
  return (
    <SafeAreaView style={[globalStyles.safeAreaView]} edges={[]}>
      <LinearGradient
        colors={Colors.PrimaryGradient}
        style={[globalStyles.view]}
      >
        <View style={{width:'100%',height:40,position:'absolute',top:50,justifyContent:'center',alignItems:'flex-start',left:10}}>
            <Ionicons onPress={()=>{router.back()}} size={30} name="chevron-back"/>
          </View>
        <Animated.View style={{transform:[{scale:progress.interpolate({inputRange:[0,1], outputRange:[0,1]})}]}}>
          <SvgXml style={{ width: 150, height: 150 }} xml={svg}></SvgXml>
        </Animated.View>
        <CustomTextInput
          label="Set username"
          onChangeText={(value) => {
            setUsername(value);
          }}
          style={{
            borderWidth: 0.2,
            width: "80%",
            height: "7%",
            borderRadius: 20,
            marginBottom: 20,
          }}
        />
        <CustomTextInput
          label="Set password"
          onChangeText={(value) => {
            setUsername(value);
          }}
          style={{
            borderWidth: 0.2,
            width: "80%",
            height: "7%",
            borderRadius: 20,
            marginBottom: 20,
          }}
        />
        <CustomTextInput
          label="Confirm password"
          onChangeText={(value) => {
            setUsername(value);
          }}
          style={{
            borderWidth: 0.2,
            width: "80%",
            height: "7%",
            borderRadius: 20,
            marginBottom: 20,
          }}
        />
        <Animated.View style={{width:'100%', height:'10%',justifyContent:'center',alignItems:'center',transform:[{translateY:progress.interpolate({inputRange:[0,1], outputRange:[200,0]})}]}}>
        <CustomButton
          style={{ marginTop: 50, width: "40%" }}
          label="Signup"
          onPress={() => {
            // if (password == confirmPassword && username.length >= 8) {
            //     //do something
            router.navigate('/(auth)')
            // }
            // else{
            //     Alert.alert('error message here')
            // }
          }}
          colorArray={["black", "black"]}
        />
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignupPage;
