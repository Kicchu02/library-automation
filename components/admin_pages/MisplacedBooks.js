import { StyleSheet, Text, View } from "react-native";

const MisplacedBooks = () => {
  return (
    <View style={styles.container}>
      <Text>Misplaced Books</Text>
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

export default MisplacedBooks;
