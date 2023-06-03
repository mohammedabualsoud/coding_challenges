const swap = (node) => {
  if (!node || !node.next) return node;

  let newHead = node.next;
  node.next = swap(newHead.next);
  newHead.next = node;

  return newHead;
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
var swapPairs = function (head) {
  return swap(head);
};
