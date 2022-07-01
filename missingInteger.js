// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const naturalNumArr = [...new Set(A.filter((num) => num > 0))];

  const sumOfNaturalNumbersUpToN =
    (naturalNumArr.length * (naturalNumArr.length + 1)) / 2;

  if (naturalNumArr.length === 0) return 1;
  let sumOfNaturalNumbers = 0;
  let max = 0;

  naturalNumArr.forEach((val) => {
    sumOfNaturalNumbers += val;
    if (val > max) {
      max = val;
    }
  });

  const diff = Math.abs(sumOfNaturalNumbersUpToN - sumOfNaturalNumbers);

  return diff === 0 ? naturalNumArr.length + 1 : max - diff;
}

function solutionB(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const dict = {};
  A.forEach((num) => (dict[num] = 1));

  let smallestNum = 1;
  while (dict[smallestNum]) {
    smallestNum++;
  }
  return smallestNum;
}

function solutionC(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let smallestNum = 1;
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] == smallestNum) smallestNum++;
  }
  return smallestNum;
}
