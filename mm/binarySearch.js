const binarySearch = (nums, start, end, target) => {
  const pivot = Math.floor((start + end) / 2);

  if (nums[pivot] === target) return pivot;
  if (start >= end) return -1;
  if (nums[pivot] < target) return binarySearch(nums, pivot + 1, end, target);
  else return binarySearch(nums, start, pivot - 1, target);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

console.log(search([1, 2, 3, 4, 5], 5));
