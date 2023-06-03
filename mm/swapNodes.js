/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let current = head;

  for (let i = 1; i <= k - 1; i++) {
    current = current.next;
  }

  const left = current;
  let right = head;

  while (current.next) {
    current = current.next;
    right = right.next;
  }

  const temp = left.val;
  left.val = right.val;
  right.val = temp;

  return head;
};
