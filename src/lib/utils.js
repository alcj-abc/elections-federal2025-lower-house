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
