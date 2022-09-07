const isNonAlphaNumeric = (char) => !/^[\da-z]$/i.test(char);

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let [left, right] = [0, s.length - 1];

  while (left < right) {
    while (left < right && isNonAlphaNumeric(s[left])) left++;
    while (left < right && isNonAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }
  return true;
};
