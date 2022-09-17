/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  const alphabet = [...Array(26)].map((_) => (++i).toString(36), (i = 9));

  let maxVariance = 0;

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      const [char1, char2] = [alphabet[i], alphabet[j]];

      if (char1 === char2) continue;

      let [freq1, freq2] = [0, 0];

      let canExtendprevQ = false;
      for (let k = 0; k < s.length; k++) {
        if (char1 === s[k]) freq1++;
        if (char2 === s[k]) freq2++;

        if (freq2 > 0) {
          maxVariance = Math.max(maxVariance, freq1 - freq2);
        } else if (freq2 === 0 && canExtendprevQ) {
          maxVariance = Math.max(maxVariance, freq1 - 1);
        }

        if (freq2 > freq1) {
          freq1 = freq2 = 0;
          canExtendprevQ = true;
        }
      }
    }
  }
  return maxVariance;
};

// console.log(largestVariance("lripaa"));
// console.log(largestVariance("lripaa".split("").reverse().join("")));

console.log(largestVariance("lripaa") === 1);
console.log(largestVariance("abcde") === 0);

console.log(largestVariance("aababbb") === 3);
// console.log(largestVariance("aababbb"));

console.log(largestVariance("bbacccabab") === 2);
console.log(largestVariance("aaaaab") === 4);
