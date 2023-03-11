/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const maxPQ = new MaxPriorityQueue();

  const occurrences = {};
  for (const char of s) {
    occurrences[char] = (occurrences[char] | 0) + 1;
  }

  for (const [char, count] of Object.entries(occurrences)) {
    maxPQ.enqueue({ char, occurrences: count }, count);
  }

  let answer = "";
  let prev = null;

  while (!maxPQ.isEmpty() || prev !== null) {
    if (prev && maxPQ.isEmpty()) return "";

    const topFreqChar = maxPQ.dequeue().element;

    answer += topFreqChar.char;
    topFreqChar.occurrences--;

    if (prev) {
      maxPQ.enqueue(prev, prev.occurrences);
      prev = null;
    }

    if (topFreqChar.occurrences > 0) {
      prev = { char: topFreqChar.char, occurrences: topFreqChar.occurrences };
    }
  }

  return answer;
};
