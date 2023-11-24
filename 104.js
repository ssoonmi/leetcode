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
var maxDepth = function(root) {
    if (!root) return 0;
    const leftDepth = root.left ? maxDepth(root.left) : 0;
    const rightDepth = root.right ? maxDepth(root.right) : 0;
    return Math.max(leftDepth + 1, rightDepth + 1);
};
