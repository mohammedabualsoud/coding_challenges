function solution(s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  const answer = [];

  for (char of s1) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  for (char of s2) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  let i = 0;
  let j = 0;

  while (i < s1.length && j < s2.length) {
    const left = s1[i];
    const right = s2[j];

    const leftCount = map1.get(left);
    const rightCount = map2.get(right);

    if (leftCount < rightCount) {
      answer.push(left);
      i++;
    } else if (leftCount > rightCount) {
      answer.push(right);
      j++;
    } else {
      if (left < right || left === right) {
        answer.push(left);
        i++;
      } else {
        answer.push(right);
        j++;
      }
    }
  }

  while (i < s1.length) {
    answer.push(s1[i]);
    i++;
  }
  while (j < s2.length) {
    answer.push(s2[j]);
    j++;
  }

  return answer.join("");
}
console.log(solution("simple", "abc"));
