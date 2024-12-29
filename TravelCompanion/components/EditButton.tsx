import React from 'react';
import {Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Colors} from "@/assets/colors/colors";
import {TouchableProps} from "react-native-svg";

type Props = {
    onPress?: () => void;
    title: string;
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>
}

const EditButton = ({title,onPress,textStyle,style}:Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
            <Text style={[styles.text,textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default EditButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.Green,
        borderRadius:8,
        shadowOffset:{width: 0, height: 1},
        shadowColor:Colors.Blue,
        shadowOpacity: 0.8,
        shadowRadius:3,
        elevation:5,
        paddingVertical:5
    },
    text: {
        fontSize: 14,
        fontFamily:'Nunito-ExtraBold',
        color:'white',
    }
});

