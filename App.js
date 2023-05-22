import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import LoginAs from "./LoginAs";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Home Page</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <LoginAs />
    </NavigationContainer>
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
