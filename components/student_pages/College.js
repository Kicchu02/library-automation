import { StyleSheet, Text, View } from "react-native";

const College = () => {
  return (
    <View style={styles.container}>
      <Text>College</Text>
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

export default College;
