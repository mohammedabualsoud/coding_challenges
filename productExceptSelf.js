/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = Array(nums.length + 1).fill(1);
  const postfix = Array(nums.length + 1).fill(1);
  const ans = Array(nums.length);
  // Note this solution is with O(n) memory , and O(n) time
  // Answer(i) = prefix(i - 1 ) * postfix(i + 1)
  // First calculate prefix & postfix.
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (prefix[i] * nums[i] === -0) prefix[i + 1] = 0;
    else prefix[i + 1] = prefix[i] * nums[i];

    if (postfix[j + 1] * nums[j] === -0) postfix[j] = 0;
    else postfix[j] = postfix[j + 1] * nums[j];
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix[i] * postfix[i + 1];
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfV2 = function (nums) {
  let prefix = 1;
  let postfix = 1;
  const ans = Array(nums.length);

  // Note this solution is with O(1) memory since the ans isn't counted, and O(n) time
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
    if (prefix === -0) {
      prefix = 0;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = postfix * ans[i];
    postfix *= nums[i];
    if (postfix === -0) {
      postfix = 0;
    }
    if (ans[i] === -0) {
      ans[i] = 0;
    }
  }

  return ans;
};

console.log(productExceptSelfV2([1, 2, 3, 4]));
