/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  const occurrences = new Map();

  for (const card of hand) {
    occurrences.set(card, (occurrences.get(card) || 0) + 1);
  }

  const sortedCards = [...new Set(hand)].sort((a, b) => b - a);

  while (sortedCards.length) {
    const smallest = sortedCards[sortedCards.length - 1];

    for (let card = smallest; card < smallest + groupSize; card++) {
      if (!occurrences.get(card)) return false;

      occurrences.set(card, occurrences.get(card) - 1);

      const cardCount = occurrences.get(card);
      if (cardCount != 0) continue;

      if (card !== sortedCards[sortedCards.length - 1]) {
        return false;
      }

      sortedCards.pop();
    }
  }

  return true;
};

// Using Min Heap  O(n Log n), Memory: O(n)
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  const occurrences = new Map();

  for (const card of hand) {
    occurrences.set(card, (occurrences.get(card) || 0) + 1);
  }

  const minHeap = getMinHeap(occurrences);

  while (!minHeap.isEmpty()) {
    const smallest = minHeap.front().element;

    for (let card = smallest; card < smallest + groupSize; card++) {
      if (!occurrences.get(card)) return false;

      occurrences.set(card, occurrences.get(card) - 1);

      const cardCount = occurrences.get(card);
      if (cardCount === 0) {
        if (card !== minHeap.front().element) return false;
        minHeap.dequeue();
      }
    }
  }

  return true;
};

const getMinHeap = (frequencyMap, minHeap = new MinPriorityQueue()) => {
  for (const [card] of frequencyMap) {
    minHeap.enqueue(card, card);
  }
  return minHeap;
};

return isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
