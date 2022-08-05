//leetcode.com/problems/combination-sum-iv/
/**
 * 
 * 
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 * EX:
 * 
 * Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
https: var combinationSum4 = function (nums, target) {
  const dp = { 0: 1 };

  for (let currentTarget = 1; currentTarget <= target; currentTarget++) {
    dp[currentTarget] = 0;
    for (const num of nums) {
      if (num <= currentTarget) {
        dp[currentTarget] += dp[currentTarget - num];
      }
    }
  }
  return dp[target];
};

const test = () => {
  if (combinationSum4([1, 2, 3], 4) !== 7) {
    console.info("It should be 7");
    return;
  }
  console.log("All tests passed");
};

test();
