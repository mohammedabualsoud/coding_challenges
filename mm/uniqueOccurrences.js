/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const numOccurrences = {};
  for (const num of arr) {
    numOccurrences[num] = (numOccurrences[num] || 0) + 1;
  }

  const occurrencesScanner = {};
  for (const [, numCount] of Object.entries(numOccurrences)) {
    if (occurrencesScanner[numCount]) return false;

    occurrencesScanner[numCount] = true;
  }
  return true;
};
