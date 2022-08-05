function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      const distanceToCenter = getDistance(x, y, xCenter, yCenter);
      console.log(x, y, distanceToCenter);
      if (distanceToCenter <= radius) return true;
    }
  }
  return false;
};
