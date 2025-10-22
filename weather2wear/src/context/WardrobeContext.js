// src/context/WardrobeContext.js
import React, { createContext, useState, useContext } from "react";

// Create context
const WardrobeContext = createContext();

/**
 * Provider that manages clothing data and outfit generation.
 */
export const WardrobeProvider = ({ children }) => {
  // ✅ Initial clothing items (image is null = placeholder will be used)
  const [clothing, setClothing] = useState([
    { id: 1, category: "Top", image: null },
    { id: 2, category: "Bottom", image: null },
    { id: 3, category: "Shoes", image: null },
    { id: 4, category: "Jacket", image: null },
  ]);

  const [currentOutfit, setCurrentOutfit] = useState(null);

  /**
   * 🎲 Randomly generates an outfit with one item from each category.
   */
  const generateOutfit = () => {
    const categories = [...new Set(clothing.map(item => item.category))];

    const outfit = categories.map(category => {
      const items = clothing.filter(item => item.category === category);
      // Random pick from each category
      return items[Math.floor(Math.random() * items.length)];
    });

    setCurrentOutfit(outfit);
  };

  /**
   * 🧢 Adds a new clothing item.
   * If image is not provided, set to null (ClothingCard will handle placeholder).
   */
  const addClothingItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      image: item.image || null, // ✅ consistent image handling
    };
    setClothing(prev => [...prev, newItem]);
  };

  /**
   * 🧼 Optional: Remove item by ID (handy for later)
   */
  const removeClothingItem = (id) => {
    setClothing(prev => prev.filter(item => item.id !== id));
  };

  return (
    <WardrobeContext.Provider
      value={{
        clothing,
        addClothingItem,
        removeClothingItem,
        currentOutfit,
        generateOutfit,
      }}
    >
      {children}
    </WardrobeContext.Provider>
  );
};

/**
 * Custom hook for easy access to wardrobe context anywhere in the app.
 */
export const useWardrobe = () => useContext(WardrobeContext);
