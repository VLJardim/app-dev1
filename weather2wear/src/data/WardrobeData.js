// src/data/wardrobeData.js

/**
 * Dummy wardrobe data for MVP version of the app.
 * Later, this can be replaced with user-uploaded clothing stored locally or in a backend.
 */

export const wardrobeData = [
  // 🧥 Outerwear
  {
    id: 1,
    category: "Outerwear",
    name: "Denim Jacket",
    image: require("../../assets/dummy/jacket1.png"),
    weatherType: "mild", // mild weather
  },
  {
    id: 2,
    category: "Outerwear",
    name: "Winter Coat",
    image: require("../../assets/dummy/jacket2.png"),
    weatherType: "cold",
  },

  // 👕 Tops
  {
    id: 3,
    category: "Top",
    name: "White T-Shirt",
    image: require("../../assets/dummy/top1.png"),
    weatherType: "warm",
  },
  {
    id: 4,
    category: "Top",
    name: "Sweatshirt",
    image: require("../../assets/dummy/top2.png"),
    weatherType: "cold",
  },

  // 👖 Bottoms
  {
    id: 5,
    category: "Bottom",
    name: "Jeans",
    image: require("../../assets/dummy/bottom1.png"),
    weatherType: "mild",
  },
  {
    id: 6,
    category: "Bottom",
    name: "Shorts",
    image: require("../../assets/dummy/bottom2.png"),
    weatherType: "warm",
  },

  // 👟 Shoes
  {
    id: 7,
    category: "Shoes",
    name: "Sneakers",
    image: require("../../assets/dummy/shoes1.png"),
    weatherType: "mild",
  },
  {
    id: 8,
    category: "Shoes",
    name: "Boots",
    image: require("../../assets/dummy/shoes2.png"),
    weatherType: "cold",
  },
];
