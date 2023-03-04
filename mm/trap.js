/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const [maxLeft, maxRight] = [
    Array(height.length).fill(0),
    Array(height.length).fill(0),
  ];

  maxLeft[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  }

  maxRight[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i > 0; i--) {
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  }

  let maxTrappedWater = 0;

  for (let i = 0; i < height.length; i++) {
    const amountOfWater = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (amountOfWater > 0) {
      maxTrappedWater += amountOfWater;
    }
  }
  return maxTrappedWater;
};
