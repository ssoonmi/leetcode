/*
8:45pm-9:00pm
determine if a binary tree is height balanced
binary tree is height-balanced if the depth of the left is the same or at most one more than the depth of the right
do a dfs to figure out the depth of the right side and the depth of the left side
if the difference is ever greater than 1, return false
*/

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    function depth(root) {
        if (!root) return 0;
        const leftDepth = depth(root.left);
        if (leftDepth === Infinity) return Infinity;
        const rightDepth = depth(root.right);
        if (Math.abs(leftDepth - rightDepth) > 1) return Infinity;
        return 1 + Math.max(leftDepth, rightDepth);
    }
    return depth(root) !== Infinity;
};
