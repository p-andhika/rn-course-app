import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RandomProfile() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Random Profile id: {id}</Text>
    </View>
  );
}
