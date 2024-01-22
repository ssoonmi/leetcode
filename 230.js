/*
10:01pm-10:08pm

root binary search tree
kth smallest value
1-indexed of all the values of the nodes in the tree

binary search tree
inorder traversal
we check the left side of the tree and add values from left to right to the result array
if the result array has a length of k, then we return the last element in the result array
dfs through the tree using recursion
return the result array if the result array has a length of k as a base case
return the result array if there is no root
call dfs on the left side first and then add the root node to the result array and then call dfs on the right side last
if after adding the root node to the result array, the result array has a length k or greater, then return the result array, otherwise call dfs on the right side and then return the result array
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = [];
    function dfs(root) {
        if (!root) return;
        if (res.length >= k) return;
        dfs(root.left);
        res.push(root.val);
        if (res.length >= k) return;
        dfs(root.right);
    }
    dfs(root);
    // [0, 1, 2, 3] (if k = 4 we want to return 3)
    return res[k - 1];
};
