const { difference } = require("lodash");

const LIP = (array) => {
  const lip = Array(array.length).fill(1);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && lip[i] < lip[j] + 1) {
        lip[i] = lip[j] + 1;
      }
    }
  }
  return Math.max(...lip);
};

const LIPDifference = (array, difference) => {
  const lip = Array(array.length).fill(1);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] - array[j] === difference && lip[i] < lip[j] + 1) {
        lip[i] = lip[j] + 1;
      }
    }
  }
  return Math.max(...lip);
};

// LIPDifference3([1,5,7,8,5,3,4,2,1], -2)
// BEST SOLUTION
function longestSubsequence(arr, difference) {
  const LSMap = new Map();
  let maxLen = 1;
  for (let number of arr) {
    const diff = number - difference;
    if (!LSMap.has(diff)) {
      LSMap.set(number, 1);
    } else if (LSMap.has(diff)) {
      LSMap.set(number, 1 + LSMap.get(diff));
    }

    maxLen = Math.max(maxLen, LSMap.get(number));
  }

  return maxLen;
}

const LIPDifference3 = (array, difference) => {
  const lip = Array(array.length).fill(1);
  const hm = {};
  const diffs = {};

  for (let i = 1; i < array.length; i++) {
    diffs[array[i] - difference] = i;
  }

  debugger;
  for (let i = 1; i < array.length; i++) {
    // Math.abs()
    if (array[i] - array[i - 1] === difference) {
      lip[i] = 1 + lip[i - 1];
    } else if (hm[array[i] + difference]) {
      lip[i] = 1 + hm[array[i] + difference];
    }
    hm[array[i]] = lip[i];
  }
  return Math.max(...lip);
};

const LIPDifference2 = (array, difference) => {
  const sorted = [...new Set(array)].sort(); // cols
  const dp = [];

  for (let i = 0; i < array.length + 1; i++) {
    dp.push(Array(sorted.length + 1).fill(-1));
  }

  for (let i = 0; i < array.length + 1; i++) {
    for (let j = 0; j < sorted.length + 1; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (array[i - 1] == sorted[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[array.length][sorted.length];
  // return Math.max(...lip);
};
