/**
 * @file The PerlinNoise class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents 2D perlin noise.
 */
export class PerlinNoise {
  #x
  #y

  /**
   * Initialises the object.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor (x, y) {
    this.#x = x
    this.#y = y
  }

  /**
   * Determine coordinates.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  findGridPoints (x, y) {}
}
