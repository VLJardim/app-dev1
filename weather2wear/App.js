// App.js
import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { FavoritesProvider } from "./src/context/FavoritesContext";

import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <FavoritesProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </FavoritesProvider>
  );
}
