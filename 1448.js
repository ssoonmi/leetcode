/*
3:53pm-4:00pm
good if the path from root to X has no ndoes with a value greater than X

return the number of good nodes in the binary tree

        3
       / \
      1   4
     /   / \
    3   1   5

res = 4
3, 3, 4, 5 are good nodes
dfs where we are keeping track of the maximum value between the root node and the descendant nodes
if the node value is less than the max value, then don't increment the res
if the node value is greater than or equal to the max value, then increment the res by 1
base case: if the node is null, then return the res
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
 * @return {number}
 */
var goodNodes = function(root, maxValue = -Infinity, res = 0) {
    if (!root) return res;
    if (maxValue <= root.val) res += 1;
    return res +
        goodNodes(root.left, Math.max(maxValue, root.val), 0) +
        goodNodes(root.right, Math.max(maxValue, root.val), 0);
};
