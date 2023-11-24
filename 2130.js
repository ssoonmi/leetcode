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
    if (!head) return head;
    let node = head;
    let maxSum = -Infinity;
    const vals = {};
    let length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    node = head;
    let i = 0;
    while (node) {
        const j = length - 1 - i;
        if (j in vals) {
            maxSum = Math.max(maxSum, Number(vals[j]) + node.val);
        }
        vals[i] = node.val;
        i++;
        node = node.next;
    }
    if (maxSum === -Infinity) return 0;
    return maxSum;
};
