import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: "orange",
      },
      headerBackTitleStyle:{
        fontFamily: `bold`,
      }
    }}>
      <Stack.Screen name="index" options={{
        title: "API USERS"
      }} />
      <Stack.Screen name="SingleUser" options={{
        title: "User Details",
      }} />
    </Stack>
  );
}
