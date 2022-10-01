var characterReplacement = function (s, k) {
  let [longestSubstr, left, right, maxFreq] = [0, 0, 0, 0];
  const charsDict = {};

  while (right < s.length) {
    charsDict[s[right]] = (charsDict[s[right]] || 0) + 1;
    maxFreq = Math.max(maxFreq, charsDict[s[right]]);

    while (right - left + 1 - maxFreq > k) {
      charsDict[s[left]]--;
      left++;
    }

    longestSubstr = Math.max(longestSubstr, right - left + 1);
    right++;
  }
  return longestSubstr;
};
