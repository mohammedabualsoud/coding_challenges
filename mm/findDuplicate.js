/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const expectedSum = ((nums.length - 1) * nums.length) / 2;

  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    sumA += nums[i];
  }

  sumB = sumA - nums[0] + nums[nums.length - 1];

  if (expectedSum === sumA) {
    return sumB + nums[0] - expectedSum;
  } else if (expectedSum === sumB) {
    return sumA + nums[nums.length - 1] - expectedSum;
  } else {
    return nums[0];
  }
};

findDuplicate([1, 4, 4, 2, 4]);
