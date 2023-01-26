/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const setA = new Set(nums1);
  const setB = new Set(nums2);

  const result = [];
  for (const num of setA) {
    if (num in setB) result.push(num);
  }

  return result;
};
