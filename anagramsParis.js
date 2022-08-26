const isAnagrams = (digit1, digit2) =>
  digit1
    .split("")
    .sort((a, b) => Number(a) - Number(b))
    .join("") ===
  digit2
    .split("")
    .sort((a, b) => Number(a) - Number(b))
    .join("");

function solution(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (isAnagrams(a[i], a[j])) count++;
    }
  }
  return count;
}
