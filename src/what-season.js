const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  const seasons = ["winter", "spring", "summer", "autumn"];

  if ((month >= 0 && month <= 1) || month === 11) {
    return seasons[0]; // winter
  } else if (month >= 2 && month <= 4) {
    return seasons[1]; // spring
  } else if (month >= 5 && month <= 7) {
    return seasons[2]; // summer
  } else {
    return seasons[3]; // autumn
  }
}

module.exports = {
  getSeason
};
