// src/hooks/useImagePicker.js
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

/**
 * Custom hook to handle selecting or capturing an image for new clothing items.
 */
export const useImagePicker = () => {
  const [image, setImage] = useState(null);

  /**
   * Opens device gallery to pick an image.
   */
  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // square crop
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  /**
   * Opens camera to take a new picture.
   */
  const captureImageWithCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.status !== "granted") {
      alert("Camera permission is required to take pictures!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return { image, setImage, pickImageFromGallery, captureImageWithCamera };
};
