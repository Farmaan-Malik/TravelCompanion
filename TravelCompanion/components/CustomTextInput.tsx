import {
    View,
    Text,
    TextInput,
    KeyboardTypeOptions,
    TextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle
} from "react-native";
import React, {forwardRef, useRef, useState} from "react";
import {Colors} from "@/assets/colors/colors";

interface Props extends TextInputProps {
    placeholder: string,
    keyboardType?: KeyboardTypeOptions,
    onChangeText: (text: string) => void,
    style?:StyleProp<TextStyle>,
    containerStyle?:StyleProp<ViewStyle>,
}


const CustomTextInput= forwardRef<TextInput, Props>((props, ref) => {
    return (
        <View
            style={[{
                height: 50,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 80,
                shadowColor: Colors.Blue,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.4,
                shadowRadius: 4,
                elevation: 8,
            },
            props.containerStyle]}
        >
            <TextInput
                style={[{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    paddingHorizontal: 20,
                    overflow: 'scroll',
                    borderRadius: 80,
                    fontFamily:'Nunito-Regular'
                },
                props.style
                ]}
                {...props}
                ref={ref}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(value) => {
                    props.onChangeText(value);
                }}
            />
        </View>
    );
});

export default CustomTextInput;
