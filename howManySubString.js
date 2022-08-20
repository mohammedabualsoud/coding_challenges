const VOWELS = ["a", "e", "i", "o", "u", "y"];

const isSubString = (pattern, source) => {
  if (pattern.length !== source.length) {
    return false;
  }
  for (let i = 0; i < source.length; i++) {
    const isVowel = VOWELS.includes(source[i]);

    if (pattern[i] == 0 && !isVowel) return false;
    if (pattern[i] == 1 && isVowel) return false;
  }

  return true;
};

function solution(pattern, source) {
  let result = 0;
  const patternLen = pattern.length;

  for (let i = 0; i < source.length; i++) {
    isSubString(pattern, source.substr(i, patternLen)) && result++;
  }
  return result;
}
