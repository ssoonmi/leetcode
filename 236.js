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
var lowestCommonAncestor = function(root, p, q, memo = {}) {
    if (!root) return null;
    let findP = p;
    let findQ = q;
    if (p && root.val === p.val) {
        memo.p = root;
        findP = null;
    } else if (q && root.val === q.val) {
        memo.q = root;
        findQ = null;
    }
    if (findQ || findP) {
        const left = lowestCommonAncestor(root.left, findP, findQ, memo);
        if (left) return left;
    }
    if (memo.q) findQ = null;
    if (memo.p) findP = null;
    if (findQ || findP) {
        const right = lowestCommonAncestor(root.right, findP, findQ, memo);
        if (right) return right;
    }
    if (p && q && memo.p && memo.q) {
        delete memo.p;
        delete memo.q;
        return root;
    }
    return null;
};
