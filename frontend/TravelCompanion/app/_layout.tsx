import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen
      name="index"
      />
       <Stack.Screen
       options={{headerShown:true}}
      name="loginPage"
      />
       <Stack.Screen
      name="signupPage"
      />
    </Stack>
    
  );
}
