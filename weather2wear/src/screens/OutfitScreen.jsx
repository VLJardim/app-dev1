import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OutfitScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outfit Screen</Text>
      <Text style={styles.empty}>No outfit selected yet!</Text>
      <Button title="Go to Wardrobe" onPress={() => navigation.navigate("Wardrobe")} />
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
  empty: {
    fontSize: 16,
    color: "#666",
  },
});