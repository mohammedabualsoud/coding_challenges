/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// O(num1 * num2) O(n2)
var nextGreaterElement = function (nums1, nums2) {
  const answer = new Array(nums1.length).fill(-1);
  const nums1IndexMap = new Map();

  for (const [index, value] of Object.entries(nums1)) {
    nums1IndexMap.set(value, index);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1IndexMap.has(nums2[i])) continue;

    let j = i + 1;
    while (nums2[i] >= nums2[j] && j < nums2.length) {
      j++;
    }

    if (nums2[i] < nums2[j]) {
      answer[nums1IndexMap.get(nums2[i])] = nums2[j];
    }
  }

  return answer;
};

// O(nums1 + nums2) O(n)
var nextGreaterElement = function (nums1, nums2) {
  const answer = new Array(nums1.length).fill(-1);
  const nums1IndexMap = new Map();

  for (const [index, value] of Object.entries(nums1)) {
    nums1IndexMap.set(value, index);
  }

  const stack = [];
  for (num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      const top = stack.pop();
      answer[nums1IndexMap.get(top)] = num;
    }

    if (nums1IndexMap.has(num)) stack.push(num);
  }

  return answer;
};
nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
