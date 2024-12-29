import {View, Text, Animated, ImageBackground} from "react-native";
import React, {useEffect, useRef} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import {Colors} from "@/assets/colors/colors";
import CustomTextInput from "@/components/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";
import {Header} from "react-native/Libraries/NewAppScreen";
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
                <ImageBackground
                    style={[styles.gradient]}
                    source={require("../assets/images/wavesLogin.png")}
                >
                    <Ionicons onPress={()=>{
                        router.back()
                    }} style={[styles.icon]} name={'close'} size={30} color={'grey'}/>

                    <Animated.View
                        style={{
                            flex: 1,
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
                                fontSize: 26,
                                marginBottom: 20,
                                fontFamily: 'Nunito-ExtraBold'
                            }}
                        >
                            Login To your Account
                        </Animated.Text>
                        <CustomTextInput
                            value={''}
                            placeholder="Enter username"
                            containerStyle={{
                                width: "80%",
                                height: 50,
                                marginBottom: 10

                            }}
                            onChangeText={text => {
                            }}/>
                        <CustomTextInput
                            value={''}
                            placeholder="Enter password"
                            containerStyle={{
                                width: "80%",
                                height: 50,
                                marginBottom: 30
                            }}
                            onChangeText={text => {
                            }}/>
                        <CustomButton

                            colorArray={['black', 'black']}
                            label='Login' onPress={() => {
                            router.replace('/(auth)')
                        }}/>
                    </Animated.View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default LoginPage;

const styles = {
    gradient: {
        flex: 1
    },
    icon:{
        marginTop:50,
        marginLeft:10
    }
}