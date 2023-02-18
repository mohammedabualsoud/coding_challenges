/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...n);
};

const test = (expected, ...input) => {
  console.log(
    JSON.stringify(minPartitions(...input)) == JSON.stringify(expected)
  );
};

test(3, "32");
test(8, "82734");
test(9, "27346209830709182346");
