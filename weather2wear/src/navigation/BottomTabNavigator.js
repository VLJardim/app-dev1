// src/navigation/BottomTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import WardrobeScreen from "../screens/WardrobeScreen";
import AddClothingScreen from "../screens/AddClothingScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" // 🧭 ensures app opens on Home first
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#8b9a46",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 70, // 🧍‍♀️slightly taller for comfort
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Wardrobe":
              iconName = focused ? "shirt" : "shirt-outline";
              break;
            case "AddClothing":
              iconName = focused ? "add-circle" : "add-circle-outline";
              size = size + 6; // 📏 make the add icon slightly bigger
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
      <Tab.Screen
        name="AddClothing"
        component={AddClothingScreen}
        options={{ title: "Add Clothing" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
