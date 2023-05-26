import { StyleSheet, Text, View } from "react-native";

const LoginAs = () => {
  return (
    <View style={styles.container}>
      <Text>Login As?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginAs;
