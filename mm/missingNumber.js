/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sumUpToN = (nums.length * (nums.length + 1)) / 2;

  let numSum = 0;
  for (let i = 0; i < nums.length; i++) {
    numSum += nums[i];
  }

  return Math.abs(sumUpToN - numSum);
};
