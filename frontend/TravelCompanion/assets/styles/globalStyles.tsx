import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    safeAreaView:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems:'center',
    },
    view:{
        display:'flex',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
})