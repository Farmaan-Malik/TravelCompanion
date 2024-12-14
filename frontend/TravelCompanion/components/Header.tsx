import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/assets/colors/colors'
import OutlineIconButton from './OutlineIconButton'

interface HeaderProps {
    onPress1: () => void;
    onPress2: () => void;
    style?: object;
  }


const Header = ({onPress1,onPress2,style={}}:HeaderProps) => {
  return (
    <View
            style={[
              {
                width: "100%",
                height: 'auto',
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-around",
                paddingVertical:10,
               ...style
              },
            ]}
          >
            <OutlineIconButton
              style={{ borderRadius: 8 }}
              onPress={() => {
                onPress1
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
               onPress2
              }}
              iconName='search-outline'
            />
          </View>
  )
}

export default Header