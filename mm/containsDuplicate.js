/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numOccurrences = {};
  for (const num of nums) {
    numOccurrences[num] = (numOccurrences[num] || 0) + 1;
    if (numOccurrences[num] > 1) return true;
  }
  return false;
};
