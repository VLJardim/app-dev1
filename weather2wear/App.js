// App.js
import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

// Context providers
import { WardrobeProvider } from "./src/context/WardrobeContext";
import { WeatherProvider } from "./src/context/WeatherContext";

/**
 * Root component of the Clothing Roulette app.
 * Wraps all screens with context providers and navigation.
 */

export default function App() {
  return (
    <WeatherProvider>
      <WardrobeProvider>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </WardrobeProvider>
    </WeatherProvider>
  );
}
