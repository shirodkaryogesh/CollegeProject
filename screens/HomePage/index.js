import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, RadioButton, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const { navigate } = useNavigation();
  const [gender, setGender] = React.useState("male");
  const [Fname, onChangeFname] = React.useState("");
  const [age, onChangeAge] = React.useState(0);
  const [Lname, onChangeLname] = React.useState("");
  const [weight, onChangeWeight] = React.useState("");
  const [height, onChangeHeight] = React.useState("");

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
        onChangeText={onChangeAge}
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
        onChangeText={onChangeWeight}
        value={weight}
        label="weight"
        placeholder="Enter Your weight(kg)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        outlineStyle={styles.inputOutline}
        onChangeText={onChangeHeight}
        value={height}
        label="height"
        placeholder="Enter Your Height(cm)"
        keyboardType="numeric"
      />
      <Card style={styles.padding}>
        <Text style={styles.font}>Sex</Text>
        <RadioButton.Group
          onValueChange={(value) => setGender(value)}
          value={gender}
        >
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </RadioButton.Group>
      </Card>
      {age && weight && height && gender && Fname && Lname ? (
        <Button
          mode="outlined"
          style={{ width: 200, alignSelf: "center", marginTop: 20 }}
          onPress={() => navigate("Select", { age, height, weight, gender })}
        >
          Next
        </Button>
      ) : null}
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
