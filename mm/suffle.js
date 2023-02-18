/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(nums[i - 1], nums[n + (i - 1)]);
  }
  return result;
};
const test = (expected, ...input) => {
  console.log(shuffle(...input));

  console.log(JSON.stringify(shuffle(...input)) == JSON.stringify(expected));
};

test([1, 4, 2, 5, 3, 6], [1, 2, 3, 4, 5, 6], 3);
