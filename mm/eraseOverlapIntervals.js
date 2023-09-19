const START_INTERVAL_IDX = 0;
const END_INTERVAL_IDX = 1;

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const eraseOverlapIntervals = (intervals) => {
  let numOfRemovedIntervals = 0;

  intervals.sort((a, b) => a[START_INTERVAL_IDX] - b[START_INTERVAL_IDX]);

  let prevEnd = intervals[0][END_INTERVAL_IDX];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][START_INTERVAL_IDX] >= prevEnd) {
      prevEnd = intervals[i][END_INTERVAL_IDX];
    } else {
      // Overlapping
      numOfRemovedIntervals++;
      prevEnd = Math.min(prevEnd, intervals[i][END_INTERVAL_IDX]);
    }
  }

  return numOfRemovedIntervals;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
