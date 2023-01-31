const calculateArea = (left, right, height) => {
  return Math.min(height[left], height[right]) * Math.abs(right - left);
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [left, right] = [0, height.length - 1];
  let maxArea = 0;
  while (left < right) {
    const currentArea = calculateArea(left, right, height);

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
