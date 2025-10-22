// ================================
// 📄 screens/WardrobeScreen.jsx
// ================================

import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

// 🧩 Reusable layout components
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import ProfileCard from "../components/ProfileCard";
import FilterBar from "../components/FilterBar";
import ClothingCard from "../components/Layout/ClothingCard";

// (Later) wardrobe data will come from context
// import { WardrobeContext } from "../context/WardrobeContext";

const WardrobeScreen = () => {
  // Temporary placeholder items to visualize layout
  const wardrobeItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ScreenWrapper>
      {/* ===== 1️⃣ App Header ===== */}
      <View>
        <Text style={styles.headerText}>Weather2Wear</Text>
      </View>

      {/* ===== 2️⃣ Profile Section ===== */}
      <View style={styles.section}>
        <ProfileCard />
      </View>

      {/* ===== 3️⃣ Filter Bar ===== */}
      <View style={styles.section}>
        <FilterBar />
      </View>

      {/* ===== 4️⃣ Clothing Grid/List ===== */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.clothingGrid}>
          {wardrobeItems.map((item, index) => (
            <ClothingCard key={index} />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

// ================================
// 💅 Styles
// ================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    marginVertical: 10,
  },
  clothingGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

// ✅ Export must stay default (important for navigation)
export default WardrobeScreen;
