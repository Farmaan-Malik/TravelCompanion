import {
    View,
    Text,
    Image,
    Animated,
    Alert,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity, ImageBackground
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import {createAvatar} from "@dicebear/core";
import {lorelei} from "@dicebear/collection";
import {SvgXml} from "react-native-svg";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "@/assets/colors/colors";
import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import EditButton from "@/components/EditButton";

const SignupPage = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)
    const fifthRef = useRef(null)

    const avatar = createAvatar(lorelei, {
        seed: username,
        backgroundColor: ['8EB8E5', '9184EE'],
        backgroundType: ['gradientLinear'],
        backgroundRotation: [0, 180],
        freckles: ["variant01"],
        frecklesProbability: 50,
        glasses: ["variant01", "variant02", "variant03", "variant04", "variant05"],
        glassesProbability: 20,
        hairAccessories: ["flowers"],
        hairAccessoriesProbability: 30,
        hairAccessoriesColor: ['0f0f0f']
    });
    console.log("Avatar", avatar)
    const svg = avatar.toString();
    console.log("SVG", svg);
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(progress, {toValue: 1, useNativeDriver: false, tension: 10}).start();
    }, []);
    return (
        <SafeAreaView style={[globalStyles.container]} edges={[]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <ImageBackground
                    source={require("../assets/images/wavesLogin.png")}
                    style={[globalStyles.mainView, {justifyContent: 'center'}]}
                >
                    <View style={[styles.header]}>
                        <Ionicons onPress={() => {
                            router.back()
                        }} color={'grey'} style={{marginLeft: 8}} size={30}
                                  name={'close'}/>
                        <Text style={[styles.headerText]}>Create an account</Text>
                    </View>
                    <ScrollView contentContainerStyle={{paddingTop: 30}}>
                        <Animated.View style={[styles.svgContainer]}>
                            <SvgXml style={[styles.svg]} xml={svg}></SvgXml>
                        </Animated.View>
                        <Text style={[styles.text]}>Username: </Text>
                        <CustomTextInput
                            placeholder="Set username"
                            value={username}
                            onChangeText={(value) => {
                                setUsername(value);
                            }}
                            style={[styles.input]}
                            containerStyle={[styles.inputContainer]}
                            ref={firstRef}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                                // @ts-ignore
                                secondRef.current.focus()
                            }}
                        />

                        <Text style={[styles.text]}>Age: </Text>
                        <CustomTextInput
                            placeholder="Set age"
                            value={age}
                            onChangeText={(value) => {
                                setAge(value);
                            }}
                            submitBehavior={'submit'}
                            keyboardType={'numeric'}
                            style={[styles.input]}
                            containerStyle={[styles.inputContainer]}
                            ref={secondRef}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                                // @ts-ignore
                                thirdRef.current.focus()
                            }}
                        />
                        <Text style={[styles.text]}>Gender: </Text>
                        <View style={[styles.touchableRow]}>
                            <TouchableOpacity onPress={() => {
                                setGender("Male")
                            }} style={[styles.touchable, {backgroundColor: gender == 'Male' ? Colors.Blue : 'white'}]}>
                                <Text style={[styles.touchableText, {color: gender == 'Male' ? 'white' : 'black'}]}>
                                    Male
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setGender("Female")
                            }}
                                              style={[styles.touchable, {backgroundColor: gender == 'Female' ? Colors.Blue : 'white'}]}>
                                <Text style={[styles.touchableText, {color: gender == 'Female' ? 'white' : 'black'}]}>
                                    Female
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.text]}>Full name: </Text>
                        <CustomTextInput
                            placeholder="Set full name"
                            value={fullName}
                            onChangeText={(value) => {
                                setFullName(value);
                            }}
                            style={[styles.input]}
                            containerStyle={[styles.inputContainer]}
                            ref={thirdRef}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                                // @ts-ignore
                                fourthRef.current.focus()
                            }}
                        />

                        <Text style={[styles.text]}>Password: </Text>
                        <CustomTextInput
                            placeholder="Set password"
                            value={password}
                            onChangeText={(value) => {
                                setPassword(value);
                            }}
                            style={[styles.input]}
                            containerStyle={[styles.inputContainer]}
                            ref={fourthRef}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                                // @ts-ignore
                                fifthRef.current.focus()
                            }}
                        />
                        <Text style={[styles.text]}>Confirm Password: </Text>
                        <CustomTextInput
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChangeText={(value) => {
                                setConfirmPassword(value);
                            }}
                            style={[styles.input]}
                            containerStyle={[styles.inputContainer]}
                            ref={fifthRef}
                            returnKeyType={'done'}
                        />
                        <Animated.View style={{
                            width: '60%',
                            height: 60,
                            borderWidth:1,
                            marginTop: 20,
                            justifyContent: 'center',
                            borderRadius: 100,
                            overflow: 'hidden',
                            alignSelf: 'center',
                            transform: [{translateY: progress.interpolate({inputRange: [0, 1], outputRange: [200, 0]})}]
                        }}>
                            <EditButton style={{backgroundColor:'black'}} title={'Submit'}/>
                        </Animated.View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignupPage;
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    headerText:{
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 30,
        color:'black',
    },
    svgContainer: {
        marginBottom: 15,
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 100,
        overflow: 'hidden',
    },
    svg: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        paddingLeft: 16,
        width: "90%",
        height: "100%",
        borderRadius: 20,
        marginVertical: 20,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        marginLeft: 16,
        fontFamily: 'Nunito-Medium',
        color: 'black'
    },
    inputContainer: {
        shadowColor: Colors.Blue,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .6,
        shadowRadius: 5,
        elevation: 10,
    },
    touchableRow: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        gap: 5,
        paddingHorizontal: 26,
        paddingVertical:10
    },
    touchable: {
        flex: 1,
        borderRadius: 16,
        borderWidth: StyleSheet.hairlineWidth,
        shadowColor: Colors.Blue,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
    },
    touchableText: {
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
        padding: 12,
    }
})