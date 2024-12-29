import { Colors } from "@/assets/colors/colors";
import { router, Tabs } from "expo-router";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Button, View} from "react-native";

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        animation: "shift",
        headerShown: false,
        tabBarPosition: "bottom",
        tabBarBackground: () => (
          <LinearGradient
            style={{ width: "100%", height: "100%" }}
            colors={Colors.PrimaryGradient}
          ></LinearGradient>
        ),
      }}
    >
      <Tabs.Screen
        options={{
            tabBarIcon(props) {
                return (
                  <Ionicons
                    color={"white"}
                    name={props.focused ? "home" : "home-outline"}
                    size={25}
                  ></Ionicons>
                );
              },
            }}
        initialParams={{ drawerNavigation: true }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                color={"white"}
                name={props.focused ? "people" : "people-outline"}
                size={25}
              ></Ionicons>
            );
          },
        }}
        name="(search)"
      />
      <Tabs.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                color={"white"}
                name={props.focused ? "chatbubbles" : "chatbubbles-outline"}
                size={25}
              ></Ionicons>
            );
          },
        }}
        name="message"
      />
      <Tabs.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                color={"white"}
                name={props.focused ? "person" : "person-outline"}
                size={25}
              ></Ionicons>
            );
          },
        }}
        name="(profileScreens)"
      />
    </Tabs>
  );
}