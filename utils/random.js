/**
 * Generate a random number between two numbers
 * @returns a random number between the two arguments.
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
