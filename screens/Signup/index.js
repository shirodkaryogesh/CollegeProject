import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";

export default function Signup() {
  const { navigate } = useNavigation();
  const [Fname, onChangeFname] = React.useState(null);
  const [Lname, onChangeLname] = React.useState(null);
  const [textE, onChangeTextE] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFname}
        value={Fname}
        label="First Name"
        mode="outlined"
        outlineStyle={styles.inputOutline}
        placeholder="Enter First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLname}
        value={Lname}
        label="Last Name"
        mode="outlined"
        outlineStyle={styles.inputOutline}
        placeholder="Enter Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeTextE={onChangeTextE}
        value={textE}
        label="Email"
        mode="outlined"
        outlineStyle={styles.inputOutline}
        placeholder="Enter Email Address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        outlineStyle={styles.inputOutline}
        onChangeNumber={onChangeNumber}
        value={number}
        label="password"
        placeholder="Enter Your Password"
        // keyboardType="numeric"
      />
      <Button
        mode="outlined"
        style={{ width: 200, alignSelf: "center", marginTop: 20 }}
        onPress={() => navigate("HomePage")}
      >
        Next
      </Button>
      <Button
        mode="outlined"
        style={{ width: 200, alignSelf: "center", marginTop: 20 }}
        onPress={() => navigate("signIn")}
      >
        Back
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30, flex: 1 },
  input: {
    marginVertical: 15,
  },
  inputOutline: {
    borderRadius: 10,
  },
  // outlineStyle: {
  //   borderRadius: 10,
  // },
});
