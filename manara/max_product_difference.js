/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => Number(a) - Number(b));
  return nums[nums.length - 2] * nums[nums.length - 1] - nums[0] * nums[1];
};
