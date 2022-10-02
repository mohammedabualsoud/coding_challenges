const leftChars = ["(", "{", "["];
const rightChars = [")", "}", "]"];
const charsMap = {
  ")": "(",
  "}": "{",
  "]": "[",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (leftChars.includes(element)) stack.push(element);
    else if (
      rightChars.includes(element) &&
      charsMap[element] === stack[stack.length - 1]
    )
      stack.pop();
    else {
      return false;
    }
  }

  return stack.length === 0;
};
