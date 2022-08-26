const reverse = (s) => s.split("").reverse().join("");

const isPalindrome = (s) => reverse(s) === s;

function solution(st) {
  if (isPalindrome(st)) return st;

  for (let i = 0; i < st.length; i++) {
    const possibleString = st + reverse(st.substr(0, i + 1));
    if (isPalindrome(possibleString)) return possibleString;
  }
}

console.log(solution("abcdc"));
isPalindrome("");
