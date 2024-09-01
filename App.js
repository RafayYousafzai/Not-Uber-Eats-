import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation";
import Home from "./screens/Home";

export default function App() {
  return <RootNavigation />;
}

// <SafeAreaView style={{ flex: 1 }}>
//   <View style={styles.container}>{/* <Home /> */}</View>
// </SafeAreaView>;
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
// });
