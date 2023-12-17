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
var reverseList = function(head) {
    if (!head) return head;
    const stack = [];
    let node = head;
    while (node) {
        stack.push(node);
        node = node.next;
    }
    let newHead = stack.pop();
    let prevNode = newHead;
    while (stack.length) {
        const node = stack.pop();
        prevNode.next = node;
        prevNode = node;
        if (!stack.length) {
            node.next = null;
            return newHead;
        }
    }
    return newHead;
};
