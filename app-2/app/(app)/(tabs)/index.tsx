import { ThemedText } from "@/components/themed-text";
import { useAuth } from "@/context/auth";
import {
  Link,
  useFocusEffect,
  useNavigation,
  useNavigationContainerRef,
  useRouter,
} from "expo-router";
import { useCallback, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

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

  const { setUser } = useAuth();

  return (
    <View style={styles.container}>
      <ThemedText type="title">Home</ThemedText>
      <Link href="/(app)/deeplink">Go to Deeplink</Link>
      <Button title="Sign out" color="red" onPress={() => setUser(undefined)} />
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
