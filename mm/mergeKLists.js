//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const findMinNodeIndex = (lists) => {
  let [min, minIndex] = [Number.MAX_SAFE_INTEGER, -1];

  for (const [idx, head] of lists.entries()) {
    if (head && head.val < min) {
      min = head.val;
      minIndex = idx;
    }
  }
  return minIndex;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const dummy = new ListNode();
  let current = dummy;

  while (true) {
    const minIdx = findMinNodeIndex(lists);
    if (minIdx === -1) break;
    // current minmum node
    current.next = lists[minIdx];
    lists[minIdx] = lists[minIdx].next;
    current = current.next;
  }

  return dummy.next;
};

var mergeKListsV2 = function (lists) {
  let current = null;
  for (let i = 0; i < lists.length; i++) {
    current = mergeTwoLists(current, lists[i]);
  }
  return current;
};

var mergeTwoLists = function (list1, list2) {
  let [left, right] = [list1, list2];
  const head = new ListNode();
  let current = head;

  while (left && right) {
    if (left.val <= right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }

    current = current.next;
  }

  current.next = left || right;
  return head.next;
};
