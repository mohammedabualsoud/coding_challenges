const rec = (n, x) => {
  if (n === Math.pow(x, 3)) return true;
  return rec(n, x + 1);
};

var isPowerOfThreeRecursive = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  if (n % 3 === 0) return isPowerOfThree(n / 3);

  return false;
};
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  const log = Math.log10(n) / Math.log10(3);
  return log - Math.floor(log) === 0;
};
