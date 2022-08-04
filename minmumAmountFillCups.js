/**
 * 2335. Minimum Amount of Time to Fill Cups

 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  let seconds = 0;

  let sortedAmount = amount.sort((a, b) => b - a);
  let firstMax = 0,
    secondMax = 1;

  while (true) {
    if (sortedAmount[firstMax] && sortedAmount[secondMax]) {
      sortedAmount[firstMax]--;
      sortedAmount[secondMax]--;
      sortedAmount = amount.sort((a, b) => b - a);
      seconds++;
    } else if (sortedAmount[firstMax]) {
      sortedAmount[firstMax]--;
      sortedAmount = amount.sort((a, b) => b - a);
      seconds++;
    } else {
      break;
    }
  }

  return seconds;
};
