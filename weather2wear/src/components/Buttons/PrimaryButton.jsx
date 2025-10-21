// src/components/Buttons/PrimaryButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/**
 * A reusable primary button component.
 * Used throughout the app for main actions like "Spin the Wheel", "Add Clothing", etc.
 */
const PrimaryButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
