// App.js
import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AddClothingScreen from "./src/screens/AddClothingScreen";
import WeatherScreen from "./src/screens/WeatherScreen";
import OutfitScreen from "./src/screens/OutfitScreen";
import WardrobeScreen from "./src/screens/WardrobeScreen";

const Tab = createBottomTabNavigator();

/**
 * Root component of the Clothing Roulette app.
 * Wraps all screens with context providers and navigation.
 */

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Add Clothing') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Weather') {
              iconName = focused ? 'cloud' : 'cloud-outline';
            } else if (route.name === 'Wardrobe') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Add Clothing" component={AddClothingScreen} />
        <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
