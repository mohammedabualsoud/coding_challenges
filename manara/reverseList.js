const reverseListRecursive = (a, b) => {
  if (!b) return a;
  const next = b.next;
  b.next = a;
  return reverseListRecursive(b, next);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let ans = head;
  if (head && head.next) {
    ans = reverseListRecursive(head, head.next);
    head.next = null;
  }

  return ans;
};

var reverseListIterative = function (head) {
  let [left, right] = [null, head];

  while (right) {
    // track next right node
    const nextRight = right.next;

    // do the reverse
    right.next = left;

    left = right;
    right = nextRight;
  }

  return left;
};
