/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const version1Revisions = version1.split(".");
  const version2Revisions = version2.split(".");

  const revisions = Math.max(
    version1Revisions.length,
    version2Revisions.length
  );

  let i = 0;
  while (i < revisions) {
    const rev1 = parseInt(version1Revisions[i] || "0");
    const rev2 = parseInt(version2Revisions[i] || "0");

    if (rev1 < rev2) {
      return -1;
    } else if (rev1 > rev2) {
      return 1;
    } else {
      if (i == revisions - 1) return 0;
      i++;
    }
  }
};

// Input: version1 = "1.01", version2 = "1.001"

console.log(compareVersion("1.01", "1.001"));
// Input: version1 = "1.0", version2 = "1.0.0"
console.log(compareVersion("1.0", "1.0.0"));

// Input: version1 = "0.1", version2 = "1.1"
console.log(compareVersion("0.1", "1.1"));
