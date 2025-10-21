import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to Weather" onPress={() => navigation.navigate("Weather")} />
      <Button title="Go to Wardrobe" onPress={() => navigation.navigate("Wardrobe")} />
      <Button title="Add Clothing" onPress={() => navigation.navigate("Add Clothing")} />
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});