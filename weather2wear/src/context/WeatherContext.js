// src/context/WeatherContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { getWeatherData } from "../services/weatherApi";

const WeatherContext = createContext();

/**
 * Provider that manages fetching and storing weather data.
 */
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch weather from API (simple OpenWeatherMap version)
   */
  const fetchWeather = async (location = "Copenhagen") => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(location);
      setWeather(data);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather on mount (MVP version)
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
