/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const visitedNodes = new Map();
  let current = head;
  while (current) {
    if (visitedNodes.has(current)) return true;
    else visitedNodes.set(current, true);
    current = current.next;
  }

  return false;
};

var hasCycleTwoPointers = function (head) {
  let left = head;
  let right = head;
  const steps = 2;

  while (head.next && left) {
    let i = 0;

    while (i < steps && right) {
      if (left === right) {
        return true;
      }
      right = right.next;
      i++;
    }
    left = left.next;
  }

  return false;
};

var hasCycleTwoPointersV2 = function (head) {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    /* Time O(N) */
    slow = slow.next;
    fast = fast.next.next;

    const hasCycle = slow === fast;
    if (hasCycle) return true;
  }

  return false;
};
