import React, { useState, useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ScreenWrapper from "../components/Layout/ScreenWrapper";
import ProfileCard from "../components/ProfileCard";
import FilterBar from "../components/FilterBar";
import FilterOverlay from "../components/FilterOverlay";
import ClothingCard from "../components/Layout/ClothingCard";

const WardrobeScreen = () => {
  const navigation = useNavigation();
  const [filterVisible, setFilterVisible] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  // Mock wardrobe items
  const wardrobeItems = [
    { id: 1, favorite: false },
    { id: 2, favorite: true },
    { id: 3, favorite: true },
    { id: 4, favorite: false },
  ];

  // Filter items by favorite toggle
  const displayedItems = showFavorites
    ? wardrobeItems.filter((item) => item.favorite)
    : wardrobeItems;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Weather2Wear",
    });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <View>
        <Text style={styles.header}>Weather2Wear</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ProfileCard />
      </View>

      <View style={styles.filterWrapper}>
        <FilterBar
          onFilterPress={() => setFilterVisible(true)}
          onFavoritesPress={() => setShowFavorites(!showFavorites)}
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <View style={styles.grid}>
          {displayedItems.map((item) => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      {/* Overlay component */}
      <FilterOverlay
        isVisible={filterVisible}
        onClose={() => setFilterVisible(false)}
      />
    </ScreenWrapper>
  );
};

export default WardrobeScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  filterWrapper: {
    filterWrapper: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
}

  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  
  scrollContent: {
  paddingHorizontal: 10,
  paddingTop: 10,  // small breathing space
  paddingBottom: 20,
},

});
