import { Colors } from "@/assets/colors/colors";
import { router, Tabs } from "expo-router";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

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
                    style={props.focused ? { transform:[{ scale:1.1},{translateY:-4}]} : {}}
                    size={30}
                  ></Ionicons>
                );
              },
            }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                color={"white"}
                name={props.focused ? "people" : "people-outline"}
                style={props.focused ? { transform:[{ scale:1.1},{translateY:-4}]} : {}}
                size={30}
              ></Ionicons>
            );
          },
        }}
        name="groups"
      />
      <Tabs.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                color={"white"}
                name={props.focused ? "chatbubbles" : "chatbubbles-outline"}
                style={props.focused ? { transform:[{ scale:1.1},{translateY:-4}]} : {}}
                size={30}
              ></Ionicons>
            );
          },
        }}
        name="tags"
      />
      <Tabs.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                color={"white"}
                name={props.focused ? "person" : "person-outline"}
                style={props.focused ? { transform:[{ scale:1.1},{translateY:-4}]} : {}}
                size={30}
              ></Ionicons>
            );
          },
        }}
        name="profile"
      />
    </Tabs>
  );
}
