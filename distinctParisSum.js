// Function to count distinct pairs
// in array whose sum equal to K
function cntDisPairs(arr, N, K) {
  // Stores count of distinct pairs
  // whose sum equal to K
  var cntPairs = 0;

  // Sort the array
  arr.sort();

  // Stores index of
  // the left pointer
  var i = 0;

  // Stores index of
  // the right pointer
  var j = N - 1;

  // Calculate count of distinct
  // pairs whose sum equal to K
  while (i < j) {
    // If sum of current pair
    // is equal to K
    if (arr[i] + arr[j] == K) {
      // Remove consecutive duplicate
      // array elements
      while (i < j && arr[i] == arr[i + 1]) {
        // Update i
        i++;
      }

      // Remove consecutive duplicate
      // array elements
      while (i < j && arr[j] == arr[j - 1]) {
        // Update j
        j--;
      }

      // Update cntPairs
      cntPairs += 1;

      // Update i
      i++;

      // Update j
      j--;
    }

    // if sum of current pair
    // less than K
    else if (arr[i] + arr[j] < K) {
      // Update i
      i++;
    } else {
      // Update j
      j--;
    }
  }
  return cntPairs;
}

// Driver Code

var arr = [2, 2, 2, 2];
var N = arr.length;
var K = 4;
console.log(cntDisPairs(arr, N, K));
