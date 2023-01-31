/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  let buy = prices[0];

  for (let day = 1; day < prices.length; day++) {
    if (buy > prices[day]) {
      buy = prices[day];
    } else if (prices[day] - buy > answer) {
      answer = prices[day] - buy;
    }
  }
  return answer;
};
