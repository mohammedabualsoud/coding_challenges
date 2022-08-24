/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;

  let aOccurrences = new Map();
  let bOccurrences = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    aOccurrences.set(sChar, 1 + (aOccurrences.get(sChar) || 0));
    bOccurrences.set(tChar, 1 + (bOccurrences.get(tChar) || 0));
  }

  for ([char] of aOccurrences) {
    if (aOccurrences.get(char) !== bOccurrences.get(char)) return false;
  }
  return true;
};

const test = () => {
  console.log(isAnagram("aba", "baa") === true);

  console.log(isAnagram("aba", "baa") === true);

  console.log(isAnagram("aba", "bba") === false);
};

test();
