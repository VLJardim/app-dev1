import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const FilterOverlay = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
    >
      <View style={styles.sheet}>
        <View style={styles.dragHandle} />

        <Text style={styles.title}>Filtrer garderoben</Text>

        <View style={styles.filterContainer}>
          {["ÅRSTAL", "SÆSON", "VEJR", "TYPE", "FARVER"].map((label) => (
            <TouchableOpacity key={label} style={styles.filterButton}>
              <Text style={styles.filterText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default FilterOverlay;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "50%",
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#8b9a46",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
