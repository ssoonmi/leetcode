/*
every k nodes, reverse the nodes

iterate through the linked list and create push each node into the stack until
the stack has a length of k
when the stack has a length of k, reverse the linked list

1 -> 2 -> 3 -> 4 -> 5
k = 3
prev = head
stack = [1, 2, 3]
prev.next = 3
3.next = 2
2.next = 1
1.next = 4

O(n) time complexity (iterate through the linked list back and forth once)
O(k) space complexity (max stack length)
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
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function(head, k) {
//     const stack = [];
//     const newHead = new ListNode();
//     let prev = newHead;
//     prev.next = head;
//     let curr = head;
//     while (curr) {
//         stack.push(curr);
//         curr = curr.next;
//         if (stack.length === k) {
//             while (stack.length) {
//                 prev.next = stack.pop();
//                 prev = prev.next;
//             }
//         }
//     }
//     prev.next = stack[0] || null;
//     return newHead.next;
// };

// O(1) space, O(n) time complexity
var reverseKGroup = function(head, k) {
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }
    const newHead = new ListNode();
    newHead.next = head;
    let start = newHead;
    for (let j = k; j <= length; j += k) {
        let oldCurr = start.next;
        let prev = start.next;
        let curr = prev.next;
        for (let i = 0; i < k - 1; i++) {
            // old = 1
            // newHead -> 1 -> 2 -> 3
            //            p,o  c
            // newHead -> 2 -> 1 -> 2  3
            //            p    o       c
            // newHead -> 3 -> 2 -> 1 -> 2  null
            //            p         o       c
            // newHead -> 3 -> 2 -> 1 -> null
            //                      o
            // newHead.next = c
            // nextNode = c.next
            // c.next = p
            // p = c
            // c = nextNode

            // old.next = c
            start.next = curr;
            const nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        start = oldCurr;
        oldCurr.next = curr;
    }
    return newHead.next;
};
