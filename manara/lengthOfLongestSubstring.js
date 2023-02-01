/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let answer = 0;
//   let [left, right] = [0, 0];

//   let charSet = new Set();
//   while (right < s.length) {
//     if (!charSet.has(s[right])) {
//       charSet.add(s[right]);
//       answer = Math.max(answer, right - left + 1);
//       right++;
//     } else {
//       charSet = new Set();
//       left++;
//       right = left;
//     }
//   }
//   return answer;
// };

var lengthOfLongestSubstring = function (s) {
  let answer = 0;
  let left = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
};
console.log(lengthOfLongestSubstring("pwwkew"));
