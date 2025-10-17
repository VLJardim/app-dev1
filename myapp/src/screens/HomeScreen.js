// src/screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import Header from "../components/Layout/Header";
import RouletteDisplay from "../components/Layout/RouletteDisplay";
import { useRoulette } from "../hooks/useRoulette";

const HomeScreen = ({ navigation }) => {
  const { spinRoulette, isSpinning, currentOutfit } = useRoulette();

  return (
    <ScreenWrapper>
      <Header
        title="Outfit Roulette"
        onMenuPress={() => navigation.navigate("Profile")}
        onAddPress={() => navigation.navigate("AddClothing")}
      />
      <View style={styles.container}>
        {isSpinning ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <RouletteDisplay outfit={currentOutfit} />
        )}
        <Button title="🎡 Spin the Wheel" onPress={spinRoulette} />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
