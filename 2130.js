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
    const values = [];
    let node = head;
    while (node) {
        values.push(node.val);
        node = node.next;
    }
    let i = 0;
    const mid = Math.floor(values.length / 2);
    let maxSum = -Infinity;
    while (i < mid) {
        maxSum = Math.max(maxSum, values[i] + values[values.length - 1 - i]);
        i++;
    }
    return maxSum;
};
