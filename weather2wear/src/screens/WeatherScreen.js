// src/screens/WeatherScreen.js
import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import Header from "../components/Layout/Header";
import { useWeather } from "../context/WeatherContext";

const WeatherScreen = () => {
  const { weather, loading, error } = useWeather();

  return (
    <ScreenWrapper>
      <Header title="Weather" />
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color="#000" />}
        {error && <Text>{error}</Text>}
        {weather && (
          <>
            <Text style={styles.city}>{weather.name}</Text>
            <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
            <Text>{weather.weather[0].description}</Text>
          </>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temp: {
    fontSize: 50,
  },
});
