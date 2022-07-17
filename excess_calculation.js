// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  const r = Array(B.length).fill(0);
  const billindexs = {};

  for (let index = 0; index < B.length; index++) {
    const value = B[index];
    billindexs[value] = index;
  }

  const bills = [...B];
  bills.sort((a, b) => Number(b - Number(a)));

  for (let index = 0; index < B.length; index++) {
    const billValue = bills[index];
    r[billindexs[billValue]] =
      S * (billValue / bills.reduce((a, b) => Number(a) + Number(b), 0));
    bills = bills.slice(index + 1);
  }

  // TODO::
}
