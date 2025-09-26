import { Image, StyleSheet, View } from "react-native";

export default function StyleComponent() {
  return (
    <>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1751716534754-e4eb69f18e90?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={StyleSheet.flatten([style.centerItems, style.backgroundOverlay])}
      >
        <View style={style.box} />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  centerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 16,
  },
  backgroundOverlay: {
    backgroundColor: "#00000075",
  },
});
