/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

const dfs = (root, flattenedNodes) => {
  let node = root;
  while (node) {
    flattenedNodes.push(node);
    dfs(node.child, flattenedNodes);
    node = node.next;
  }
};

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  const flattenedNodes = [];
  dfs(head, flattenedNodes);

  for (let i = 0, j = 1; i < flattenedNodes.length; i++, j++) {
    const left = flattenedNodes[i];
    const right = flattenedNodes[j];

    if (right) {
      left.next = right;
      right.prev = left;
      left.child = null;
      right.child = null;
    }
  }

  return head;
};
