/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = {};
  for (const [idx, num] of Object.entries(nums)) {
    dict[num] = idx;
  }

  for (const [idx, num] of Object.entries(nums)) {
    if (dict.hasOwnProperty([target - num]) && idx !== dict[target - num]) {
      return [idx, dict[target - num]];
    }
  }
  return [];
};
