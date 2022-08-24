/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    if (dict[target - nums[i]] !== undefined)
      return [dict[target - nums[i]], i];
    dict[nums[i]] = i;
  }
};

const test = () => {
  console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)) === "[0,1]");
};

test();
