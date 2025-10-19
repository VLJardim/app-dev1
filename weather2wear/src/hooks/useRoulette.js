// src/hooks/useRoulette.js
import { useState } from "react";
import { useWardrobe } from "../context/WardrobeContext";

/**
 * Custom hook that handles spinning the clothing roulette
 * and generating a random outfit.
 */
export const useRoulette = () => {
  const { clothing, generateOutfit, currentOutfit } = useWardrobe();
  const [isSpinning, setIsSpinning] = useState(false);

  /**
   * Simulates the roulette spin before generating outfit.
   */
  const spinRoulette = () => {
    if (clothing.length === 0) return;

    setIsSpinning(true);

    // Simulate spin delay (like a slot machine)
    setTimeout(() => {
      generateOutfit();
      setIsSpinning(false);
    }, 1500); // 1.5 seconds for visual effect
  };

  return { spinRoulette, isSpinning, currentOutfit };
};
