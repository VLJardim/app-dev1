// src/navigation/BottomTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WardrobeScreen from "../screens/WardrobeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

/**
 * Bottom tab navigation for main sections of the app.
 */
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Wardrobe":
              iconName = "shirt-outline";
              break;
            case "Weather":
              iconName = "cloud-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
