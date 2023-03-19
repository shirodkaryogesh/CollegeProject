import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { getDiets } from "../../utils/getDiets";
import { List, Card } from "react-native-paper";

const Diet = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [dietsError, setDietsError] = useState("");
  const [diets, setDiets] = useState(null);
  const { totalCalories, gender, level, foodType } = route.params;

  useLayoutEffect(() => {
    if (totalCalories && gender && level && foodType) {
      setLoading(true);
      const { data, isError, message } = getDiets({
        gender,
        totalCalories,
        level,
        foodType,
      });
      if (data) {
        setDiets(data);
      }
      if (isError || !data) {
        setDietsError(message);
      }

      setLoading(false);
    }
  }, [totalCalories]);

  if (loading) {
    return (
      <View>
        <Text>loading....</Text>
      </View>
    );
  }

  if (dietsError && !diets) {
    return (
      <View>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {diets &&
        Object.keys(diets).map((m, i) => (
          <List.Accordion title={m} key={`m${i}`}>
            <Card style={{ margin: 10 }} mode="outlined">
              <Card.Title title="Breakfast" />
              <Card.Content>
                {diets[m]?.breakfast?.map((j) => (
                  <Text variant="titleLarge">{j}</Text>
                ))}
              </Card.Content>
              <Card.Title title="snack" />
              <Card.Content>
                {diets[m]?.snack?.map((j) => (
                  <Text variant="titleLarge">{j}</Text>
                ))}
              </Card.Content>
              <Card.Title title="Lunch" />
              <Card.Content>
                {diets[m]?.Lunch?.map((j) => (
                  <Text variant="titleLarge">{j}</Text>
                ))}
              </Card.Content>
              <Card.Title title="Snack" />
              <Card.Content>
                {diets[m]?.Snack?.map((j) => (
                  <Text variant="titleLarge">{j}</Text>
                ))}
              </Card.Content>
              <Card.Title title="Dinner" />
              <Card.Content>
                {diets[m]?.Dinner?.map((j) => (
                  <Text variant="titleLarge">{j}</Text>
                ))}
              </Card.Content>
            </Card>
          </List.Accordion>
        ))}
    </ScrollView>
  );
};

export default Diet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "#888782",
  },
  heading: {
    flex: 1,
    fontSize: 40,
    borderBottomWidth: 3,
    borderColor: "black",
    fontWeight: "bold",
    // elevation: 34,
  },
  weekFont: {
    fontSize: 25,
    fontWeight: "bold",
  },
  dayFont: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
