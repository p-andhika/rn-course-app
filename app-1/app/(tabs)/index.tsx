import Button from "@/components/button";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  function handleNavigation() {
    router.push({
      pathname: "/profile/[id]",
      params: { id: 2 },
    });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Link href="/settings">Go to Settings</Link>
      <Link href="/profile" asChild>
        <Button>Go to Profile</Button>
      </Link>
      <Button onPress={handleNavigation}>Go to Random Profile</Button>
    </View>
  );
}
