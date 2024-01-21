/*
2:24pm-2:30pm
if the subroot is null, then return true
1) do dfs on the left child of the root and subroot
2) do dfs on the right child of the root and subroot
if one of those dfs calls returns true, return true
3) if the value of the root node is the same as the value of the subroot,
   do dfs on the left child of the root and the left child of the subroot
   do dfs on the right child of the root and the right child of the subroot
   if both dfs calls are true, then return true
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot, isMatched = false) {
    if (!root && !subRoot) return true;
    if (!subRoot || !root) return false;
    if (root.val === subRoot.val) {
        if (
            isSubtree(root.left, subRoot.left, true) &&
            isSubtree(root.right, subRoot.right, true)
        ) return true;
    }
    if (!isMatched) {
        if (isSubtree(root.left, subRoot)) return true;
        if (isSubtree(root.right, subRoot)) return true;
    }
    return false;
};
