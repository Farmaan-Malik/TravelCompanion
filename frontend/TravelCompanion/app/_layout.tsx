import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false,gestureEnabled:false}}>
      <Stack.Screen
      name="index"
      />
       <Stack.Screen
      name="loginPage"
      />
       <Stack.Screen
      name="signupPage"
      />
    </Stack>
    
  );
}
