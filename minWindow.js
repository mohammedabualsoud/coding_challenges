/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length || (s !== t && s.length === 1 && t.length === 1))
    return "";
  if (s === t) return s;

  let [left, right, requiredChars, foundedChars, resLen, res] = [
    0,
    0,
    0,
    0,
    Number.MAX_SAFE_INTEGER,
    [0, 0],
  ];

  const [tCount, windowChars] = [new Map(), new Map()];

  for (const char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }
  requiredChars = tCount.size;

  for (; right < s.length; right++) {
    const char = s[right];

    tCount.has(char) && windowChars.set(char, (windowChars.get(char) || 0) + 1);

    if (tCount.has(char) && windowChars.get(char) === tCount.get(char)) {
      foundedChars += 1;
    }

    // Find an answer
    while (foundedChars === requiredChars) {
      if (right - left + 1 < resLen) {
        resLen = right - left + 1;
        res = [left, right];
      }

      windowChars.set(s[left], (windowChars.get(s[left]) || 0) - 1);

      if (
        tCount.has(s[left]) &&
        windowChars.get(s[left]) < tCount.get(s[left])
      ) {
        foundedChars -= 1;
      }
      left++;
    }
  }
  return resLen === Number.MAX_SAFE_INTEGER
    ? ""
    : s.substring(res[0], res[1] + 1);
};

console.log(minWindow("abc", "ac") === "abc");
console.log(minWindow("acbbaca", "aba") === "baca");
