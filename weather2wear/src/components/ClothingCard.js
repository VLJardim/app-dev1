// src/components/Layout/ClothingCard.js
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

/**
 * Displays an individual clothing item with its image and category name.
 */
const ClothingCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.category}</Text>
    </View>
  );
};

export default ClothingCard;

const styles = StyleSheet.create({
  card: {
    width: 100,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginTop: 8,
  },
  label: {
    marginVertical: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});
