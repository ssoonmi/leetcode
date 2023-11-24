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
var deleteMiddle = function(head) {
    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }
    let mid = Math.floor(length / 2) - 1
    node = head;
    while (mid > 0) {
        mid--;
        node = node.next;
    }
    let midNode = node.next;
    if (!midNode) return null;
    node.next = midNode.next;
    return head;
};
