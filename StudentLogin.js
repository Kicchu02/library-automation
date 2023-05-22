import { Button, TextInput, View } from "react-native/types";

const StudentLogin = () => {
  return (
    <View>
      <TextInput placeholder="USN" />
      <TextInput placeholder="Password" />
      <Button title="Login" />
    </View>
  );
};

export default StudentLogin;
