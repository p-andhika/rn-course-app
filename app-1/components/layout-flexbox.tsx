import { StyleSheet, View } from "react-native";

export default function LayoutFlexbox() {
  return (
    <View style={style.container}>
      <View style={style.node} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  node: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "lightpink",
  },
});
