/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s === t) return s;

  let [left, right, nextPossibleStart] = [0, 0, 0];
  let minWin = [left, s.length - 1];
  const tDict = {};

  let charMatchesDic = {};
  const allCharsDict = {};

  for (char of t) {
    tDict[char] = (tDict[char] || 0) + 1;
    allCharsDict[char] = 0;
  }
  charMatchesDic = { ...allCharsDict };
  while (right < s.length) {
    const char = s[right];

    if (tDict[char]) {
      // if the character from the t set
      charMatchesDic[char] = (charMatchesDic[char] || 0) + 1;

      // save the expected substring start index
      if (left === nextPossibleStart && right !== left) {
        nextPossibleStart = right;
      }

      if (charMatchesDic[char] === tDict[char]) {
        // Remove the character from the dictionary, so that we can detect we finished find a substring match
        delete charMatchesDic[char];

        if (Object.keys(charMatchesDic).length === 0) {
          // we found a substring match
          if (right - left + 1 < minWin[1] - minWin[0] + 1) {
            // the new window size (i.e substring) is smaller than the old window size
            minWin = [left, right];
          }

          left = nextPossibleStart;
          right = nextPossibleStart - 1;
          charMatchesDic = { ...allCharsDict };
        }
      }
    }

    right++;
  }

  return minWin[0] !== 0 && minWin[1] !== t.length
    ? s.substring(minWin[0], minWin[1] + 1)
    : "";
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
// console.log(minWindow("a", "aa"));
