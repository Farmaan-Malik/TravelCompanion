import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import Header from "@/components/Header";
import {SvgXml} from "react-native-svg";
import {useStore} from "@/utils/store";
import {screenWidth} from "@/app/_layout";
import {toPng} from "@dicebear/converter";

const ProfileTab = () => {
    const {svg, username,age,gender} = useStore(state => state);
    return (
        <SafeAreaView edges={[]} style={[globalStyles.container]}>
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
                }}
            />
            <ScrollView contentContainerStyle={[globalStyles.mainView, styles.mainScrollView]}>
                <Image resizeMode={'stretch'} style={[styles.image]} source={require('@/assets/images/profileBg.png')}/>
                <View style={[styles.svgContainer]}>
                    <View style={[styles.svgWrapper]}>
                <SvgXml  style={[styles.svg]} xml={svg}/>
                    </View>
                <Text style={[styles.svgText]}>{username}</Text>
                </View>
                <View style={[styles.userDetailContainer]}>
                    <Text style={[styles.text]}>{age} yrs,</Text>
                    <Text style={[styles.text]}>{gender}</Text>

                </View>
                <View style={[styles.buttonRow]}>
                    <Text>Button 1</Text>
                    <Text>Button 2</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileTab;
const styles = StyleSheet.create({
    svg: {
        width: screenWidth/3,
        height: screenWidth/3,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:100,

    },
    svgContainer: {
        // borderWidth: 1,
        width: screenWidth,
        height: screenWidth/3,
        justifyContent:'center',
        alignItems: 'center',
    },
    svgWrapper: {
        // borderWidth:1,
        position: "absolute",
        top: -60,
        borderRadius:100,
        shadowColor:'black',
        shadowOpacity:1,
        shadowRadius:2,
        backgroundColor:'white',
        shadowOffset:{width:0,height:1},
        elevation:10,
        alignItems:'center',
        justifyContent:'center',
        overflow: "hidden",
    },
    mainScrollView:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'white',
    },
    buttonRow: {
        // borderWidth: 1,
        flexDirection:'row',
        width: '80%',
        padding:10,
        justifyContent:'space-between',

    },
    svgText: {
        // borderWidth: 1,
        width:'100%',
        position: 'absolute',
        bottom: 0,
        textAlign:'center',
        fontFamily:'Nunito',
        fontSize:20,
        fontWeight:'700',
    },
    text: {
        // borderWidth: 1,
        // width:'100%',
        textAlign:'center',
        fontFamily:'Nunito',
        fontSize:18,
        fontWeight:'700',
    },
    image: {
        width:screenWidth
    },
    userDetailContainer: {
        flexDirection:'row',
        justifyContent:'center',
        // borderWidth:StyleSheet.hairlineWidth,
        // width:screenWidth,
        gap:10
    }
})