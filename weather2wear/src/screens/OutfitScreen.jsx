import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import Header from "../components/Layout/Header";
import { useRoulette } from "../hooks/useRoulette";

const OutfitScreen = ({ navigation }) => {
  const { currentOutfit, spinRoulette } = useRoulette();

  return (
    <ScreenWrapper>
      <Header title="Your Outfit" onMenuPress={() => navigation.navigate("Profile")} />

      <View style={styles.container}>
        {currentOutfit ? (
          <>
            <Text style={styles.title}>Today's Look</Text>
            <View style={styles.outfitContainer}>
              {currentOutfit.map((item) => (
                <View key={item.id} style={styles.imageWrapper}>
                  <Image source={{ uri: item.image.uri }} style={styles.image} />
                  <Text style={styles.category}>{item.category}</Text>
                </View>
              ))}
            </View>
          </>
        ) : (
          <Text style={styles.empty}>No outfit selected yet!</Text>
        )}

        <Button title="🎡 Spin Again" onPress={spinRoulette} />
        <Button title="👕 Go to Wardrobe" onPress={() => navigation.navigate("Wardrobe")} />
      </View>
    </ScreenWrapper>
  );
};

export default OutfitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outfitContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  imageWrapper: {
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: "#333",
  },
  empty: {
    fontSize: 16,
    color: "#666",
  },
});