/**
 * Solution is based on zig-zag algorithm start from Li to Ln and Ln to Li + 1
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const stack = [];
  let [left, current] = [head, head];

  while (current) {
    stack.push(current);
    current = current.next;
  }

  let i = 0;
  // steps needed to reorder the link list
  const steps = Math.ceil(stack.length / 2);

  while (i < steps) {
    const nextLeft = left.next;
    const right = stack.pop();

    right.next = null;

    if (right === nextLeft || left === right) {
      // for even nodes the nextLeft will be the next left, and for odd nodes the both left and right is the same node
      return;
    }
    // ZigZac approach start from left (Li) to right (Ln)
    // Li to Ln
    left.next = right;
    // Ln to Li + 1
    right.next = nextLeft;

    left = nextLeft;
    i++;
  }
};
