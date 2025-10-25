import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/imagePickerModal.styles.js';  // Updated path

const ImagePickerModal = ({ visible, onClose, onTakePhoto, onChooseFromGallery }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.title}>Add Clothing Item</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.option} onPress={onTakePhoto}>
                <Ionicons name="camera" size={48} color="#007AFF" />
                <Text style={styles.optionText}>Take Picture</Text>
                <Text style={styles.optionSubtext}>Use your camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={onChooseFromGallery}>
                <Ionicons name="images" size={48} color="#007AFF" />
                <Text style={styles.optionText}>Add from Gallery</Text>
                <Text style={styles.optionSubtext}>Choose existing photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;