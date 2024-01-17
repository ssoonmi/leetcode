/*
1:38pm - 1:52pm

remove nth node from end of linked list

how many nodes there are to determine the nth node from end

questions:
will n always be less than the length of the list? yes

O(n) time complexity
O(1) space complexity

iterate through the linked list to figure out what the length is (fast pointer)
iterate again through the linked list until we reach the nth node and remove that node. to remove the node, we need to keep track of the previous node to reassign the next pointer of that node to the node after the nth node
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = null;
    let fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    while (fast) {
        if (!slow) slow = head;
        else slow = slow.next;
        fast = fast.next;
    }
    if (slow === null) return head.next;
    slow.next = slow.next.next;
    return head;
};
