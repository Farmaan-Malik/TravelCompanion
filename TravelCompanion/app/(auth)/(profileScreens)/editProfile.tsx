import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Image,
    ScrollView, Animated
} from 'react-native';
// import {useStore} from "@/utils/utils/utils";
import {createAvatar} from "@dicebear/core";
import {lorelei} from "@dicebear/collection";
import {SvgXml} from "react-native-svg";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
// import Switch from "@/components/switch";
import {router} from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useStore} from "@/utils/store";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import CustomOutlineButton from "@/components/CustomOutlineButton";
import EditButton from "@/components/EditButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors} from "@/assets/colors/colors";
import {screenHeight} from "@/app/_layout";

const EditProfile = () => {
    const {
        setUsername,
        fullname,
        setFullname,
        setSvg,
        username,
        age,
        gender,
        setGender,
        setAge
    } = useStore(state => state)
    const [formName, setFormName] = useState<string>(username);
    const [formFullname, setFormFullname] = useState<string>(fullname);
    const [formAge, setFormAge] = useState<string>(age);
    const [formGender, setFormGender] = useState<string>(gender)
    const firstRef = useRef<TextInput>(null)
    const secondRef = useRef<TextInput>(null)
    const thirdRef = useRef<TextInput>(null)
    const avatar = createAvatar(lorelei, {
        seed: formName,
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
    const svg = avatar.toString()
    const submit = async () => {
        setUsername(formName)
        setSvg(svg)
        setAge(formAge)
        setFullname(formFullname)
    }
    const anim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.spring(anim,{toValue:1,useNativeDriver: true,stiffness:60}).start()
    })
    return (
        <SafeAreaView edges={[]} style={[globalStyles.container]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                  style={[globalStyles.mainView, {justifyContent: 'flex-end', marginTop: 50}]}>
                <Ionicons onPress={() => router.back()} size={30} style={[styles.back]} name={'close'}/>
                <Animated.ScrollView style={[{transform:[{translateY:anim.interpolate({inputRange:[0,1],outputRange:[screenHeight,0]})}]}]}>
                    <View style={[styles.svgContainer]}>
                        <SvgXml style={[styles.svg,]} xml={svg}/>
                    </View>
                    <Text style={[styles.headerText]}>Full Name:</Text>
                    <CustomTextInput
                        value={formFullname}
                        ref={firstRef} onSubmitEditing={() => {
                        // @ts-ignore
                        secondRef.current.focus()
                    }}
                        returnKeyType={'next'} containerStyle={{width: '80%', alignSelf: 'center'}}
                        placeholder={'Enter new Full name'}
                        onChangeText={text => setFormFullname(text)}/>
                    <Text style={[styles.headerText]}>Username:</Text>
                    <CustomTextInput
                        value={formName}
                        onSubmitEditing={() => {
                            // @ts-ignore
                            thirdRef.current.focus()
                        }} returnKeyType={'next'}
                        ref={secondRef} containerStyle={{width: '80%', alignSelf: 'center'}}
                        placeholder={'Enter new Username'}
                        onChangeText={text => setFormName(text)}/>
                    <Text style={[styles.headerText]}>Age:</Text>
                    <CustomTextInput
                        value={formAge}
                        ref={thirdRef} keyboardType={'number-pad'}
                        containerStyle={{width: '80%', alignSelf: 'center'}} placeholder={'Enter new Age'}
                        onChangeText={text => setFormAge(text)}/>
                    <Text style={[styles.headerText]}>Gender:</Text>
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
                    <EditButton style={{width: '80%', marginTop: 50, paddingVertical: 8, alignSelf: 'center'}}
                                title={'Submit'} textStyle={{fontSize: 18,}}
                                onPress={async () => {
                                    await submit().then(router.back)

                                }}
                    />
                </Animated.ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    svg: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
    svgContainer: {
        overflow: 'hidden',
        width: 130,
        height: 130,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 100,
        alignSelf: 'center'
    },
    headerText: {
        fontSize: 15,
        fontFamily: 'Nunito-ExtraBold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginVertical: 8,
    },
    back: {
        marginLeft: 20,
    },
    touchableRow: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        gap: 10,
        paddingHorizontal: 26,
        paddingVertical:10
    },
    touchable: {
        flex: 1,
        borderRadius: 16,
        shadowColor: Colors.Blue,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 8,
    },
    touchableText: {
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
        padding: 12,
    }

});

