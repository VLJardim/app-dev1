import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import Header from "../components/Layout/Header";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Header title="My Profile" />
      <View style={styles.container}>
        <Text style={styles.text}>User profile info will go here.</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#333",
  },
});