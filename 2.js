/*
2:58pm-3:05pm

two non-empty linked lists representing non-negative integers
digits are stored in reverse order
each node contains a single digit
add the two numbers and return sum as a linked list

no leading zeros except the number 0 itself

2 -> 4 -> 3 -> 1
5 -> 6 -> 6
output:
7 -> 0 -> 0 -> 2

for each position in the linked lists:
add the two node values, keep track of a carry over
if sum is greater than 10, negate the sum by 10 and assign carry over to 1
otherwise assign carry over to 0
create a new node with the sum value and add it to the tail of the new linked list

time complexity:
O(n) where n is the longest linked list
space complexity:
O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let curr = head;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else carry = 0;
        curr.next = new ListNode(sum);
        curr = curr.next;
    }
    return head.next;
};
