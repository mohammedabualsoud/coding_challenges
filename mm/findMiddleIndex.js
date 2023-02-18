/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const prefix = Array(nums.length + 1).fill(0);
  const postfix = Array(nums.length + 1).fill(0);
  let result = -1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    prefix[i + 1] = nums[i] + prefix[i];
    postfix[j] = nums[j] + postfix[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefix[i] === postfix[i + 1]) return i;
  }

  return result;
};
