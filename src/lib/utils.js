/**
 * Take an object and replace the keys with the values and vice versa
 * @param {Object<string,any>} map
 * @returns {Object<string,string>}
 */
export function invertMap(map) {
  return Object.entries(map).reduce((obj, [full, code]) => {
    obj[code] = full;
    return obj;
  }, {});
}

const radius = 16;
/**
 * Given a hexagon coordinate, return the pixel coords
 * @returns
 */
export function hexToPx(coord = [0, 0], units = 'px') {
  const newX = coord[0] * (radius * Math.sqrt(3));
  const newY = coord[1] * 1.5 * radius;
  return [newX, newY].map(px => `${Math.round(px)}${units}`);
}
