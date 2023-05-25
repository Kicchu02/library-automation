import { Text, View } from "react-native";

const StaffInCharge = () => {
  return (
    <View style={styles.container}>
      <Text>Staff In Charge</Text>
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

export default StaffInCharge;
