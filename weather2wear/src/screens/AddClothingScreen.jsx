import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";

export default function AddClothingScreen() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (!category) {
      alert("Please enter a category!");
      return;
    }

    alert(`Added ${category} to wardrobe!`);
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Add Clothing</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter clothing category (e.g., Top)"
          value={category}
          onChangeText={setCategory}
        />

        <Button title="Add Item" onPress={handleAdd} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
});