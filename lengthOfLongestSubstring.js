/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let [left, longestSubstr] = [0, 0];
  let charsMap = new Map();

  while (left < s.length) {
    if (charsMap.has(s[left])) {
      left = charsMap.get(s[left]);
      charsMap = new Map();
    } else {
      charsMap.set(s[left], left);
    }
    longestSubstr = Math.max(longestSubstr, charsMap.size);
    left++;
  }

  return longestSubstr;
};
