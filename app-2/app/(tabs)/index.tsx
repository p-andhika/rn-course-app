import { ThemedText } from "@/components/themed-text";
import {
  useFocusEffect,
  useNavigation,
  useNavigationContainerRef,
  useRouter,
} from "expo-router";
import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("Hello, I'm focused");
  //
  //     return () => {
  //       console.log("This route is now unfocused");
  //     };
  //   }, []),
  // );

  // const ref = useNavigationContainerRef();
  // useEffect(() => {
  //   if (ref)
  //     ref.addListener("state", (event) => {
  //       console.log(event.data.state?.routeNames);
  //     });
  // }, []);

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
