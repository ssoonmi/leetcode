const dfs = function (root, target, stack = []) {
    if (!root) return null;
    stack.push(root);
    if (root.val === target.val) return stack;
    const left = dfs(root.left, target, stack);
    if (left) return left;
    const right = dfs(root.right, target, stack);
    if (right) return right;
    stack.pop();
    return null;
}

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
    // Simple solution:
    // if (!root) return null;
    // if (root === p || root === q) return root;
    // const left = lowestCommonAncestor(root.left, p, q);
    // const right = lowestCommonAncestor(root.right, p, q);
    // if (left && right) return root;
    // return left || right;

    // solution using stack:
    const stackP = dfs(root, p);
    const stackQ = dfs(root, q);
    if (!stackP || !stackQ) return null;
    while (stackP.length && stackQ.length) {
        if (stackP.length > stackQ.length) {
            stackP.pop();
        } else if (stackP.length < stackQ.length) {
            stackQ.pop();
        } else {
            const aP = stackP.pop();
            const aQ = stackQ.pop();
            if (aP.val === aQ.val) return aP;
        }
    }
    return null;
};
