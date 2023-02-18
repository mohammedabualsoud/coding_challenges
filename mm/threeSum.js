/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const sortedNums = [...nums].sort((a, b) => a - b);

  for (let a = 0; a < sortedNums.length - 2; a++) {
    if (sortedNums[a] > 0) break;

    // Note: skip duplicates
    if (a > 0 && sortedNums[a] === sortedNums[a - 1]) continue;

    // Note: find the b & c combination that results in 0 sum
    let [left, right] = [a + 1, sortedNums.length - 1];
    while (left < right) {
      const sum = sortedNums[left] + sortedNums[right] + sortedNums[a];

      if (sum === 0) {
        result.push([sortedNums[a], sortedNums[left], sortedNums[right]]);

        // Note: need to skip if we have duplicates combination (b,c)
        while (left < right && sortedNums[left] === sortedNums[left + 1])
          left++;
        while (left < right && sortedNums[right] === sortedNums[right - 1])
          right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
