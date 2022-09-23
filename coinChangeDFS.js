const dfs = (coins, amount, dp) => {
  console.log(amount, dp);
  if (amount < 0) return -1;
  if (amount === 0) return 0;
  if (dp[amount]) return dp[amount];

  let best = Number.MAX_SAFE_INTEGER;
  for (const coin of coins) {
    const res = dfs(coins, amount - coin, dp);
    best = Math.min(best, res === -1 ? best : res + 1);
    dp[amount] = best;
  }
  return best;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const best = dfs(coins, amount, {});
  return best === Number.MAX_SAFE_INTEGER ? -1 : best;
};

console.log(coinChange([5, 3, 4, 1], 7));
console.log(coinChange([1, 2, 5], 5));
console.log(coinChange([1, 2, 5], 100));
console.log(coinChange([1], 1));
console.log(coinChange([5, 2, 3, 6], 11));
