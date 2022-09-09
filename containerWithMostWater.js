/**
 * O(n ^ 2)
 * @param {number[]} height
 * @return {number}
 */
var maxAreaNaiveSolution = function (height) {
  let maxArea = Number.MIN_SAFE_INTEGER;

  for (let j = height.length - 1; j > 0; j--) {
    for (let i = 0; i < height.length - 1; i++) {
      const area = Math.min(height[j], height[i]) * (j - i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};

/**
 * O(n)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = Number.MIN_SAFE_INTEGER;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > maxArea) {
      maxArea = area;
    }

    if (height[left] <= height[right]) left++;
    else if (height[right] <= height[left]) right--;
  }

  return maxArea;
};
