/**
 * Generate Hex color code from any string.
 *
 * @example
 * 
 * import { hexColorGenerator } from '@tapston/color-utilities';
 * const myColor = hexColorGenerator('My random string');
 */
​
​
/**
 * Internal function for creating a Hash code from any string
 * @param {String} str - A string
 */
const createHashCodeFromStr = (str) => {
  const bitShift = 5;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << bitShift) - hash);
  }
  return hash;
};
​
/**
 * Internal function for creating a HEX code from hash integer
 * @param {Number} hash - Hash integer number
 */
const createHexCodeFromHash = (hash) => {
  // eslint-disable-next-line no-bitwise
  const compHexColorCode = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - compHexColorCode.length) + compHexColorCode;
};
​
/**
 * Function for generating HEX color code from string
 * @param {String} str - String for generating HEX code
 * @returns {String} HEX - Hexadecimal color string
 */
export const hexColorGenerator = (str) => {
  const hexCodeBlack = '000000';
  if (!str || typeof str !== 'string') {
    return `#${hexCodeBlack}`;
  }
  const hashCode = createHashCodeFromStr(str);
  const hexCode = createHexCodeFromHash(hashCode);
  return `#${hexCode}`;
