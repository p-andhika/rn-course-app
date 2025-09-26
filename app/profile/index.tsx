import Button from "@/components/button";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Profile Screen</Text>
      <Link dismissTo href="/" asChild>
        <Button style={{ marginTop: 16 }}>Go back</Button>
      </Link>
    </View>
  );
}
