// src/components/Layout/Header.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../Buttons/IconButton";

/**
 * Header component that appears at the top of screens.
 * Includes menu button on the left, app title in the middle, and an optional "+" button on the right.
 */
const Header = ({ title, onMenuPress, onAddPress }) => {
  return (
    <View style={styles.container}>
      <IconButton iconName="menu" onPress={onMenuPress} />
      <Text style={styles.title}>{title}</Text>
      <IconButton iconName="add" onPress={onAddPress} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    elevation: 2, // for subtle shadow on Android
    shadowColor: "#000", // for subtle shadow on iOS
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
