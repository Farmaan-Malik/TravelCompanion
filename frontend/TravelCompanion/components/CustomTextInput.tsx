import { View, Text, TextInput } from "react-native";
import React, { useRef, useState } from "react";

const CustomTextInput = ({
  label = "",
  style = {},
  onChangeText = (value: string) => {},
}) => {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 8,
        overflow: "hidden",
        ...style,
      }}
    >
      <TextInput
        placeholder={label}
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          paddingHorizontal: 10,
          overflow:'scroll'
        }}
        value={text}
        onChangeText={(value) => {
          setText(value);
          onChangeText(value);
        }}
      />
    </View>
  );
};

export default CustomTextInput;
