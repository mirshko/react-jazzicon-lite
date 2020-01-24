/**
 * @name jsNumberForAddress
 * @param {String} address The address to convert into a number for the seed of the Jazzicon component
 *
 * @returns {Number}
 */
export default function jsNumberForAddress(address) {
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);

  return seed;
}
