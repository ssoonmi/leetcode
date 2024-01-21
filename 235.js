/*
2:53pm-3:08pm
if p has the same value as the root node, then it can be an ancestor
if q has the same value as the root node, then it can be an ancestor
if p is less than the root, then check the left side
if p is greater than the root, then check the right side
if q is less than the root, then check the left side
if q is greater than the root, then check the right side

    4
   / \
  2.  5
 / \
1.  3

r = 4 p = 1 q = 5
if p is less than r && q is less than r return lca of r.left
if p is less than r && q is greater than r return lca of r.left && lca of r.right
if values r === p || r === q return return true
if !r return false

questions I didn't ask:
is it guaranteed that p and q are in the tree?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root;
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    return root;
};
