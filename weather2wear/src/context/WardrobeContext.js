// src/context/WardrobeContext.js
import React, { createContext, useState, useContext } from "react";

// Create context
const WardrobeContext = createContext();

/**
 * Provider that manages clothing data and outfit generation.
 */
export const WardrobeProvider = ({ children }) => {
  // Hardcoded clothing items for MVP (can later be user-uploaded)
  const [clothing, setClothing] = useState([
    { id: 1, category: "Top", image: null},
    { id: 2, category: "Bottom", image: null},
    { id: 3, category: "Shoes", image: null},
    { id: 4, category: "Jacket", image: null}
  ]);

  const [currentOutfit, setCurrentOutfit] = useState(null);

  /**
   * Randomly generates an outfit (for now, one of each category).
   */
  const generateOutfit = () => {
    const categories = [...new Set(clothing.map(item => item.category))];
    const outfit = categories.map(category => {
      const items = clothing.filter(item => item.category === category);
      return items[Math.floor(Math.random() * items.length)];
    });
    setCurrentOutfit(outfit);
  };

  /**
   * Adds new clothing item to wardrobe.
   */
  const addClothingItem = (item) => {
    setClothing(prev => [...prev, { ...item, id: Date.now() }]);
  };

  return (
    <WardrobeContext.Provider
      value={{ clothing, addClothingItem, currentOutfit, generateOutfit }}
    >
      {children}
    </WardrobeContext.Provider>
  );
};

/**
 * Custom hook for easy use of wardrobe context.
 */
export const useWardrobe = () => useContext(WardrobeContext);
