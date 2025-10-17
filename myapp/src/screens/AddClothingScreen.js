// src/screens/AddClothingScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Image, StyleSheet } from "react-native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import { useImagePicker } from "../hooks/useImagePicker";
import { useWardrobe } from "../context/WardrobeContext";

const AddClothingScreen = ({ navigation }) => {
  const { image, pickImageFromGallery, captureImageWithCamera } = useImagePicker();
  const { addClothingItem } = useWardrobe();
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (!image || !category) {
      alert("Please select an image and category!");
      return;
    }

    addClothingItem({ image: { uri: image }, category });
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Button title="Take Photo" onPress={captureImageWithCamera} />
        <Button title="Choose from Gallery" onPress={pickImageFromGallery} />
        {image && <Image source={{ uri: image }} style={styles.preview} />}

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
};

export default AddClothingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  preview: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
});
