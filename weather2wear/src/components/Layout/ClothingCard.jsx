// src/components/Layout/ClothingCard.jsx
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ for heart icons
import { useFavorites } from "../../context/FavoritesContext"; // ✅ hook from context

// ✅ Local placeholder images for when an item has no image
const placeholders = [
  require("../../assets-app/images/placeholder1.png"),
  require("../../assets-app/images/placeholder2.png"),
  require("../../assets-app/images/placeholder3.png"),
  require("../../assets-app/images/placeholder4.png"),
];

/**
 * Displays an individual clothing item with its image, category, and a heart icon for favorites.
 */
const ClothingCard = ({ id, imageSource, category }) => {
  const { favorites, toggleFavorite } = useFavorites(); // ✅ access global favorites
  const isFavorite = favorites.includes(id); // ✅ check if this item is favorited

  // Pick a random placeholder if the image is missing
  const randomPlaceholder =
    placeholders[Math.floor(Math.random() * placeholders.length)];

  // Decide which image to show
  const image =
    imageSource ||
    randomPlaceholder; // fallback if no imageSource provided

  return (
    <View style={styles.card}>
      {/* ❤️ Heart icon positioned top-right */}
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleFavorite(id)} // ✅ toggles favorite status
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color={isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>

      {/* 🖼️ Item image */}
      <Image source={image} style={styles.image} />

      {/* 🏷️ Label below the image */}
      <Text style={styles.label}>{category || "No Item"}</Text>
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
    position: "relative", // ✅ allows heart icon positioning
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
  heartIcon: {
    position: "absolute", // ✅ makes it float over image
    top: 6,
    right: 6,
    zIndex: 1,
  },
});
