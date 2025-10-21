import React from "react";
import { View, Text, ScrollView } from "react-native";

//  Importing our reusable components
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import ProfileCard from "../components/ProfileCard";
import FilterBar from "../components/FilterBar";
import ClothingCard from "../components/Layout/ClothingCard";

// (Later) we’ll import useContext to get clothing data
// import { WardrobeContext } from "../context/WardrobeContext";

const WardrobeScreen = () => {
  // Later this will come from context
  // const { wardrobeItems } = useContext(WardrobeContext);

  // Temporary placeholder data to visualize layout
  const wardrobeItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ScreenWrapper>
      {/*  1. App Name / Header */}
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          Weather2Wear
        </Text>
      </View>

      {/*  2. Profile Section */}
      <View style={{ marginVertical: 10 }}>
        <ProfileCard />
      </View>

      {/*  3. Filter Bar (Favorites + Categories) */}
      <View style={{ marginVertical: 10 }}>
        <FilterBar />
      </View>

      {/*  4. Clothing Grid/List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {wardrobeItems.map((item, index) => (
            <ClothingCard key={index} />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});