import {Stack, useNavigation} from "expo-router";
import {Dimensions} from "react-native";
import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {DrawerActions} from "@react-navigation/native";

export const  {width:screenWidth,height:screenHeight} = Dimensions.get("window");

export default function RootLayout() {
  return (
      <GestureHandlerRootView>

    <Stack screenOptions={{headerShown:false,}}>
      <Stack.Screen
      name="index"
      options={{title:'Landing'}}
      />
      <Stack.Screen
          name="(auth)"
          options={{title:'Home'}}
      />
      <Stack.Screen
          name="loginPage"
          options={{title:'Login'}}
      />
      <Stack.Screen
          name="signupPage"
          options={{title:'Signup'}}
      />
    </Stack>

      </GestureHandlerRootView>
  );
}
