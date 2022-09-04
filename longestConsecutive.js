/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  let maxConsecutive = 1;
  const numSet = new Set(nums);
  for (num of nums) {
    if (!numSet.has(num - 1)) {
      // it's begining of a sequence.
      let length = 0;
      while (numSet.has(num + length)) {
        length++;
      }
      maxConsecutive = Math.max(maxConsecutive, length);
    }
  }
  return maxConsecutive;
};
