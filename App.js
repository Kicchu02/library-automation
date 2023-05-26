import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import LoginAs from "./components/LoginAs";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
