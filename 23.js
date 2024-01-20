/*
given an array k linked lists, each one is sorted in ascending order

merge each one together one by one
time complexity O(n * k) where n is the average number of nodes in all the linked lists and k is the size of the array
space complexity O(1) since we are just using the existing node in the linked lists
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function(lists) {
//     const head = new ListNode();
//     let currNode = head;
//     currNode.next = lists[0];
//     let prevNode = head;
//     if (currNode.next) currNode = currNode.next;
//     for (let i = 1; i < lists.length; i++) {
//         let otherNode = lists[i];
//         if (currNode === head) {
//             currNode.next = otherNode;
//             currNode = currNode.next;
//             continue;
//         }
//         while (currNode && otherNode) {
//             if (otherNode.val < currNode.val) {
//                 // head -> 3
//                 //         |
//                 // head -> 2 -> 3

//                 // head -> 
//                 prevNode.next = otherNode;
//                 [currNode, otherNode] = [otherNode, currNode];
//             }
//             if (!currNode.next) {
//                 currNode.next = otherNode;
//                 break;
//             }
//             prevNode = currNode;
//             currNode = currNode.next;
//         }
//         currNode = head.next || head;
//         prevNode = head;
//     }
//     return head.next || null;
// };
// var mergeKLists = function(lists) {
//     const head = new ListNode();
//     let curr = head;
//     while (true) {
//         let minNodeIdx = null;
//         for (let i = 0; i < lists.length; i++) {
//             if (!lists[i]) continue;
//             if (minNodeIdx === null || lists[minNodeIdx].val > lists[i].val) {
//                 minNodeIdx = i;
//             }
//         }
//         if (minNodeIdx !== null) {
//             curr.next = lists[minNodeIdx];
//             curr = curr.next;
//             lists[minNodeIdx] = lists[minNodeIdx].next;
//         } else break;
//     }
//     return head.next;
// };

// O(n * logk) time complexity
const mergeLists = function(list1, list2) {
    const head = new ListNode();
    let curr = head;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if (list1) curr.next = list1 || null;
    else curr.next = list2 || null;
    return head.next || null;
};

var mergeKLists = function(lists, i = 0, j = lists.length - 1) {
    if (j < i) return null;
    if (i === j) return lists[i] || null;
    const mid = Math.floor((i + j) / 2);
    // i = 0, j = 3, mid = 1 // i = 0, j = 1, mid = 0 // i = 2, j = 3, mid = 2
    const left = mergeKLists(lists, i, mid); // 0, 1 // 0, 0 // 2, 2
    const right = mergeKLists(lists, mid + 1, j); // 2, 3 // 1, 1 // 3, 3
    return mergeLists(left, right);
}
