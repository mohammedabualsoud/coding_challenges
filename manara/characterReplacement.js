/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacementV1 = function (s, k) {
  let [left, answer] = [0, 0];
  const charsCount = new Map();

  for (let right = 0; right < s.length; right++) {
    charsCount.set(s[right], (charsCount.get(s[right]) || 0) + 1);

    while (right - left + 1 - Math.max(...charsCount.values()) > k) {
      charsCount.set(s[left], charsCount.get(s[left]) - 1);
      left += 1;
    }

    answer = Math.max(answer, right - left + 1);
  }
  return answer;
};

var characterReplacementV2 = function (s, k) {
  let [left, answer, maxFreq] = [0, 0, 0];
  const charsCount = new Map();

  for (let right = 0; right < s.length; right++) {
    charsCount.set(s[right], (charsCount.get(s[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, charsCount.get(s[right]));

    while (right - left + 1 - maxFreq > k) {
      charsCount.set(s[left], charsCount.get(s[left]) - 1);
      left += 1;
    }

    answer = Math.max(answer, right - left + 1);
  }
  return answer;
};

console.log(characterReplacement("AABABBA", 2));
