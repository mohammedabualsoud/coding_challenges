/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const charsMap = new Map();

  for (let i = 0; i < order.length; i++) {
    charsMap.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    let [word1, word2] = [words[i], words[i + 1]];

    for (let j = 0; j < word1.length; j++) {
      if (j === word2.length) {
        return false;
      }

      if (word1[j] !== word2[j]) {
        if (charsMap.get(word2[j]) < charsMap.get(word1[j])) {
          return false;
        } else {
          break;
        }
      }
    }
  }

  return true;
};
isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz");
