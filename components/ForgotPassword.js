import { StyleSheet, Text, View } from "react-native";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
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

export default ForgotPassword;
