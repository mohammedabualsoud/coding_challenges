/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stones) {
  let i = stones.length - 1;
  let i_1 = 0;
  let i_2 = 0;
  let i_3 = 0;
  while (i >= 0) {
    let answer = Number.MIN_SAFE_INTEGER;

    // Pick 1 stone
    answer = Math.max(answer, stones[i] - i_1);
    // Pick 2 stone
    if (i + 1 < stones.length) {
      answer = Math.max(answer, stones[i] + stones[i + 1] - i_2);
    }
    // Pick 3 stone
    if (i + 2 < stones.length) {
      answer = Math.max(
        answer,
        stones[i] + stones[i + 1] + stones[i + 2] - i_3
      );
    }
    i_3 = i_2;
    i_2 = i_1;
    i_1 = answer;

    i--;
  }

  const alice = i_1;

  if (alice > 0) return "Alice";
  else if (alice === 0) return "Tie";
  return "Bob";
};

const test = () => {
  console.log(stoneGameIII([1, 2, 3, 7]) === "Bob");
  console.log(stoneGameIII([1, 2, 3, -9]) === "Alice");
};

test();
