/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numDict = {};

  for (num of nums) {
    if (numDict[num]) return true;
    numDict[num] = true;
  }
  return false;
};

const test = () => {
  console.log(containsDuplicate([1, 2, 3, 4]) === false);
  console.log(containsDuplicate([1, 2, 2, 3, 3, 3, 3, 34]) === true);
};

test();
