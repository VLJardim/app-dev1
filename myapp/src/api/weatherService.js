// src/api/weatherService.js

// This service will later be used to fetch weather data from OpenWeatherMap.
// For now, it includes a simple placeholder function you can expand later.

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace this with your actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetch weather data for a given city.
 * @param {string} city - The city name to get weather for.
 * @returns {Promise<object>} - A promise that resolves to the weather data object.
 */
export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

/**
 * Fetch weather data based on coordinates (latitude and longitude).
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<object>} - A promise that resolves to the weather data object.
 */
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
