import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "@/assets/colors/colors";

type Props = {
    title: string,
}

const OutlineButton = ({title}:Props) => {
    return (
        <TouchableOpacity
            style={{
                width: Dimensions.get("window").width / 5,
                height: Dimensions.get("window").height / 30,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <LinearGradient
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 50,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                colors={Colors.PrimaryGradient}
            >
                <View
                    style={{
                        width: Dimensions.get("window").width / 5 - 4,
                        height: Dimensions.get("window").height / 30 - 4,
                        backgroundColor: "white",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#9184EE",
                            fontSize: 14,
                            fontWeight: "500",
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default OutlineButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

