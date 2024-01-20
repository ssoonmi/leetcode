/*
3 min
invert a binary tree where left = right and right = left

recursively call the function on the left and right sides
base case: return null when root is null
recursive step: reassign right to left and left to right
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    [root.right, root.left] = [root.left, root.right];
    invertTree(root.right);
    invertTree(root.left);
    return root;
};
