import { StyleSheet, Text, View } from "react-native";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
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

export default Notification;
