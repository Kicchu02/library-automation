import { StyleSheet, Text, View } from "react-native";

const StudentHome = () => {
  return (
    <View style={styles.container}>
      <Text>Student Home</Text>
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

export default StudentHome;
