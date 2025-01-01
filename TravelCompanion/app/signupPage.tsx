import {
    ActivityIndicator, Alert,
    Animated,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import {createAvatar} from "@dicebear/core";
import {lorelei} from "@dicebear/collection";
import {SvgXml} from "react-native-svg";
import CustomTextInput from "@/components/CustomTextInput";
import {Colors} from "@/assets/colors/colors";
import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import EditButton from "@/components/EditButton";
import {userRegistration} from "@/api/authApi";
import {useStore} from "@/utils/store";
import {loreliOptions} from "@/utils/loreliOptions";

const SignupPage = () => {
    const {setUsername, setAge, setGender, setSvg, setFullname} = useStore()
    const [fullName, setFormFullname] = useState("");
    const [username, setFormUsername] = useState("");
    const [password, setFormPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setFormAge] = useState("");
    const [gender, setFormGender] = useState("");
    const [securePassword, setFormSecurePassword] = useState(true);
    const [secureConfirmPassword, setFormSecureConfirmPassword] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)
    const fifthRef = useRef(null)

    const avatar = createAvatar(lorelei, {
        seed: username,
        ...loreliOptions
    });
    const svg = avatar.toString();
    const progress = useRef(new Animated.Value(0)).current;
    const register = async () => {
        const payload = {
            fullName: fullName,
            password: password,
            age: age,
            gender: gender,
            svg: svg,
            username: username,
        }
        return await userRegistration(payload)
    }

    useEffect(() => {
        Animated.spring(progress, {toValue: 1, useNativeDriver: false, tension: 10}).start();
    }, []);
    return (
        <SafeAreaView style={[globalStyles.container]} edges={[]}>
            {!isLoading ?
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
                                    setFormUsername(value);
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
                                    setFormAge(value);
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
                                    setFormGender("Male")
                                }}
                                                  style={[styles.touchable, {backgroundColor: gender == 'Male' ? Colors.Blue : 'white'}]}>
                                    <Text style={[styles.touchableText, {color: gender == 'Male' ? 'white' : 'black'}]}>
                                        Male
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setFormGender("Female")
                                }}
                                                  style={[styles.touchable, {backgroundColor: gender == 'Female' ? Colors.Blue : 'white'}]}>
                                    <Text
                                        style={[styles.touchableText, {color: gender == 'Female' ? 'white' : 'black'}]}>
                                        Female
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.text]}>Full name: </Text>
                            <CustomTextInput
                                placeholder="Set full name"
                                value={fullName}
                                onChangeText={(value) => {
                                    setFormFullname(value);
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
                                secureTextEntry={securePassword}
                                placeholder="Set password"
                                value={password}
                                onChangeText={(value) => {
                                    setFormPassword(value);
                                }}
                                style={[styles.input]}
                                containerStyle={[styles.inputContainer]}
                                ref={fourthRef}
                                returnKeyType={'next'}
                                onSubmitEditing={() => {
                                    // @ts-ignore
                                    fifthRef.current.focus()
                                }}
                                icon={true}
                                onIconClick={() => setFormSecurePassword(!securePassword)}
                                iconName={!securePassword ? 'eye' : 'eye-off'}
                            />
                            <Text style={[styles.text]}>Confirm Password: </Text>
                            <CustomTextInput
                                secureTextEntry={secureConfirmPassword}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChangeText={(value) => {
                                    setConfirmPassword(value);
                                }}
                                style={[styles.input]}
                                containerStyle={[styles.inputContainer]}
                                ref={fifthRef}
                                returnKeyType={'done'}
                                icon={true}
                                onIconClick={() => setFormSecureConfirmPassword(!secureConfirmPassword)}
                                iconName={!secureConfirmPassword ? 'eye' : 'eye-off'}
                            />
                            <Animated.View style={{
                                width: '60%',
                                height: 60,
                                borderWidth: 1,
                                marginTop: 20,
                                justifyContent: 'center',
                                borderRadius: 100,
                                overflow: 'hidden',
                                alignSelf: 'center',
                                transform: [{
                                    translateY: progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [200, 0]
                                    })
                                }]
                            }}>
                                <EditButton onPress={async () => {
                                    if (!username || !password || !confirmPassword || !fullName || !age || !gender) {
                                        Alert.alert('fields are missing')
                                    } else {
                                        if (password === confirmPassword) {
                                            setLoading(true);
                                            const response = await register()
                                            console.log("response : ", response)
                                            if (response.success === true) {
                                                setFullname(fullName)
                                                setAge(age)
                                                setGender(gender)
                                                setSvg(svg)
                                                setUsername(username)
                                                router.navigate('/(auth)')
                                            }else {
                                                Alert.alert(response.message)
                                            }
                                                setLoading(false);
                                        }else{
                                            Alert.alert('passwords do not match')
                                        }
                                    }
                                }} style={{backgroundColor: 'black'}} title={'Submit'}/>
                            </Animated.View>
                        </ScrollView>
                    </ImageBackground>
                </KeyboardAvoidingView>
                : <View style={[globalStyles.mainView, {alignItems: 'center',justifyContent: 'center'}]}>
                    <ActivityIndicator size={'large'} color={'black'}/>
                </View>}
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
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 30,
        color: 'black',
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
    text: {
        fontSize: 16,
        marginLeft: 16,
        fontFamily: 'Nunito-Medium',
        color: 'black'
    },
    input: {
        paddingLeft: 16,
        height: "100%",
        marginVertical: 20,
        flex: 1,
        borderRadius: 20,

    },
    inputContainer: {
        shadowColor: Colors.Blue,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .6,
        shadowRadius: 5,
        elevation: 10,
        borderRadius: 20,
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
    },
    touchableRow: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        gap: 5,
        paddingHorizontal: 26,
        paddingVertical: 10
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