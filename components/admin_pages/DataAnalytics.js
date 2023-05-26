import { StyleSheet, Text, View } from "react-native";

const DataAnalytics = () => {
  return (
    <View style={styles.container}>
      <Text>Data Analytics</Text>
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

export default DataAnalytics;
