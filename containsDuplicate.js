/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numDict = {};

  for (num of nums) {
    numDict[num] = (numDict[num] || 0) + 1;
    if (numDict[num] > 1) return true;
  }
  return false;
};

const test = () => {
  console.log(containsDuplicate([1, 2, 3, 4]) === false);
  console.log(containsDuplicate([1, 2, 2, 3, 3, 3, 3, 34]) === true);
};

test();
