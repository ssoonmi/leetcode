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
var oddEvenList = function(head) {
    if (!head) return head;
    let endNode = null;
    let length = 1;
    let node = head;
    while (node.next) {
        length++;
        endNode = node.next;
        node = node.next;
    }
    node = head;
    if (length === 2) return head;
    length = Math.floor(length / 2);
    while (node && length) {
        if (node.next) {
            const nextNode = node.next;
            node.next = nextNode.next;
            nextNode.next = null;
            endNode.next = nextNode;
            endNode = nextNode;
        }
        node = node.next;
        length--;
    }
    return head;
};
