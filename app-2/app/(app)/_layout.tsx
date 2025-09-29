import { useAuth } from "@/context/auth";
import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function AppLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="deeplink"
        options={{
          headerShown: true,
          presentation: "modal",
          title: "Deep Link",
        }}
      />
    </Stack>
  );
}
