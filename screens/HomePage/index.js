import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, RadioButton, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = React.useState("first");
  const [Fname, onChangeFname] = React.useState(null);
  const [age, onChangeAge] = React.useState(null);
  const [Lname, onChangeLname] = React.useState(null);
  const [Weight, onChangeWeight] = React.useState(null);
  const [Height, onChangeHeight] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeFname={onChangeFname}
        value={Fname}
        label="First Name"
        mode="outlined"
        outlineStyle={styles.inputOutline}
        placeholder="Enter First Name"
      />
      <TextInput
        style={styles.input}
        onChangeLname={onChangeLname}
        value={Lname}
        label="Last Name"
        mode="outlined"
        outlineStyle={styles.inputOutline}
        placeholder="Enter Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeFname={onChangeAge}
        value={age}
        label="Age"
        mode="outlined"
        outlineStyle={styles.inputOutline}
        placeholder="Enter your Age"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        outlineStyle={styles.inputOutline}
        onChangeWeight={onChangeWeight}
        value={Weight}
        label="Weight"
        placeholder="Enter Your weight(kg)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        outlineStyle={styles.inputOutline}
        onChangeHeight={onChangeHeight}
        value={Height}
        label="Height"
        placeholder="Enter Your Height(cm)"
        keyboardType="numeric"
      />
      <Card style={styles.padding}>
        <Text style={styles.font}>Sex</Text>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item label="Male" value="first" />
          <RadioButton.Item label="Female" value="second" />
          {/* <RadioButton.Item label="Others" value="third" /> */}
        </RadioButton.Group>
      </Card>
      <Button
        mode="outlined"
        style={{ width: 200, alignSelf: "center", marginTop: 20 }}
        onPress={() => navigate("Select")}
      >
        Next
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 30, flex: 1 },
  input: {
    marginVertical: 15,
  },
  inputOutline: {
    borderRadius: 10,
  },
  padding: {
    padding: 10,
  },
  font: {
    fontSize: 15,
  },
  // outlineStyle: {
  //   borderRadius: 10,
  // },
});

export default HomePage;
