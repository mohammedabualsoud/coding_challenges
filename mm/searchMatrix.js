const binarySearch = (nums, start, end, target) => {
  const pivot = Math.floor((start + end) / 2);

  if (nums[pivot] === target) return pivot;
  if (start >= end) return -1;
  if (nums[pivot] < target) return binarySearch(nums, pivot + 1, end, target);
  else return binarySearch(nums, start, pivot - 1, target);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

/**
 *  Log(m) + Log(n)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const [m, n] = [matrix.length, matrix[0].length];
  let [top, bottom, pivot] = [0, m - 1, 0];

  while (top <= bottom) {
    pivot = Math.floor((top + bottom) / 2);

    if (target >= matrix[pivot][0] && target <= matrix[pivot][n - 1]) {
      // could be in this row.
      return search(matrix[pivot], target) > -1 ? true : false;
    }

    if (target > matrix[pivot][0] && target > matrix[pivot][n - 1]) {
      top = pivot + 1;
    } else {
      bottom = pivot - 1;
    }
  }
  return false;
};

const _searchMatrixRecursive = (matrix, top, bottom, target) => {
  const [m, n] = [matrix.length, matrix[0].length];
  const pivot = Math.floor((top + bottom) / 2);

  if (top > bottom) return false;

  if (target >= matrix[pivot][0] && target <= matrix[pivot][n - 1]) {
    // could be in this row.
    return search(matrix[pivot], target) > -1 ? true : false;
  }

  if (target > matrix[pivot][0] && target > matrix[pivot][n - 1]) {
    return _searchMatrixRecursive(matrix, pivot + 1, bottom, target);
  } else {
    return _searchMatrixRecursive(matrix, top, bottom - 1, target);
  }
};
// Log(m) + Log(n)
var searchMatrixRecursive = function (matrix, target) {
  return _searchMatrixRecursive(matrix, 0, matrix.length - 1, target);
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrixNTime = function (matrix, target) {
  const [m, n] = [matrix.length, matrix[0].length];

  for (let i = 0; i < m; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][n - 1]) {
      // could be in this row.
      return search(matrix[i], target) > -1 ? true : false;
    }
  }
  return false;
};
