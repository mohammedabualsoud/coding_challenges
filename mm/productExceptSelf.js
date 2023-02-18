/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = Array(nums.length + 1).fill(1);
  const postfix = Array(nums.length + 1).fill(1);
  const result = Array(nums.length).fill(1);

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    prefix[i + 1] = nums[i] * prefix[i];
    postfix[j] = nums[j] * postfix[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * postfix[i + 1];
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
