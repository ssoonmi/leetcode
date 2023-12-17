/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const stack = [];
    let node = head;
    while (node) {
        stack.push(node);
        node = node.next;
    }
    let i = 0;
    const mid = Math.floor(stack.length / 2);
    let maxSum = -Infinity;
    while (i < mid) {
        maxSum = Math.max(maxSum, stack[i].val + stack[stack.length - 1 - i].val);
        i++;
    }
    return maxSum;
};
