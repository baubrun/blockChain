import millify from "millify";

/**
 * convert string | number to number
 * @param {string | number} x
 * @returns float
 */
export const convertToNum = (x) => {
  if (x === isNaN || !x) return 0;
  return parseFloat(x);
};

/**
 * returns numbers in readable format
 * @param {string | number} n
 * @returns
 */
export const readNum = (n) => {
  const c = millify(convertToNum(n));
  return c;
};
