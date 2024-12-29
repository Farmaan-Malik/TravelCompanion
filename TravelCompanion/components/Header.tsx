import {View, Text, StyleSheet, Animated, StyleProp, ViewStyle} from 'react-native'
import React from 'react'
import { Colors } from '@/assets/colors/colors'
import OutlineIconButton from './OutlineIconButton'
import {screenHeight, screenWidth} from "@/app/_layout";

interface HeaderProps {
    onPress1: () => void;
    onPress2: () => void;
    style?: StyleProp<ViewStyle>;
  }


const Header = ({onPress1,onPress2,style={}}:HeaderProps) => {
  return (
    <Animated.View
            style={[
              styles.container,
                style
            ]}
          >
            <OutlineIconButton
              style={{ borderRadius: 8 }}
              onPress={() => {
                onPress1()
              }}
            />
            <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "NovaOval",
                color: Colors.Green,
              }}
            >
              Tag
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "NovaOval",
                color: Colors.Blue,
              }}
            >
              Along
            </Text>
          </View>
          <OutlineIconButton
              style={{ borderRadius: 8 }}
              onPress={() => {
               onPress2()
              }}
              iconName='search-outline'
            />
          </Animated.View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width:screenWidth,
        height: screenHeight/9,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        // paddingTop: 50,
        justifyContent: "space-around",
        // paddingBottom:15,

}
}
)