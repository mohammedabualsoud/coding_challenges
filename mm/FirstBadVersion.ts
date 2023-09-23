/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1;
    let r = n;
    let answer = n;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      if (isBadVersion(mid)) {
        answer = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return answer;
  };
};
