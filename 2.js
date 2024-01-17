/*
10:28pm - 10:49pm
2 non-empty linked lists representing two non-negative integers

digits are stored in reverse order
each node contains a single digit

add the two numbers as a linked list

return the sum as a linked list

the two numbers don't contain any leading zeros

example: 1 -> 6 -> 9    9 -> 5
         961            59
         sum = 1020
         0 -> 2 -> 0 -> 1

iterate through the linked list to figure out what the numbers are
sum up the numbers (turn into a string)
iterate through the sum numbers string and turn each digit into a new node and add it to the new linked list

O(max(n + m)) time complexity where n is the length of the first linked list and m is the length of the second
O(max(n + m)) space complexity

questions I should have asked: how big can the linked lists get?
After 20 zeros in JavaScript, you have to use BigInt to convert strings into numbers and vice versa
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
    let num1 = []; // 1, 6, 9
    let num2 = [];
    // 1 -> 6 -> 9
    while (l1 || l2) {
        if (l1) {
            num1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            num2.push(l2.val);
            l2 = l2.next;
        }
    }
    const sum = BigInt(num1.reverse().join('')) + BigInt(num2.reverse().join(''));
    const sumStr = sum.toString();
    let head = new ListNode();
    let curr = head;
    for (let i = sumStr.length - 1; i >= 0; i--) {
        const node = new ListNode(sumStr[i]);
        curr.next = node;
        curr = node;
    }
    return head.next;
};
