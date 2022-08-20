const isZigzag = (a, b, c) => (b > a && b > c) || (b < a && b < c);
function solution(numbers) {
  const output = Array(numbers.length - 2).fill(0);

  for (let i = 0; i < output.length; i++) {
    output[i] = Number(isZigzag(numbers[i], numbers[i + 1], numbers[i + 2]));
  }

  return output;
}
