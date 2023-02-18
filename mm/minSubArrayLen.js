/**
 * init 2 pointers l & r & min length
 * Find the prefix sum to find the sum of partials
 * start increase r as long as the total sum < target
 * increase left ptr as long as sum >= target
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let [left, minLen] = [0, Number.MAX_SAFE_INTEGER];

  // compute the prefix sum
  const prefixSum = nums.reduce((accumulativeSum, num, index) => {
    accumulativeSum.push(num + (accumulativeSum[index - 1] || 0));
    return accumulativeSum;
  }, []);

  for (let right = 0; right < nums.length; right++) {
    // enlarge the window as long as the total sum < target, and reduce it otherwise.
    while (prefixSum[right] - (prefixSum[left - 1] || 0) >= target) {
      minLen = Math.min(minLen, right - left + 1);
      left++;
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
