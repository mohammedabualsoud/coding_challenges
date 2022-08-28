const convertToAnagram = (str) => str.split("").sort().join("");

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const groupedAnagrams = {};
  for (const str of strs) {
    const anagram = convertToAnagram(str);
    if (groupedAnagrams[anagram]) groupedAnagrams[anagram].push(str);
    else groupedAnagrams[anagram] = [str];
  }
  return Object.values(groupedAnagrams);
};
