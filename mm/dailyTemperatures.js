/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > stack[stack.length - 1][1]) {
      const [index] = stack.pop();
      answer[index] = i - index;
    }

    stack.push([i, temperatures[i]]);
  }

  return answer;
};
