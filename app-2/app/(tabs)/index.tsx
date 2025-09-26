import { ThemedText } from "@/components/themed-text";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      console.log("Hello, I'm focused");

      return () => {
        console.log("This route is now unfocused");
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <ThemedText type="title">Home</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
