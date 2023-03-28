/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numPositions = new Map();

  for (const [idx, num] of Object.entries(nums)) {
    if (!numPositions.has(num)) {
      numPositions.set(num, idx);
      continue;
    }

    if (Math.abs(idx - numPositions.get(num)) <= k) {
      return true;
    } else {
      numPositions.set(num, idx);
    }
  }
  return false;
};
