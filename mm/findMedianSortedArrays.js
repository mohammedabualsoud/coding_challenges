/**
 * Time O((N + M)) | Space O(N + M)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedList = new Array();
  let left = 0;
  let right = 0;

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      mergedList.push(nums1[left]);
      left++;
    } else {
      mergedList.push(nums2[right]);
      right++;
    }
  }

  while (left < nums1.length) {
    mergedList.push(nums1[left]);
    left++;
  }

  while (right < nums2.length) {
    mergedList.push(nums2[right]);
    right++;
  }

  const medianIndex = Math.floor(mergedList.length / 2);

  return mergedList.length % 2 == 0
    ? (mergedList[medianIndex - 1] + mergedList[medianIndex]) / 2
    : mergedList[medianIndex];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * Time O(log(N * M)) | Space O(N)
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const canSwap = nums2.length < nums1.length;
  if (canSwap) [nums1, nums2] = [nums2, nums1];

  let [left, right] = [0, nums1.length - 1];
  const totalLength = nums1.length + nums2.length;
  const mid = totalLength >> 1;
  const isEven = totalLength % 2 === 0;

  while (true) {
    const mid1 = left + right;
    const mid2 = mid - mid1 - 2;
    const { aLeft, aRight, bLeft, bRight } = getPointers(
      nums1,
      mid1,
      nums2,
      mid2
    );

    const isTarget = aLeft <= bRight && bLeft <= aRight;
    if (isTarget)
      return isEven
        ? (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
        : Math.min(aRight, bRight);

    const isTargetGreater = aLeft <= bRight;
    if (isTargetGreater) left = mid1 + 1;

    const isTargetLess = bRight < aLeft;
    if (isTargetLess) right = mid1 - 1;
  }
};

const getPointers = (nums1, mid1, nums2, mid2) => {
  const getLeft = (nums, index) => (0 <= index ? nums[index] : -Infinity);

  const [aLeft, bLeft] = [getLeft(nums1, mid1), getLeft(nums2, mid2)];

  const getRight = (nums, index) =>
    index + 1 < nums.length ? nums[index + 1] : Infinity;

  const [aRight, bRight] = [getRight(nums1, mid1), getRight(nums2, mid2)];

  return { aLeft, aRight, bLeft, bRight };
};
