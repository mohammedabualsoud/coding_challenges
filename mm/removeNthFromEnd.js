//* Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) {
    return null;
  }

  const queue = [];
  let current = head;
  const requiredNodesCountForTracking = n + 1;

  while (current !== null) {
    if (queue.length >= requiredNodesCountForTracking) {
      queue.shift();
    }

    queue.push(current);
    current = current.next;
  }

  console.log("queue", queue);

  const prev = queue[0];
  if (queue.length >= requiredNodesCountForTracking && prev && prev.next) {
    prev.next = prev.next.next;
  } else if (prev && !prev.next) {
    head.next = null;
  } else if (head === prev) {
    head = head.next;
  }

  return head;
};

var removeNthFromEndTwoPointers = function (head, n) {
  const dummyNode = new ListNode(0, head);
  let left = dummyNode;
  let right = head;

  let iterations = 0;
  // move right to head + N
  while (iterations < n && right) {
    right = right.next;
    iterations++;
  }

  // Shift the pts by 1 until the end of the list
  while (right) {
    right = right.next;
    left = left.next;
  }

  // Delete the node
  left.next = left.next.next;

  return dummyNode.next;
};
