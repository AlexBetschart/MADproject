/**
 * Generates a random number between 0 and n
 * @param n Any int. Exclusive upper bound of possible numbers to generate 
 * @returns x where 0 <= x < n
 * Author: Alex Betschart
 */
function randomNumber(n) {
  return Math.floor(Math.random() * n)
}