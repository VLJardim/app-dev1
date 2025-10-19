// src/navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import WardrobeScreen from "../screens/WardrobeScreen";
import OutfitScreen from "../screens/OutfitScreen";
import WeatherScreen from "../screens/WeatherScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddClothingScreen from "../screens/AddClothingScreen";

const Stack = createStackNavigator();

/**
 * Main navigation container for Clothing Roulette.
 * Handles transitions between all screens.
 */

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // we'll use our custom Header component
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wardrobe" component={WardrobeScreen} />
        <Stack.Screen name="Outfit" component={OutfitScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AddClothing" component={AddClothingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
