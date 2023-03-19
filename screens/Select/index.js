import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Diets } from "../../dataset";

const Select = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = React.useState(null);
  const [fit, setFit] = React.useState(null);
  const [foodType, setFoodType] = React.useState(null);

  const [suggestedDiet, setSuggestedDiet] = React.useState(null);

  useEffect(() => {
    if (value && fit && foodType) {
      const getDiets = Diets.find((d) => d.name === value && d.level === fit);
      if (foodType === "veg") {
        setSuggestedDiet(getDiets?.veg);
      } else {
        setSuggestedDiet(getDiets?.nonVeg);
      }
    }
  }, [value, fit, foodType]);

  return (
    <View style={styles.container}>
      <View>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item label="Fitness" value="first" />
          <RadioButton.Item label="Diabetes" value="Diabetes" />
          {/* <RadioButton.Item label="Athlete" value="third" /> */}
        </RadioButton.Group>
        {value && (
          <View>
            {value === "first" ? (
              <Card style={styles.padding}>
                <Text>Fitness</Text>
                <RadioButton.Group
                  onValueChange={(value) => setFit(value)}
                  value={fit}
                >
                  {/* <RadioButton.Item label="bulking" value="bulking" />
                <RadioButton.Item label="cutting" value="cutting" /> */}
                  <RadioButton.Item label="weight loss" value="weight loss" />
                  <RadioButton.Item label="weight gain" value="weight gain" />
                </RadioButton.Group>
              </Card>
            ) : (
              <Card style={styles.padding}>
                <Text>Diabetes</Text>
                <RadioButton.Group
                  onValueChange={(value) => setFit(value)}
                  value={fit}
                >
                  <RadioButton.Item label="Diabetes 1" value={1} />
                  <RadioButton.Item label="Diabetes 2" value={2} />
                </RadioButton.Group>
              </Card>
            )}
          </View>
        )}
        {value && fit && (
          <View>
            <RadioButton.Group
              onValueChange={(value) => setFoodType(value)}
              value={foodType}
            >
              <RadioButton.Item label="veg" value="veg" />
              <RadioButton.Item label="nonveg" value="nonveg" />
            </RadioButton.Group>
          </View>
        )}
      </View>

      {/* {suggestedDiet && (
        <View>
          <Text>
            Suggested {foodType} diet for {value} of type {fit}
          </Text>
          <View>
            <Text>Monday ---=,{suggestedDiet.Monday.breakfast[0]}</Text>
            <Text>{suggestedDiet.Tuesday.breakfast[0]}</Text>
            <Text>{suggestedDiet.Wednesday.breakfast[0]}</Text>
            <Text>{suggestedDiet.Thursday.breakfast[0]}</Text>
            <Text>{suggestedDiet.Friday.breakfast[0]}</Text>
            <Text>{suggestedDiet.Saturday.breakfast[0]}</Text>
            <Text>{suggestedDiet.Sunday.breakfast[0]}</Text>
          </View>
        </View>
      )} */}
      {value && fit && foodType && (
        <Button
          onPress={() =>
            navigate("Diet", {
              data: suggestedDiet,
              name: value,
              foodType,
              level: fit,
            })
          }
          mode="outlined"
          style={{ width: 200, alignSelf: "center", marginTop: 20 }}
        >
          Get Diet
        </Button>
      )}
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
