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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const queue = [[root, 0]];
    const res = [];
    while (queue.length) {
        const [root, i] = queue.shift();
        if (!root) continue;
        res[i] = root.val;
        queue.push([root.left, i + 1]);
        queue.push([root.right, i + 1]);
    }
    return res;
};
