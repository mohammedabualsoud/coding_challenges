"use strict";

const fs = require("fs");

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
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

function processLogs(logs, threshold) {
  // Write your code here
  const transactionCounts = {};
  const users = new Set();

  for (const line of logs) {
    let [sender, recipient, amount] = line.split(" ");
    sender = parseInt(sender);
    recipient = parseInt(recipient);
    amount = parseFloat(amount);

    if (!amount || !recipient || !sender) continue;

    transactionCounts[sender] = (transactionCounts[sender] || 0) + 1;
    if (sender !== recipient) {
      transactionCounts[recipient] = (transactionCounts[recipient] || 0) + 1;
    }

    if (transactionCounts[sender] >= threshold) {
      users.add(sender);
    }
    if (transactionCounts[recipient] >= threshold) {
      users.add(recipient);
    }
  }

  return [...users].sort((a, b) => a - b);
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const logsCount = parseInt(readLine().trim(), 10);

  let logs = [];

  for (let i = 0; i < logsCount; i++) {
    const logsItem = readLine();
    logs.push(logsItem);
  }

  const threshold = parseInt(readLine().trim(), 10);

  const result = processLogs(logs, threshold);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
