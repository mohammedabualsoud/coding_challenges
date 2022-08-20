/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let count = 0;
  const prefixSet = new Set();
  const suffixSet = new Set();
  const sLen = s.length;

  const prefix = Array(sLen).fill(0);
  const suffix = Array(sLen).fill(0);

  for (let i = 0; i < sLen; i++) {
    const left = i;
    const right = sLen - 1 - i;

    prefixSet.add(s[left]);
    suffixSet.add(s[right]);
    prefix[left] = prefixSet.size;
    suffix[right] = suffixSet.size;
  }

  for (let i = 1; i < prefix.length; i++) {
    if (prefix[i - 1] === suffix[i]) count++;
  }
  return count;
};
