/*
12:35pm - 12:50pm

head of a singly-linked list
reorder the list so that the last node comes after the first node, and the second node comes after the last node and the second to last node comes after the second node, etc.

input:  1 -> 2 -> 3 -> 4 -> 5
output: 1 -> 5 -> 2 -> 4 -> 3

input:  1 -> 2 -> 3 -> 4
output: 1 -> 4 -> 2 -> 3

stack = [4, 5]
go back to the head, pop off the node from the stack
that node will be the next node after the head

O(n) time complexity
O(n) space complexity

iterate through the linked list to find the mid point
(use two pointers - slow pointer and a fast pointer where the slow pointer will end up at the mid point)
create a stack and iterate from the mid node to the end node and add each node to the stack
iterate through from the head to the mid node and insert each popped node from the stack in between each node and the next
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow;
    const stack = [];
    while (slow) {
        stack.push(slow);
        slow = slow.next;
    }
    // stack = [3, 4]
    // 1 -> 2 -> 3 -> 4 -> 5
    // curr = 1
    // mid = 3
    // 1 -> 5 -> 2 -> 4 -> 3 -> null
    let curr = head;
    while (curr !== mid) {
        const node = stack.pop(); // 4
        const nextNode = curr.next; // 3
        curr.next = node;
        node.next = nextNode;
        curr = nextNode;
    }
    if (curr) curr.next = null;
    return head;
};
