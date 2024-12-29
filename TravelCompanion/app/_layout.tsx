import {Stack, useNavigation} from "expo-router";
import {ActivityIndicator, Dimensions, Platform, View} from "react-native";
import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {DrawerActions} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {Colors} from "@/assets/colors/colors";

export const  {width:screenWidth,height:screenHeight} = Dimensions.get("window");

export default function RootLayout() {
  const [fonts] = useFonts({
    "NovaOval": require("@/assets/fonts/NovaOval-Regular.ttf"),
    "Nunito": require("@/assets/fonts/Nunito.ttf"),
    "Nunito-Italic": require("@/assets/fonts/Nunito-Italic.ttf"),
    "Nunito-SemiBold": require("@/assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Regular": require("@/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("@/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("@/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-ExtraBold": require("@/assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraLight": require("@/assets/fonts/Nunito-ExtraLight.ttf"),
    "Nunito-BoldItalic": require("@/assets/fonts/Nunito-BoldItalic.ttf"),


  });
  if(!fonts){
    return(
    <View style={{backgroundColor:Colors.Green,flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={90}/>
    </View>)
  }else {
    return (

        <GestureHandlerRootView>

          <Stack screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            statusBarBackgroundColor: Platform.OS !== 'ios' ? 'transparent' : undefined
          }}>
            <Stack.Screen
                name="index"
                options={{title: 'Landing'}}
            />
            <Stack.Screen
                name="(auth)"
                options={{title: 'Home'}}
            />
            <Stack.Screen
                name="loginPage"
                options={{title: 'Login'}}
            />
            <Stack.Screen
                name="signupPage"
                options={{title: 'Signup'}}
            />
          </Stack>

        </GestureHandlerRootView>
    );
  }
}
