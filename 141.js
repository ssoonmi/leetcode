/*
10:15pm - 10:19pm

linked list cycle

to detect cycle, you can use the slow/fast pointer algorithm

3 -> 2 -> 0 -> 4 -> null
     s
                     f

O(n) time complexity
O(1) space complexity

iterate through the linked list and update the slow and fast pointers
if they ever meet then return true
otherwise if fast ever reaches null, then return false
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) return true;
    }
    return false;
};
