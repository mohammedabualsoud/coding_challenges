const reverse = (s) => s.split("").reverse().join("");

const isPalindrome = (s) => reverse(s) === s;

const swap = (chars, a, b) => {
  let temp = chars[a];
  chars[a] = chars[b];
  chars[b] = temp;
};

const getMinNumberOfSwaps = (chars) => {
  let numberOfSwaps = 0;
  let tryInverse = false;
  while (true) {
    let [left, right] = [0, chars.length - 1];
    let leftChar = chars[left];
    let rightChar = chars[right];

    if (leftChar === rightChar) break;
    // findNearest(s, left, right);
    // const condition = tryInvers
    while (left < right) {
      leftChar = chars[left];
      rightChar = chars[right];

      if (leftChar !== rightChar) {
        if (tryInverse) right--;
        else left++;
      } else {
        if (tryInverse) {
          swap(chars, right, right + 1);
        } else {
          swap(chars, left, left - 1);
        }

        numberOfSwaps++;
        break;
      }
    }

    if (left === right) {
      // reset
      tryInverse = true;
    }
  }
  return numberOfSwaps;
};
/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function (s) {
  let ans = 0;
  let [left, right] = [0, s.length - 1];

  let orginal = s.split("");
  chars = orginal;
  while (left < right) {
    ans += getMinNumberOfSwaps(chars);

    left++;
    right--;
    chars = orginal.slice(left, right + 1);
  }
  if (isPalindrome(orginal.join(""))) return ans;
  console.log(orginal);
};

("csaaqtqe");
("qcsaateq");
// console.log(getMinNumberOfSwaps("qvvtsaaqtqesvvqc".split("")));
// console.log(getMinNumberOfSwaps("eqvvhtcsaaqtqesvvqch".split("")));
console.log(minMovesToMakePalindrome("eqvvhtcsaaqtqesvvqch"));

// console.log(minMovesToMakePalindrome("aabb"));
// console.log(minMovesToMakePalindrome("letelt"));
