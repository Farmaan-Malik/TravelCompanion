import {View, Text, Image, StyleSheet, ScrollView, Animated} from "react-native";
import React, {useEffect, useRef} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import Header from "@/components/Header";
import {SvgXml} from "react-native-svg";
import {useStore} from "@/utils/store";
import {screenWidth} from "@/app/_layout";
import EditButton from "@/components/EditButton";
import {router} from "expo-router";
import {Colors} from "@/assets/colors/colors";
import LinearGradient from "react-native-linear-gradient";


const ProfileTab = () => {
    const {svg, username, age, gender} = useStore(state => state);
    const anim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.spring(anim, {toValue: 1, stiffness: 30, useNativeDriver: true}).start()
    })
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.container]}>
            <Header
                onPress1={() => {
                }}
                onPress2={() => {
                }}
                style={{
                    width: "100%",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    shadowColor: "black",
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    shadowOffset: {width: 0, height: 10},
                    zIndex: 2,
                    elevation: 80,
                    transform: [{translateY:anim.interpolate({inputRange:[0,1],outputRange:[-100,0]})}]
                }}
            />

            <LinearGradient colors={['rgba(128,231,218,0)', 'rgba(128,231,218,0.53)']}>
                <ScrollView contentContainerStyle={[globalStyles.mainView, styles.mainScrollView]}>
                    <Image resizeMode={'stretch'} style={[styles.image]}
                           source={require('@/assets/images/profileBg.png')}/>
                    <Animated.View style={[styles.svgContainer,{transform:[{scale:anim.interpolate({inputRange:[0,1],outputRange:[0,1]})}]}]}>
                        <View style={[styles.svgWrapper]}>
                            <SvgXml style={[styles.svg]} xml={svg}/>
                        </View>
                        <Text style={[styles.svgText]}>{username}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.userDetailContainer,{transform:[{translateX:anim.interpolate({inputRange:[0,1],outputRange:[-300,0]})}]}]}>
                        <Text style={[styles.text]}>{age} yrs,</Text>
                        <Text style={[styles.text]}>{gender}</Text>
                    </Animated.View>
                    <View style={[styles.buttonRow, {width: '30%', alignSelf: 'flex-end', marginEnd: 20}]}>
                        <EditButton onPress={() => {
                            router.navigate('/editProfile')
                        }} title={'Edit Profile'}/>
                    </View>

                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default ProfileTab;
const styles = StyleSheet.create({
    svg: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        borderRadius: 100,

    },
    svgContainer: {
        width: screenWidth,
        height: screenWidth / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgWrapper: {
        position: "absolute",
        top: -60,
        borderRadius: 100,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 1},
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
    },
    mainScrollView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonRow: {
        flexDirection: 'row',
        width: '80%',
        padding: 10,
        justifyContent: 'space-between',

    },
    svgText: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Nunito-ExtraLight',
        fontSize: 18,
    },
    image: {
        width: screenWidth
    },
    userDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    }
})