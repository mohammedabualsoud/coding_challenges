function solution(a) {
  const digitsCounts = Array(10).fill(0);
  let mostOccurences = 0;

  for (let i = 0; i < a.length; i++) {
    String(a[i])
      .split("")
      .forEach((digit) => {
        const intDigit = parseInt(digit);
        digitsCounts[intDigit]++;

        if (digitsCounts[intDigit] > mostOccurences) {
          mostOccurences++;
        }
      });
  }

  const output = [];
  for (let i = 0; i < digitsCounts.length; i++) {
    if (digitsCounts[i] === mostOccurences) output.push(i);
  }

  return output;
}
