import { Text, View } from "react-native";

const AdminLogin = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Login</Text>
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

export default AdminLogin;
