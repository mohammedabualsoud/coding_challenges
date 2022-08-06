/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  buy = prices[0];
  for (let day = 1; day < prices.length; day++) {
    if (buy > prices[day]) {
      buy = prices[day];
    } else if (prices[day] - buy > maxProfit) {
      maxProfit = prices[day] - buy;
    }
  }
  return maxProfit;
};

const test = () => {
  console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
};

test();
