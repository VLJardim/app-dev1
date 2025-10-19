// src/components/Buttons/IconButton.js
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/**
 * Generic icon button for things like menu, add (+), or settings.
 * Reuses Expo's Ionicons library for consistent visuals.
 */
const IconButton = ({ iconName, size = 28, color = "#333", onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconButton, style]}>
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
