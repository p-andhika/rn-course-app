import Button from "@/components/button";
import CustomComponent from "@/components/custom-component";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomComponent name="Custom" />
      <Button onPress={() => alert("pressed!")}>Press me</Button>
    </View>
  );
}
