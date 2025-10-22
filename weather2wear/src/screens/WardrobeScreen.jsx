import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import ProfileCard from "../components/ProfileCard";
import FilterBar from "../components/FilterBar";
import ClothingCard from "../components/Layout/ClothingCard";

const WardrobeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Weather2Wear", // 👈 sets the header title dynamically
      headerTilteAlign: "center",
    });
  }, [navigation]);

  const wardrobeItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ScreenWrapper>
      <View>
        <Text style={styles.header}>Wardrobe</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ProfileCard />
      </View>

      <View style={{ marginVertical: 10 }}>
        <FilterBar />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.grid}>
          {wardrobeItems.map((item, index) => (
            <ClothingCard key={index} />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default WardrobeScreen;  // 👈 MUST be here, not inside the component

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
