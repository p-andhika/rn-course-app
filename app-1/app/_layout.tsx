import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          title: "Tabs",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          title: "Settings",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
