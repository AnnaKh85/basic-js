const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let numStr = n.toString();
    while (numStr.length > 1) {
      const sum = numStr
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      numStr = sum.toString();
    }
    const result = parseInt(numStr, 10);

    return result;
}

module.exports = {
  getSumOfDigits
};
