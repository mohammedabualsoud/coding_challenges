/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      if (target < nums[left] && nums[left] <= nums[mid]) {
        // the target might be in the rotated section
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target > nums[right] && nums[right] >= nums[mid]) {
        // the target might be in the rotated section
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([1, 3], 1) === 0);
console.log(search([3, 1], 1) === 1);
console.log(search([5, 1, 2, 3, 4], 1) === 1);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8) === 4);
