import { ThemedText } from "@/components/themed-text";
import { useAuth, UserRole } from "@/context/auth";
import { StyleSheet, View } from "react-native";

export default function AdminScreen() {
  const { user } = useAuth();

  if (user?.role !== UserRole.Admin) {
    return (
      <View style={styles.container}>
        <ThemedText>You don&apos;t have access</ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ThemedText>Admin Page: {user.name}</ThemedText>
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
