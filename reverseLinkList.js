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
  const stack = [];
  let current = head;

  while (current.next) {
    stack.push(current);
    current = current.next;
  }

  head = current;
  while (stack.length) {
    current.next = stack.pop();
    current = current.next;
  }
  current.next = null;

  return head;
};
