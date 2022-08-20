const calculateMedian = (array) =>
  array.reduce((partialSum, a) => partialSum + a, 0) / array.length;

function solution(a) {
  const medianDict = {};
  const medians = [];

  for (let index = 0; index < a.length; index++) {
    const array = a[index];

    const median = calculateMedian(array);
    medians.push(median);

    if (medianDict[median]) {
      medianDict[median].push(index);
    } else {
      medianDict[median] = [index];
    }
  }
  let output = [];

  medians.forEach((median, index) => {
    medianDict[median].sort((a, b) => a - b);
  });

  output = Object.values(medianDict);

  output = output.sort((a, b) => {
    return a[0] - b[0];
  });
  return output;
}
