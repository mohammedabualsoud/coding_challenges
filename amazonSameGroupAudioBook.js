const dfs = (related, current, visited) => {
  if (visited[current]) {
    return;
  }
  visited[current] = true;

  for (let j = 0; j < related[current].length; j++) {
    if (!visited[j] && related[current][j] === "1") {
      dfs(related, j, visited);
    }
  }
};

const solution = (related) => {
  let groupCount = 0;
  const visited = [];

  for (let i = 0; i < related.length; i++) {
    if (!visited[i]) {
      dfs(related, i, visited);
      groupCount++;
    }
  }
  return groupCount;
};

console.log(solution(["110", "111", "011"]) === 1);
console.log(solution(["1100", "1110", "0110", "0001"]) === 2);
