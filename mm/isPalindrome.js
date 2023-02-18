const ALPHANUMERIC_REG = /^[a-z0-9]+$/i;
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let [left, right] = [0, s.length - 1];

  while (left < right) {
    // Note: skip non-alphanumeric characters
    if (!ALPHANUMERIC_REG.test(s[left])) {
      left++;
      continue;
    }
    if (!ALPHANUMERIC_REG.test(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
