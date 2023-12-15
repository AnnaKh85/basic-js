const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    const numStr = n.toString();
    let maxNum = parseInt(numStr.slice(1));
    for (let i = 1; i < numStr.length; i++) {
      const currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
      if (currentNum > maxNum) {
        maxNum = currentNum;
      }
    }

    return maxNum;
}

module.exports = {
  deleteDigit
};
