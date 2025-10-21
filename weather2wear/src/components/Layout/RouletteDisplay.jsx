// src/components/Layout/RouletteDisplay.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/**
 * Displays the randomly selected outfit from the "Spin the Wheel" feature.
 */
const RouletteDisplay = ({ outfit }) => {
  if (!outfit) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Press "Spin" to generate an outfit!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {outfit.map((item, index) => (
        <View key={index} style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.label}>{item.category}</Text>
        </View>
      ))}
    </View>
  );
};

export default RouletteDisplay;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  item: {
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  label: {
    marginTop: 5,
    fontWeight: "500",
  },
});
