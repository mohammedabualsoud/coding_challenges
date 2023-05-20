const DIGITS_TO_CHARS = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const result = [];

  const backtrack = (digitIdx, currentString) => {
    if (currentString.length === digits.length) {
      result.push(currentString);
      return;
    }

    for (const char of DIGITS_TO_CHARS[digits[digitIdx]]) {
      backtrack(digitIdx + 1, currentString + char);
    }
  };

  if (digits.length) backtrack(0, "");

  return result;
};
