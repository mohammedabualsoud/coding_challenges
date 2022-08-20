const calculate = (array, k) => {
  let count = 0;
  let dict = {};
  for (let i = 0; i < array.length; i++) {
    dict[array[i]] = dict[array[i]] ? dict[array[i]] + 1 : 1;

    if (array[i] * 2 === k && dict[k - array[i]] % 2 === 0) {
      // for pairs that are duplicates
      count++;
    } else if (array[i] * 2 !== k && dict[k - array[i]]) {
      count++;
    }
  }
  return count;
};

function solution(a, m, k) {
  let result = 0;

  for (let i = 0; i < a.length + 1 - m; i++) {
    result += calculate(a.slice(i, i + m), k);
  }

  return result;
}

console.log(solution([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10));
// console.log(solution([7, 5, 3, 5], 4, 10));
