const startIdx = 0;
const endIdx = 1;

const isOverLapping = (point1, point2) => {
  return (
    (point1[endIdx] >= point2[startIdx] && point1[endIdx] <= point2[endIdx]) ||
    (point2[endIdx] >= point1[startIdx] && point2[endIdx] <= point1[endIdx])
  );
};

/**
 * O (n^2)
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const output = [];
  for (let i = 0; i < firstList.length; i++) {
    for (let j = 0; j < secondList.length; j++) {
      // if overlapping,  just add to our result
      if (isOverLapping(firstList[i], secondList[j])) {
        // MAX of start, min of end
        output.push([
          Math.max(firstList[i][startIdx], secondList[j][startIdx]),
          Math.min(firstList[i][endIdx], secondList[j][endIdx]),
        ]);
      }
    }
  }

  return output;
};

/**
 * O(N) where N is the length of both list
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersectionOptimized = function (firstList, secondList) {
  const output = [];

  let [first, second] = [0, 0];

  while (first < firstList.length && second < secondList.length) {
    if (isOverLapping(firstList[first], secondList[second])) {
      output.push([
        Math.max(firstList[first][startIdx], secondList[second][startIdx]),
        Math.min(firstList[first][endIdx], secondList[second][endIdx]),
      ]);
    }

    if (secondList[second][endIdx] >= firstList[first][endIdx]) {
      first++;
    } else {
      second++;
    }
  }

  return output;
};
