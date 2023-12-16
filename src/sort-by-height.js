const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const sortedIndices = arr
    .map((value, index) => (value !== -1 ? index : -1))
    .filter((index) => index !== -1);

  const sortedValues = arr
    .filter((value) => value !== -1)
    .sort((a, b) => a - b);

  sortedIndices.forEach((index, i) => {
    arr[index] = sortedValues[i];
  });

  return arr;
}

module.exports = {
  sortByHeight
};
