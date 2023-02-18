/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s === t) return s;

  let [left, right] = [0, 0];
  let minWin = [left, Number.MAX_SAFE_INTEGER];

  const tCount = new Map();
  const windowCount = new Map();

  for (char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }

  const requiredChars = tCount.size;
  let windowChars = 0;

  for (; right < s.length; right++) {
    const char = s[right];

    if (tCount.has(char)) {
      windowCount.set(char, (windowCount.get(char) || 0) + 1);

      if (windowCount.get(char) === tCount.get(char)) {
        windowChars++;
      }
    }

    while (windowChars >= requiredChars) {
      if (right - left + 1 < minWin[1] - minWin[0] + 1) {
        minWin = [left, right];
      }

      if (windowCount.has(s[left])) {
        windowCount.set(s[left], windowCount.get(s[left]) - 1);

        if (windowCount.get(s[left]) < tCount.get(s[left])) {
          windowChars--;
        }
      }

      left++;
    }
  }

  return minWin[1] === Number.MAX_SAFE_INTEGER
    ? ""
    : s.substring(minWin[0], minWin[1] + 1);
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "aa"));
