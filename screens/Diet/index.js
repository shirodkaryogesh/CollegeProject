import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { List, Card } from "react-native-paper";
import axios from "axios";
import { apiUrl } from "../../utils";

const Diet = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [dietsError, setDietsError] = useState("");
  const [message, setMessage] = useState("");
  const [diets, setDiets] = useState(null);
  const { totalCalories, gender, level, foodType } = route.params;

  const getAllDiets = async () => {
    setLoading(true);
    const url = `${apiUrl}/diet/get/${gender}/${Math.round(
      totalCalories
    )}/${level}?isVeg=${foodType === "veg"}`;
    const { data } = await axios.get(url);
    if (data.data.length > 0 && !data.isError) {
      setDiets(data.data);
    }
    if (data.isError) {
      setDietsError("No diet found in this range");
    }
    if (data.message.length > 0) {
      setMessage(data.message);
    }
    setLoading(false);
  };

  useLayoutEffect(() => {
    if (totalCalories && gender && level && foodType) {
      setLoading(true);
      getAllDiets();
      setLoading(false);
    }
  }, [totalCalories, gender, level, foodType]);

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
        diets.map((d, i) => (
          <List.Accordion title={`Suggested diet ${+i + 1} `} key={d._id}>
            <Card style={{ margin: 10, padding: 10 }} mode="outlined">
              {Object.keys(d).map((m) => {
                return (
                  <View style={{ padding: 20 }} mode="outlined">
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                      {m}
                    </Text>
                    {m === "gender" ||
                    m === "calories" ||
                    m === "level" ||
                    m === "_id" ? (
                      <View>
                        <Text>{d[m]}</Text>
                      </View>
                    ) : (
                      <View>
                        {d[m] &&
                          Object.keys(d[m]).map((k) => {
                            if (k !== "_id") {
                              return (
                                <View>
                                  <Text style={{ fontSize: 20 }}>{k}</Text>
                                  <View>
                                    <Text>{d[m][k][0]}</Text>
                                  </View>
                                </View>
                              );
                            }
                          })}
                      </View>
                    )}
                  </View>
                );
              })}
            </Card>
          </List.Accordion>
        ))}
      {/* {diets &&
        Object.keys(diets).map((m, i) => (
          <List.Accordion title={m} key={`m${i}`}>
            <Card style={{ margin: 10 }} mode="outlined">
              <Card.Title title="breakfast" />
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
        ))} */}
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
