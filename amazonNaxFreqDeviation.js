"use strict";

const fs = require("fs");
const { exit } = require("process");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getMaxFreqDeviation' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

const findFreqDeviation = (s) => {
  const charsHistogram = {};
  let [min, max, minChar, maxChar] = [Number.MAX_SAFE_INTEGER, 0, s[0], s[0]];

  for (const char of s) {
    charsHistogram[char] = (charsHistogram[char] || 0) + 1;

    if (charsHistogram[char] > max) {
      max = charsHistogram[char];
      maxChar = char;
    }

    if (charsHistogram[char] <= min) {
      minChar = char;
      min = charsHistogram[char];
    }
  }

  if (minChar === maxChar) return 0;
  return max - charsHistogram[minChar];
};

function getMaxFreqDeviation(s) {
  // Write your code here

  let maxFreq = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const subStringMaxDeviation = findFreqDeviation(s.substring(i, j));

      if (subStringMaxDeviation > maxFreq) {
        maxFreq = subStringMaxDeviation;
      }
    }
  }
  return maxFreq;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = getMaxFreqDeviation(s);

  ws.write(result + "\n");

  ws.end();
}

console.log(getMaxFreqDeviation("bbacccabab"));
console.log(getMaxFreqDeviation("aaaaab"));
exit();
