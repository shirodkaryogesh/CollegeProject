import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { calculateBMR } from "../../utils";

const Select = ({ route }) => {
  const { age, height, weight, gender } = route.params;
  const { navigate } = useNavigation();
  const [activityLevel, setActivityLevel] = React.useState(null);
  const [foodType, setFoodType] = React.useState(null);
  const [totalCalories, setTotalCalories] = React.useState(0);

  useEffect(() => {
    if (activityLevel && foodType) {
      const calculatedBMR = calculateBMR({
        weight: +weight,
        height: +height,
        age: +age,
        gender,
      });
      setTotalCalories(calculatedBMR * activityLevel);
    }
  }, [foodType, activityLevel]);

  return (
    <View style={styles.container}>
      <View>
        <RadioButton.Group
          onValueChange={(value) => setActivityLevel(value)}
          value={activityLevel}
        >
          <RadioButton.Item label="Sedentary" value={1.2} />
          <RadioButton.Item label="Lightly Active" value={1.375} />
          <RadioButton.Item label="Moderately Active" value={1.55} />
          <RadioButton.Item label="Very Active" value={1.725} />
        </RadioButton.Group>

        {activityLevel && (
          <View>
            <RadioButton.Group
              onValueChange={(value) => setFoodType(value)}
              value={foodType}
            >
              <RadioButton.Item label="veg" value="veg" />
              <RadioButton.Item label="nonveg" value="nonVeg" />
            </RadioButton.Group>
          </View>
        )}
      </View>

      {totalCalories ? (
        <Button
          onPress={() =>
            navigate("Diet", {
              totalCalories,
              gender,
              level: 1,
              foodType,
            })
          }
          mode="outlined"
          style={{ width: 200, alignSelf: "center", marginTop: 20 }}
        >
          Get Diets
        </Button>
      ) : null}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: "column",
    alignContent: "center",
  },
  padding: {
    padding: 20,
  },
});
