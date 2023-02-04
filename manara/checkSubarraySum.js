/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const remainders = { 0: -1 };
  let total = 0;

  for (const [i, num] of Object.entries(nums)) {
    total += num;
    const remainder = total % k;

    if (!remainders.hasOwnProperty(remainder)) {
      remainders[remainder] = i;
    } else if (i - remainders[remainder] > 1) {
      return true;
    }
  }
  return false;
};
