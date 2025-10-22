// src/components/Layout/ClothingCard.jsx
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// ✅ Correct relative path to your placeholders
const placeholders = [
  require("../../assets-app/images/placeholder1.png"),
  require("../../assets-app/images/placeholder2.png"),
  require("../../assets-app/images/placeholder3.png"),
  require("../../assets-app/images/placeholder4.png"),
];

/**
 * Displays an individual clothing item with its image and category name.
 * If no image is provided, it falls back to a random placeholder.
 */
const ClothingCard = ({ item }) => {
  // Pick a random placeholder (every card gets one if image is missing)
  const randomPlaceholder =
    placeholders[Math.floor(Math.random() * placeholders.length)];

  // Handle completely missing item object
  if (!item) {
    return (
      <View style={styles.card}>
        <Image source={randomPlaceholder} style={styles.image} />
        <Text style={styles.label}>No Item</Text>
      </View>
    );
  }

  // Determine image source
  let imageSource = randomPlaceholder;
  if (item.image) {
    if (typeof item.image === "string") {
      imageSource = { uri: item.image }; // ✅ URL case
    } else {
      imageSource = item.image; // ✅ local require() case
    }
  }

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.label}>
        {item.category ? item.category : "Unknown"}
      </Text>
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
