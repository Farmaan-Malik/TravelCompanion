import {StyleSheet} from "react-native";
import {screenWidth} from "@/app/_layout";

export const  globalStyles = StyleSheet.create({
    container: {
        // flex: 1,
        width:screenWidth,
        height:'100%',
        backgroundColor: '#F5FCFF',
        // padding:8,
        // borderWidth:1,
        alignItems: 'center',
    },
    mainView: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width:screenWidth,
        justifyContent:'flex-start',
    },
});