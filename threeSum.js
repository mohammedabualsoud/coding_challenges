/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const answer = [];

  const sorted = [...nums].sort();

  let a = 0;
  while (a < sorted.length) {
    if (a > 0 && sorted[a - 1] === sorted[a]) {
      a++;
      continue;
    }
    // find b, c 2 sum problem
    let left = 0;
    let right = sorted.length - 1;

    while (left < right) {
      const threeSum = sorted[a] + sorted[left] + sorted[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        answer.push([sorted[a], sorted[left], sorted[right]]);
        left++;
        while (left < right && sorted[left - 1] === sorted[left]) left++;
      }
    }
    a++;
  }
  return answer;
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
