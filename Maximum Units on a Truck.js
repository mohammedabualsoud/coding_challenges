/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let maxUnits = 0;

  for (let [boxCounts, units] of boxTypes) {
    if (truckSize === 0) return maxUnits;

    while (boxCounts && truckSize) {
      maxUnits += units;
      truckSize--;
      boxCounts--;
    }
  }

  return maxUnits;
};

//  [[5,10],[2,5],[4,7],[3,9]], truckSize = 10 unit 0
// [[4,10],[2,5],[4,7],[3,9]], truckSize = 9 unit 10

// [[3,10],[2,5],[4,7],[3,9]], truckSize = 8 unit 10 + 10

// [[2,10],[2,5],[4,7],[3,9]], truckSize = 7 unit 10 + 10 + 10

// [[1,10],[2,5],[4,7],[3,9]], truckSize = 6 unit 10 + 10 + 10 + 10

// [[0,10],[2,5],[4,7],[3,9]], truckSize = 5 unit 10 + 10 + 10 + 10 + 10

// [[0,10],[2,5],[4,7],[0,9]], truckSize = 2 unit 10 + 10 + 10 + 10 + 10 + 27

// [[0,10],[2,5],[4,7],[0,9]], truckSize = 0 unit 10 + 10 + 10 + 10 + 10 + 27 + 14
