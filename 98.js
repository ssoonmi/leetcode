/*

valid BST
left subtree contains only nodes with keys less than the node's key
the right subtree contains only nodes with keys greater than the node's key
both left and right must also be binary trees
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
var isValidBST = function(root, maxVal = Infinity, minVal = -Infinity) {
    if (!root) return true;
    if (root.val <= minVal) return false;
    if (root.val >= maxVal) return false;
    return isValidBST(root.left, root.val, minVal) && isValidBST(root.right, maxVal, root.val);
};
