// 5 5 4 -> 5 5 5
// 5 5 9 -> 5 6 0
// 9 9 -> 1 0 0

const _plusOne = (nums, answer, lastDigitIndex) => {
  if (nums[lastDigitIndex] > 0 && nums[lastDigitIndex] < 9) {
    answer[lastDigitIndex]++;
    return;
  } else if (lastDigitIndex === -1) {
    answer[0] = 1;
    answer.push(0);
    return;
  } else {
    answer[lastDigitIndex] = 0;
    _plusOne(nums, answer, lastDigitIndex - 1);
  }
};

const plusOneRecursive = (nums) => {
  const answer = [...nums];

  _plusOne(nums, answer, nums.length - 1);

  return answer;
};

const plusOne = (nums) => {
  const answer = [...nums];

  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > 0 && nums[i] < 9) {
      answer[i]++;
      return answer;
    } else {
      answer[i] = 0;
    }
  }

  if (i === -1) {
    answer[0] = 1;
    answer.push(0);
  }

  return answer;
};

console.log(plusOne([5, 5, 4]));
console.log(plusOne([5, 5, 9]));
console.log(plusOne([9, 9]));
