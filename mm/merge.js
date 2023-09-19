const START_INTERVAL_IDX = 0;
const END_INTERVAL_IDX = 1;

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a[START_INTERVAL_IDX] - b[START_INTERVAL_IDX]);

  const merged = [intervals[START_INTERVAL_IDX]];

  for (let i = 1; i < intervals.length; i++) {
    let lastEndInterval = merged[merged.length - 1][END_INTERVAL_IDX];

    if (lastEndInterval >= intervals[i][START_INTERVAL_IDX]) {
      merged[merged.length - 1][END_INTERVAL_IDX] = Math.max(
        lastEndInterval,
        intervals[i][END_INTERVAL_IDX]
      );
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
};
