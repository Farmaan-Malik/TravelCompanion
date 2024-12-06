import { Text, View, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "@/assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomOutlineButton from "@/components/CustomOutlineButton";
import { router } from "expo-router";
import MaskedText from "@/components/MaskedText";
import { globalStyles } from "@/assets/styles/globalStyles";

export default function Index() {
  const [fonts] = useFonts({
    "Nova-Oval": require("@/assets/fonts/NovaOval-Regular.ttf"),
    Nunito: require("@/assets/fonts/Nunito.ttf"),
    NunitoItalic: require("@/assets/fonts/Nunito-Italic.ttf"),
  });
  return (
    <SafeAreaView
edges={[]}
      style={[globalStyles.safeAreaView]}
    >
      <ImageBackground
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical:20
        }}
        source={require("@/assets/images/wavesLogin.png")}
        resizeMode="cover"
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 66,
                fontFamily: "NovaOval",
                color: Colors.Green,
              }}
            >
              Tag
            </Text>
            <Text
              style={{
                fontSize: 66,
                fontFamily: "NovaOval",
                color: Colors.Blue,
              }}
            >
              Along
            </Text>
          </View>
          <Text
            style={{ paddingTop: 10, fontSize: 16, fontFamily: "NunitoItalic" }}
          >
            Travel Smarter, Explore Further.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "60%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <MaskedText text="Explore the World, Together." fontSize={14}/>
          <CustomButton onPress={()=>{ router.navigate("/loginPage")}}/>
          <CustomOutlineButton onPress={()=>{ router.navigate("/signupPage")}}  />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
