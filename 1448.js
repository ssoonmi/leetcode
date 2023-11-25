/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root, maxVal = -Infinity) {
    if (!root) return 0;
    let numNodes = 0;
    if (root.val >= maxVal) numNodes++;
    maxVal = Math.max(root.val, maxVal);
    numNodes += goodNodes(root.left, maxVal);
    numNodes += goodNodes(root.right, maxVal);
    return numNodes;
};
