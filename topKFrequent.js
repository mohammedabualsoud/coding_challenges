/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const answer = [];

  const countsDict = {};
  const countsList = Array(nums.length + 1)
    .fill()
    .map(() => Array());

  for (num of nums) {
    countsDict[num] = (countsDict[num] || 0) + 1;
  }

  for (const [number, frequency] of Object.entries(countsDict)) {
    countsList[frequency].push(number);
  }

  for (let i = countsList.length - 1; i > 0; i--) {
    if (countsList[i].length) {
      answer.push(...countsList[i].slice(0, k));
      if (answer.length >= k) return answer;
    }
  }
  return answer;
};
