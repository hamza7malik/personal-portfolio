/**
 * Generate a random number within a range
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number between min and max
 */
export const getRandomNumber = (min: number = 1, max: number = 44): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
