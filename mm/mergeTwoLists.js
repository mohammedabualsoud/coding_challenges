function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let [left, right] = [list1, list2];
  const head = new ListNode();
  let current = head;

  while (left && right) {
    if (left.val <= right.val) {
      current.next = new ListNode(left.val, left.next);
      left = left.next;
    } else {
      current.next = new ListNode(right.val, right.next);
      right = right.next;
    }

    current = current.next;
  }

  while (left) {
    current.next = new ListNode(left.val, left.next);
    left = left.next;
    current = current.next;
  }

  while (right) {
    current.next = new ListNode(right.val, right.next);
    right = right.next;
    current = current.next;
  }

  return head.next;
};
