/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const cellCount = matrix.length;

  // Note: Find the transpose of the matrix
  for (let i = 0; i < cellCount; i++) {
    for (let j = i; j < cellCount; j++) {
      if (i !== j) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  // Note: Swap first column with last column while
  for (let i = 0; i < cellCount; i++) {
    for (let j = 0; j < cellCount / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][cellCount - j - 1];
      matrix[i][cellCount - j - 1] = temp;
    }
  }
  return matrix;
};

const test = (expected, ...input) => {
  console.log(JSON.stringify(rotate(...input)) === JSON.stringify(expected));
};

test(
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);

test(
  [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ],
  [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]
);
