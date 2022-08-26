const convertToAnagram = (digit) =>
  String(digit)
    .split("")
    .sort((a, b) => Number(a) - Number(b))
    .join("");

function solution(a) {
  let ans = 0;
  const digitsAnagramed = a.map(convertToAnagram);

  const anagramMap = new Map();

  for (word of digitsAnagramed) {
    anagramMap.set(word, (anagramMap.get(word) || 0) + 1);
  }

  for (const [, wordCount] of anagramMap) {
    ans += Math.floor((wordCount * (wordCount - 1)) / 2);
  }

  return ans;
}
