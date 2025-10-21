import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import Header from "../components/Layout/Header";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Header title="My Profile" />
      <View style={styles.container}>
        <Text style={styles.title}>Profile Screen</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#333",
    marginTop: 10,
  },
});