/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n * 2; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      const top = stack.pop();
      answer[top] = nums[i % n];
    }
    if (i < n) stack.push(i);
  }
  return answer;
};
console.log(nextGreaterElements([6, 5, 3, 4]));
