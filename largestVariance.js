const _largestVariance = (s, alphabet, charsSet) => {
  let maxVariance = 0;

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      const [char1, char2] = [alphabet[i], alphabet[j]];

      if (char1 === char2 || (!charsSet.has(char1) && !charsSet.has(char2)))
        continue;

      let [freq1, freq2] = [0, 0];

      let diffSofar = 0;
      for (let k = 0; k < s.length; k++) {
        if (char1 === s[k]) {
          diffSofar++;
          freq1++;
        } else if (char2 === s[k]) {
          diffSofar--;
          freq2++;
        } else {
          continue;
        }

        if (freq2 > freq1) {
          diffSofar = 0;
          freq1 = 0;
          freq2 = 0;
          continue;
        }

        if (diffSofar && freq1 && freq2) {
          maxVariance = Math.max(maxVariance, diffSofar);
        }
      }
    }
  }
  return maxVariance;
};
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  const alphabet = [...Array(26)].map((_) => (++i).toString(36), (i = 9));
  const charsSet = new Set(s);

  return Math.max(
    _largestVariance(s, alphabet, charsSet),
    _largestVariance(s.split("").reverse().join(""), alphabet, charsSet)
  );
};

// console.log(largestVariance("lripaa"));
// console.log(largestVariance("lripaa".split("").reverse().join("")));

console.log(largestVariance("lripaa") === 1);
console.log(largestVariance("abcde") === 0);

console.log(largestVariance("aababbb") === 3);
// console.log(largestVariance("aababbb"));

console.log(largestVariance("bbacccabab") === 2);
console.log(largestVariance("aaaaab") === 4);
