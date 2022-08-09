/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stones) {
  const dp = new Array(stones.length + 1).fill(0);

  let i = stones.length - 1;
  while (i >= 0) {
    let answer = Number.MIN_SAFE_INTEGER;

    // Pick 1 stone
    answer = Math.max(answer, stones[i] - dp[i + 1]);
    // Pick 2 stone
    if (i + 1 < stones.length) {
      answer = Math.max(answer, stones[i] + stones[i + 1] - dp[i + 2]);
    }
    // Pick 3 stone
    if (i + 2 < stones.length) {
      answer = Math.max(
        answer,
        stones[i] + stones[i + 1] + stones[i + 2] - dp[i + 3]
      );
    }
    dp[i] = answer;

    i--;
  }

  const alice = dp[0];

  if (alice > 0) return "Alice";
  else if (alice === 0) return "Tie";
  return "Bob";
};

const test = () => {
  console.log(stoneGameIII([1, 2, 3, 7]) === "Bob");
  console.log(stoneGameIII([1, 2, 3, -9]) === "Alice");
};

test();
