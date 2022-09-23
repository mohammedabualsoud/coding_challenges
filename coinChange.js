const bfs = (coins, node, queue, visited) => {
  if (visited[node.remaining]) return;

  visited[node.remaining] = true;
  // start exploring
  const child = [];
  for (const coin of coins) {
    if (coin <= node.remaining) {
      child.push({ remaining: node.remaining - coin, steps: node.steps + 1 });
    }
  }
  queue.push(...child);
  //   console.log("child", child);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount <= 0) return 0;
  const queue = [{ remaining: amount, steps: 0 }];
  const visited = {};

  let fewestNum = Number.MAX_SAFE_INTEGER;

  while (queue.length) {
    const node = queue.shift();
    if (node.remaining === 0) fewestNum = Math.min(fewestNum, node.steps);
    // console.log("parent", node.remaining);
    bfs(coins, node, queue, visited);
  }

  return fewestNum === Number.MAX_SAFE_INTEGER ? -1 : fewestNum;
};

console.log(coinChange([5, 3, 4, 1], 7) === 2);
console.log(coinChange([5, 2, 1], 11) === 3);
console.log(coinChange([5, 2, 3, 6], 11) === 2);
console.log(coinChange([1, 2, 5], 100));
