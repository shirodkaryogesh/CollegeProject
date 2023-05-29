import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, Button, Card } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

export default function SignIn() {
  const { navigate } = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        outlineStyle={styles.inputOutline}
        label="Email"
        mode="outlined"
        placeholder="Enter Email Address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeNumber={onChangeNumber}
        value={number}
        outlineStyle={styles.inputOutline}
        label="Password"
        mode="outlined"
        placeholder="Enter Your Password"
        // keyboardType="numeric"
      />
      <Button
        mode="outlined"
        style={{
          width: 200,
          alignSelf: "center",
          marginTop: 20,
        }}
        onPress={() => navigate("Signup")}
      >
        SignIn
      </Button>
      {/* <Image style={styles.image} source={require("../../assets/signin.jpg")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  input: {
    marginVertical: 15,
  },
  image: {
    borderRadius: 30,
    marginTop: 30,
    height: 300,
    width: 335,
  },
  inputOutline: {
    borderRadius: 10,
  },
  Card: {
    marginTop: 30,
    height: 250,
  },
  // outlineStyle: {
  //   borderRadius: 10,
  // },
});
