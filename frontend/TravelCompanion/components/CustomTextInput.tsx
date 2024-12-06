import { View, Text, TextInput } from "react-native";
import React, { useRef } from "react";

const CustomTextInput = ({label = ''}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={label}
        style={{
          backgroundColor: "white",
          width: "90%",
          height: "80%",
          borderRadius: 20,
        //   borderWidth:0.5,
        //   borderColor:Colors.Blue,
          paddingHorizontal: 10,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 8,
         
        }}
      />
    </View>
  );
};

export default CustomTextInput;
