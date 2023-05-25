import { Text, View } from "react-native";

const AdminHome = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Home</Text>
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

export default AdminHome;