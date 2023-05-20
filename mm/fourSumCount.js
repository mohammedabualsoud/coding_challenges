var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  const numberMap = new Map();

  for (const num1 of nums3) {
    for (const num2 of nums4) {
      numberMap.set(num1 + num2, (numberMap.get(num1 + num2) || 0) + 1);
    }
  }

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      count += numberMap.get(-(num1 + num2)) || 0;
    }
  }

  return count;
};
