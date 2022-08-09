const helper = (stones, i, dp) => {
  if (dp[i]) return dp[i];

  if (i >= stones.length) {
    dp[i] = 0;
    return 0;
  }

  let answer = Number.MIN_SAFE_INTEGER;
  // Pick 1 stone
  answer = Math.max(answer, stones[i] - helper(stones, i + 1, dp));

  // Pick 2 stone
  if (i + 1 < stones.length)
    answer = Math.max(
      answer,
      stones[i] + stones[i + 1] - helper(stones, i + 2, dp)
    );
  // Pick 3 stone
  if (i + 2 < stones.length)
    answer = Math.max(
      answer,
      stones[i] + stones[i + 1] + stones[i + 2] - helper(stones, i + 3, dp)
    );
  dp[i] = answer;
  return answer;
};
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const dp = {};
  const answer = helper(stoneValue, 0, dp);
  if (answer > 0) return "Alice";
  else if (answer === 0) return "Tie";
  return "Bob";
};
