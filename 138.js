/*
2:44pm - 3:04pm
each node contains a random pointer that could point to any node or null

construct a deep copy of the list where it should consist of exactly n brand new nodes where each new node has its value set to the value of its original node

next and random should point to the new nodes in the copied list (not the original list)

return head of copied node

node is represented by an array [val, randomIndex] where val is node value
and randomIndex is index of the node (0 to n - 1)

question: can a node's random pointer be pointing to itself? yes

O(n) time complexity
O(n) space complexity

iterate through the list and add each node to an array
for each node, assign an index property with a value of its position in the array
iterate through the array and transform each element into a new node in a new array
for each node, reassign the random node a new node if the random node doesn't exist in the new array yet, otherwise reassign the random node in the new array if it exists.
*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return head;
    let original = head;
    const originalToCopy = new Map();
    let copyHead = new Node();
    let prevNode = copyHead;
    while (original) {
        let randomCopy = null;
        if (original.random) {
            randomCopy = originalToCopy.get(original.random);
            if (!randomCopy) {
                randomCopy = new Node(original.random.val);
                originalToCopy.set(original.random, randomCopy);
            }
        }
        let copy = originalToCopy.get(original);
        if (!copy) copy = new Node(original.val);
        copy.random = randomCopy;
        originalToCopy.set(original, copy);
        prevNode.next = copy;
        prevNode = copy;
        original = original.next;
    }
    return copyHead.next;
};
