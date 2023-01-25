/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let process = true;
  let [word1Id, word2Id, leftChar, rightChar] = [0, 0, 0, 0];

  while (true) {
    const char1 = word1[word1Id][leftChar];
    const char2 = word2[word2Id][rightChar];

    if (char1 !== char2) return false;

    leftChar++;
    rightChar++;
    // move to next word
    if (leftChar === word1[word1Id].length) {
      word1Id++;
      leftChar = 0;
    }

    if (rightChar === word2[word2Id].length) {
      word2Id++;
      rightChar = 0;
    }

    if (word1Id === word1.length && word2Id === word2.length) break;

    if (word1Id === word1.length || word2Id === word2.length) return false;
  }
  return true;
};

const test = () => {
  const word1 = ["ab", "c"];
  const word2 = ["a", "bc"];
  console.log(arrayStringsAreEqual(word1, word2) === true);
  console.log(arrayStringsAreEqual(["a", "c"], ["s", "dddd"]) === false);
};

test();
