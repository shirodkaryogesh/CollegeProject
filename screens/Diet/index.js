import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const Diet = ({ route }) => {
  const { data, foodType, name, level } = route.params;
  return (
    <ScrollView>
      <View>
        {name === "Diabetes" && (
          <View>
            <Text style={styles.heading}>
              Suggested {foodType} diet for {name} of type {level}
            </Text>

            <View style={styles.container}>
              <Text style={styles.weekFont}>MONDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Monday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>Lunch:{data.Monday.Lunch[0]}</Text>
              <Text style={styles.dayFont}>Snack:{data.Monday.Snack[0]}</Text>
              <Text style={styles.dayFont}>Dinner:{data.Monday.Dinner[0]}</Text>
              <Text style={styles.weekFont}>TUESDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Tuesday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>Lunch:{data.Tuesday.Lunch[0]}</Text>
              <Text style={styles.dayFont}>Snack:{data.Tuesday.Snack[0]}</Text>
              <Text style={styles.dayFont}>
                Dinner:{data.Tuesday.Dinner[0]}
              </Text>
              <Text style={styles.weekFont}>WEDNESDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Wednesday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>
                Lunch:{data.Wednesday.Lunch[0]}
              </Text>
              <Text style={styles.dayFont}>
                Snack:{data.Wednesday.Snack[0]}
              </Text>
              <Text style={styles.dayFont}>
                Dinner:{data.Wednesday.Dinner[0]}
              </Text>
              <Text style={styles.weekFont}>THURSDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Thursday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>Lunch:{data.Thursday.Lunch[0]}</Text>
              <Text style={styles.dayFont}>Snack:{data.Thursday.Snack[0]}</Text>
              <Text style={styles.dayFont}>
                Dinner:{data.Thursday.Dinner[0]}
              </Text>
              <Text style={styles.weekFont}>FRIDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Friday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>Lunch:{data.Friday.Lunch[0]}</Text>
              <Text style={styles.dayFont}>Snack:{data.Friday.Snack[0]}</Text>
              <Text style={styles.dayFont}>Dinner:{data.Friday.Dinner[0]}</Text>
              <Text style={styles.weekFont}>SATURDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Saturday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>Lunch:{data.Saturday.Lunch[0]}</Text>
              <Text style={styles.dayFont}>Snack:{data.Saturday.Snack[0]}</Text>
              <Text style={styles.dayFont}>
                Dinner:{data.Saturday.Dinner[0]}
              </Text>
              <Text style={styles.weekFont}>SUNDAY</Text>
              <Text style={styles.dayFont}>
                Breakfast:{data.Sunday.breakfast[0]}
              </Text>
              <Text style={styles.dayFont}>Lunch:{data.Sunday.Lunch[0]}</Text>
              <Text style={styles.dayFont}>Snack:{data.Sunday.Snack[0]}</Text>
              <Text style={styles.dayFont}>Dinner:{data.Sunday.Dinner[0]}</Text>
            </View>
          </View>
        )}
      </View>
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
