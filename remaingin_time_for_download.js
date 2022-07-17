// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, B, Z) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!B.length) return -1;

  const downloadedBytes = B.reduce((a, b) => Number(a) + Number(b), 0);
  const remainingBytes = X - downloadedBytes;

  if (remainingBytes === 0) return 0;

  let lastObservations = B;
  let average = 0;

  if (Z && Z.length < B.length) {
    lastObservations = B.slice(B.length - Z);

    average = Math.floor(
      lastObservations.reduce((a, b) => Number(a) + Number(b), 0) / Z
    );
  } else {
    average = Math.floor(downloadedBytes / B.length);
  }

  if (average === 0) return -1;

  return remainingBytes / average;
}
