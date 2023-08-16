/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];
  let result = right;

  while (left <= right) {
    let k = Math.floor((left + right) / 2);

    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / k);
    }

    if (hours <= h) {
      right = k - 1;
      result = Math.min(result, k);
    } else {
      left = k + 1;
    }
  }
  return result;
};
console.log(minEatingSpeed([3, 6, 7, 11], 8));
