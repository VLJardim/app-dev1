// src/navigation/RootNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AddClothingScreen from "../screens/AddClothingScreen";

const Stack = createNativeStackNavigator();

/**
 * Root navigation container that wraps all navigators.
 */
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main app tabs */}
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        {/* Add clothing screen (opened with + button) */}
        <Stack.Screen
          name="AddClothing"
          component={AddClothingScreen}
          options={{ title: "Add New Clothing" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
