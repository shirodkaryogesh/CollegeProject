import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./SignIn";
import Signup from "./Signup";
import Select from "./Select";
import HomePage from "./HomePage";
import Category from "./Category";
import Diet from "./Diet";

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen
          name="Select"
          component={Select}
          options={{ headerTitle: "Select Activity Level" }}
        />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Diet" component={Diet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
