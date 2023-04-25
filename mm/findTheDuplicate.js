/**
 * applying 2 stages
 * 1. Detect Cyclic node in the linked list
 * 2. Apply Floyd algorithm using 2 slow pointers moving from the intersection node and the head node.
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  if (!nums.length) return -1;

  let [slow, fast] = moveFast(nums); /* Time O(N) */
  [slow, fast] = moveSlow(nums, slow, fast); /* Time O(N) */

  return slow;
};

const moveFast = (nums, start = 0) => {
  let [slow, fast] = [nums[start], nums[nums[start]]];

  const isSame = () => slow === fast;
  while (!isSame()) {
    /* Time O(N) */
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = start;

  return [slow, fast];
};

const moveSlow = (nums, slow, fast) => {
  const isSame = () => slow === fast;
  while (!isSame()) {
    /* Time O(N) */
    slow = nums[slow];
    fast = nums[fast];
  }

  return [slow, fast];
};
