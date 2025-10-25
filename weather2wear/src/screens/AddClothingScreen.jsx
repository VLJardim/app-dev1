import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import ImagePickerModal from '../components/modals/ImagePickerModal';
import ClothingForm from '../components/forms/ClothingForm';

export default function AddClothingScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true); // Show modal when screen opens
  const [selectedImage, setSelectedImage] = useState(null);

  const requestPermissions = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    return cameraPermission.granted && mediaLibraryPermission.granted;
  };

  const handleTakePhoto = async () => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) {
      alert('Camera and photo library permissions are required');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleChooseFromGallery = async () => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) {
      alert('Photo library permission is required');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.goBack(); // Go back if user closes without selecting image
  };

  const handleFormSubmit = (itemData) => {
    // Here you would typically save to your wardrobe context
    console.log('Adding item to wardrobe:', itemData);
    
    // Show success message
    alert('Item added to wardrobe successfully!');
    
    // Navigate back
    navigation.goBack();
  };

  const handleFormCancel = () => {
    setSelectedImage(null);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImagePickerModal
        visible={modalVisible}
        onClose={handleModalClose}
        onTakePhoto={handleTakePhoto}
        onChooseFromGallery={handleChooseFromGallery}
      />
      
      {selectedImage && (
        <ClothingForm
          image={selectedImage}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});