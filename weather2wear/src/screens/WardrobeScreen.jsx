import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import Header from "../components/Layout/Header";
import ClothingCard from "../components/Layout/ClothingCard";
import { useWardrobe } from "../context/WardrobeContext";

const WardrobeScreen = ({ navigation }) => {
  const { clothing } = useWardrobe();

  return (
    <ScreenWrapper>
      <Header title="My Wardrobe" onAddPress={() => navigation.navigate("AddClothing")} />
      <FlatList
        data={clothing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ClothingCard item={item} />}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
      {clothing.length === 0 && (
        <View style={styles.empty}>
          <Text>No clothing added yet!</Text>
        </View>
      )}
    </ScreenWrapper>
  );
};

export default WardrobeScreen;

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    paddingVertical: 10,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});